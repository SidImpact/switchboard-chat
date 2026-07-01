import { NextResponse } from "next/server";

// Standardize message roles to prevent API errors (Anthropic/Gemini require alternating roles)
function sanitizeMessagesForAPI(rawMessages, targetProvider) {
  if (rawMessages.length === 0) return [];

  // 1. Map roles to provider-specific labels
  const mapped = rawMessages.map(msg => {
    let role = "user";
    if (msg.sender === "assistant") {
      role = targetProvider === "gemini" ? "model" : "assistant";
    }
    return {
      role: role,
      content: msg.text
    };
  });

  // 2. Merge consecutive messages with the same role
  const merged = [];
  for (const msg of mapped) {
    if (merged.length > 0 && merged[merged.length - 1].role === msg.role) {
      // Append text with a double newline
      merged[merged.length - 1].content += "\n\n" + msg.content;
    } else {
      merged.push({ ...msg });
    }
  }

  // 3. Ensure the list starts with a 'user' turn (required by Anthropic/Gemini)
  if (merged.length > 0 && merged[0].role !== "user") {
    merged.unshift({
      role: "user",
      content: "[System Context: Thread resumed from previous chat session]"
    });
  }

  return merged;
}

// Simple Server-Side Smart Sync Summarizer
async function performSmartSync(messages, apiKey, provider) {
  if (messages.length <= 4) {
    // Too short to summarize, keep raw context
    return messages;
  }

  // Extract instructions/history to summarize
  const conversationsToSummarize = messages.slice(0, -2); // Summarize everything except the last 2 turns
  const activeRecentTurns = messages.slice(-2); // Keep the last 2 turns in full detail

  const summaryPrompt = `You are a helper context compressor. Summarize the following AI chat history into a highly compact "Memory Map". 
Ensure you maintain:
1. Core instructions, coding languages, versions, or system constraints specified by the user.
2. The current active state (what has been built so far).
Do NOT include conversational chatter. Format as a brief, bulleted list.

Chat History to Summarize:
${conversationsToSummarize.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join("\n\n")}`;

  try {
    let summaryText = "";

    if (provider === "chatgpt" && apiKey) {
      // Call OpenAI to summarize
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: summaryPrompt }],
          max_tokens: 250
        })
      });
      if (response.ok) {
        const data = await response.json();
        summaryText = data.choices?.[0]?.message?.content || "";
      }
    } else if (provider === "gemini" && apiKey) {
      // Call Gemini to summarize
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: summaryPrompt }] }]
        })
      });
      if (response.ok) {
        const data = await response.json();
        summaryText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      }
    } else if (provider === "claude" && apiKey) {
      // Call Anthropic to summarize
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022",
          max_tokens: 250,
          messages: [{ role: "user", content: summaryPrompt }]
        })
      });
      if (response.ok) {
        const data = await response.json();
        summaryText = data.content?.[0]?.text || "";
      }
    }

    if (summaryText) {
      // Return structured context: Summary + recent turns
      return [
        {
          id: "sync-summary",
          sender: "user",
          text: `[🧠 Smart Sync Background Context - Memory Map of previous turns:\n${summaryText}]`,
          timestamp: ""
        },
        ...activeRecentTurns
      ];
    }
  } catch (err) {
    console.error("Smart Sync error", err);
  }

  // Fallback to original messages if summarization fails
  return messages;
}

export async function POST(req) {
  try {
    const { model, messages, syncMode, apiKey } = await req.json();

    // 1. Fallback to server environment keys if user didn't enter one
    let activeKey = apiKey;
    if (!activeKey) {
      if (model === "chatgpt") activeKey = process.env.OPENAI_API_KEY;
      if (model === "claude") activeKey = process.env.ANTHROPIC_API_KEY;
      if (model === "gemini") activeKey = process.env.GEMINI_API_KEY;
    }

    if (!activeKey) {
      return NextResponse.json(
        { error: `API Key missing for model ${model.toUpperCase()}. Please configure it in your Settings, or add server-side keys.` },
        { status: 400 }
      );
    }

    // 2. Process sync mode context optimization
    let processedMessages = [...messages];

    if (syncMode === "clean" && messages.length > 0) {
      // Clean Handover: Keep only the last assistant response (if any) and the latest user turn
      const lastUserMsg = messages[messages.length - 1];
      const previousAssistantMsg = messages.slice(0, -1).reverse().find(m => m.sender === "assistant");
      
      processedMessages = previousAssistantMsg 
        ? [previousAssistantMsg, lastUserMsg]
        : [lastUserMsg];
    } else if (syncMode === "smart" && messages.length > 2) {
      // Smart Sync: Summarize older turns
      processedMessages = await performSmartSync(messages, activeKey, model);
    }

    // 3. Dispatch to specific provider API
    if (model === "chatgpt") {
      const apiMessages = sanitizeMessagesForAPI(processedMessages, "chatgpt");
      
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${activeKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Cost-effective default for MVP
          messages: apiMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        return NextResponse.json(
          { error: errData.error?.message || "OpenAI API Error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      const answer = data.choices?.[0]?.message?.content || "";
      return NextResponse.json({ text: answer });

    } else if (model === "claude") {
      const apiMessages = sanitizeMessagesForAPI(processedMessages, "claude");

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": activeKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022", // Cost-effective default for MVP
          max_tokens: 1500,
          messages: apiMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        return NextResponse.json(
          { error: errData.error?.message || "Anthropic API Error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      const answer = data.content?.[0]?.text || "";
      return NextResponse.json({ text: answer });

    } else if (model === "gemini") {
      const apiMessages = sanitizeMessagesForAPI(processedMessages, "gemini");

      // Format for Gemini parts syntax
      const geminiContents = apiMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${activeKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: geminiContents
          })
        }
      );

      if (!response.ok) {
        const errData = await response.json();
        return NextResponse.json(
          { error: errData.error?.message || "Google Gemini API Error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      return NextResponse.json({ text: answer });
    }

    return NextResponse.json({ error: "Invalid model selection" }, { status: 400 });

  } catch (err) {
    console.error("API proxy error", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
