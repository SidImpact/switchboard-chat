"use client";

import { useState, useEffect, useRef } from "react";

// Inline SVG Icon Components for maximum portability and zero setup
const IconSparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z"/>
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z"/>
  </svg>
);

const IconBrain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2.96-1.5-5.5-3.8-7a5.5 5.5 0 0 0-10.4 0C2.5 9.5 1 12.04 1 15a7 7 0 0 0 7 7z"/>
    <path d="M12 2v20"/>
    <path d="M17 15h4"/>
    <path d="M3 15h4"/>
    <path d="M12 9h6"/>
    <path d="M6 9h6"/>
  </svg>
);

const IconLightning = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m13 2-2 10h9L9 22l2-10H2L13 2Z"/>
  </svg>
);

const IconRefresh = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
    <path d="M16 16h5v5"/>
  </svg>
);

const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const IconChat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

// Mock chat messages library for rich, realistic switching responses
const MOCK_ANSWERS = {
  chatgpt: [
    "Understood. I will help structure the next steps. Here is how I would optimize the flow from a systems architecture standpoint:\n\n1. Cache configuration tokens locally.\n2. Create a clean abstractions file for APIs.\n\nLet me know if you want me to write the exact setup.",
    "Based on the previous guidelines you established (with Claude and Gemini), we need to ensure that the error logs are properly captured. I'll write the middleware to handle this right away. Let's write standard Express routing logic."
  ],
  claude: [
    "That makes complete sense. Given our previous discussion about web scraping protocols, we should pay careful attention to handling CSS selectors cleanly. Here is a robust Python parsing script:\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\n\ndef fetch_data(url):\n    headers = {'User-Agent': 'Mozilla/5.0'}\n    r = requests.get(url, headers=headers)\n    soup = BeautifulSoup(r.text, 'html.parser')\n    return [item.text for item in soup.find_all('h2')]\n```\n\nThis gives us a clean structure to build on.",
    "I've read through the context map synchronized from Gemini. I notice we are dealing with Cloudflare. I recommend adding standard retry delays and rotation logic so the server doesn't flag our requests."
  ],
  gemini: [
    "I have conducted a quick search on the target site constraints based on the context so far.\n\n🔍 **Search Results Summary:**\n* Target site has active rate limiting.\n* Cloudflare checks user-agent strings and requests intervals.\n\n**Recommendation:** Use the `cloudscraper` module instead of requests to bypass standard client verification checks.",
    "Analyzing the layout parameters you specified previously. The smartest approach here is to write a background worker thread that extracts the elements dynamically."
  ]
};

export default function Home() {
  // App states
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModel, setActiveModel] = useState("chatgpt"); // 'chatgpt' | 'claude' | 'gemini'
  const [syncMode, setSyncMode] = useState("smart"); // 'full' | 'smart' | 'clean'
  const [inputMessage, setInputMessage] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // API Keys state (loaded from LocalStorage client-side)
  const [apiKeys, setApiKeys] = useState({
    chatgpt: "",
    claude: "",
    gemini: ""
  });

  // Chat sessions state
  const [sessions, setSessions] = useState([
    { id: "session-1", title: "Python Web Scraper Build" },
    { id: "session-2", title: "Refactoring React Styles" }
  ]);
  const [activeSessionId, setActiveSessionId] = useState("session-1");

  // Message Logs mapped by Session ID
  const [messageLogs, setMessageLogs] = useState({
    "session-1": [
      {
        id: "msg-1",
        sender: "user",
        text: "Let's build a quick python web scraper using BeautifulSoup.",
        timestamp: "10:30 PM",
        model: "claude"
      },
      {
        id: "msg-2",
        sender: "assistant",
        text: "Here is the basic python script using BeautifulSoup to fetch and parse html:\n\n```python\nimport requests\nfrom bs4 import BeautifulSoup\n\ndef fetch_titles(url):\n    response = requests.get(url)\n    soup = BeautifulSoup(response.text, 'html.parser')\n    return [title.text for title in soup.find_all('h2')]\n```\nThis gives us a clean list of headline elements.",
        timestamp: "10:31 PM",
        model: "claude"
      },
      {
        id: "msg-3",
        sender: "user",
        text: "Now, I need to check if there are standard scraper blocking rules on target.com. Switch to Gemini to check.",
        timestamp: "10:32 PM",
        model: "gemini"
      },
      {
        id: "msg-4",
        sender: "assistant",
        text: "🔍 **Web Search Results for: target.com scraper blocking**\n\nBased on current web records, target.com implements Cloudflare Web Application Firewall (WAF) which aggressively blocks raw `requests` sessions lacking valid User-Agent strings, Cookies, or TLS fingerprints.\n\n**Recommendation:**\n1. Use `cloudscraper` in python.\n2. Emulate Chrome TLS fingerprints.\n3. Add random delays between requests.",
        timestamp: "10:33 PM",
        model: "gemini"
      }
    ],
    "session-2": [
      {
        id: "msg-5",
        sender: "user",
        text: "How do I align text vertically in a CSS flexbox?",
        timestamp: "Yesterday",
        model: "chatgpt"
      },
      {
        id: "msg-6",
        sender: "assistant",
        text: "You can align items vertically in flexbox using `align-items: center` on the container, provided that the main axis is horizontal (`flex-direction: row`). If the main axis is vertical (`flex-direction: column`), use `justify-content: center`.",
        timestamp: "Yesterday",
        model: "chatgpt"
      }
    ]
  });

  const messagesEndRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageLogs, activeSessionId]);

  // Load API Keys from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedKeys = localStorage.getItem("switchboard_api_keys");
      if (savedKeys) {
        try {
          setApiKeys(JSON.parse(savedKeys));
        } catch (e) {
          console.error("Error loading keys", e);
        }
      }
    }
  }, []);

  const handleSaveKeys = (newKeys) => {
    setApiKeys(newKeys);
    localStorage.setItem("switchboard_api_keys", JSON.stringify(newKeys));
    setIsSettingsOpen(false);
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isGenerating) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      model: activeModel
    };

    // Update messages log with user message
    const currentSessionMsgs = messageLogs[activeSessionId] || [];
    const updatedMsgs = [...currentSessionMsgs, userMsg];
    
    setMessageLogs({
      ...messageLogs,
      [activeSessionId]: updatedMsgs
    });
    setInputMessage("");
    setIsGenerating(true);

    // 2. Query Next.js backend proxy
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: activeModel,
          messages: updatedMsgs,
          syncMode: syncMode,
          apiKey: apiKeys[activeModel]
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred while generating response.");
      }

      const assistantMsg = {
        id: `msg-${Date.now() + 2}`,
        sender: "assistant",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        model: activeModel
      };

      setMessageLogs(prevLogs => ({
        ...prevLogs,
        [activeSessionId]: [...prevLogs[activeSessionId], assistantMsg]
      }));

    } catch (err) {
      console.error("Chat error", err);
      const errorMsg = {
        id: `msg-${Date.now() + 3}`,
        sender: "assistant",
        text: `❌ **API Connection Error**:\n\n${err.message}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        model: activeModel
      };

      setMessageLogs(prevLogs => ({
        ...prevLogs,
        [activeSessionId]: [...prevLogs[activeSessionId], errorMsg]
      }));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCreateNewChat = () => {
    const newSessionId = `session-${Date.now()}`;
    const newSession = {
      id: newSessionId,
      title: `New Session ${sessions.length + 1}`
    };
    
    setSessions([newSession, ...sessions]);
    setMessageLogs({
      ...messageLogs,
      [newSessionId]: []
    });
    setActiveSessionId(newSessionId);
  };

  // Helper to determine text for Active/Standby states
  const getBotStateText = (botName) => {
    if (activeModel === botName) {
      return "ACTIVE";
    }
    return "READ ONLY";
  };

  // Helper to get active input class
  const getInputGlowClass = () => {
    if (activeModel === "chatgpt") return "glow-chatgpt";
    if (activeModel === "claude") return "glow-claude";
    if (activeModel === "gemini") return "glow-gemini";
    return "";
  };

  const activeSessionMessages = messageLogs[activeSessionId] || [];

  return (
    <main className="app-container">
      {/* SIDEBAR */}
      <aside className={`sidebar transition-all ${sidebarOpen ? "" : "closed"}`}>
        <div className="sidebar-header">
          <h1 className="brand-title">
            <IconSparkles />
            Switchboard AI
          </h1>
          <button className="menu-toggle-btn" onClick={() => setSidebarOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <button className="new-chat-btn" onClick={handleCreateNewChat}>
          <IconPlus />
          New Thread
        </button>

        <div className="sidebar-content">
          <div style={{ padding: "0 8px 8px 8px", fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            Conversations
          </div>
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`session-item transition-all ${activeSessionId === session.id ? "active" : ""}`}
              onClick={() => setActiveSessionId(session.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                <IconChat />
                {session.title}
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <button className="footer-btn transition-all" onClick={() => setIsSettingsOpen(true)}>
            <IconSettings />
            Settings & Keys
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--text-muted)", paddingLeft: "12px" }}>
            <div className={`sync-indicator ${isGenerating ? "sync-active" : ""}`}></div>
            <span>{isGenerating ? "Processing query..." : "Standby Bots Synchronized"}</span>
          </div>
        </div>
      </aside>

      {/* CHAT INTERFACE */}
      <section className="chat-container">
        {/* TOP BAR / SWITCHER */}
        <header className="top-bar">
          <div className="left-top-section">
            {!sidebarOpen && (
              <button className="menu-toggle-btn" onClick={() => setSidebarOpen(true)}>
                <IconMenu />
              </button>
            )}
            <div className="model-tabs">
              <button
                className={`model-tab transition-all ${activeModel === "chatgpt" ? "active chatgpt" : ""}`}
                onClick={() => setActiveModel("chatgpt")}
              >
                <div className={`sync-indicator ${activeModel === "chatgpt" ? "sync-active" : ""}`}></div>
                ChatGPT Pro
              </button>
              <button
                className={`model-tab transition-all ${activeModel === "gemini" ? "active gemini" : ""}`}
                onClick={() => setActiveModel("gemini")}
              >
                <div className={`sync-indicator ${activeModel === "gemini" ? "sync-active" : ""}`}></div>
                Gemini Pro
              </button>
              <button
                className={`model-tab transition-all ${activeModel === "claude" ? "active claude" : ""}`}
                onClick={() => setActiveModel("claude")}
              >
                <div className={`sync-indicator ${activeModel === "claude" ? "sync-active" : ""}`}></div>
                Claude 3.5
              </button>
            </div>
          </div>

          {/* Sync Status Cards */}
          <div className="sync-status-display">
            <div className="bot-sync-card">
              <span style={{ color: activeModel === "chatgpt" ? "var(--chatgpt-color)" : "var(--text-muted)" }}>GPT:</span>
              <span style={{ fontWeight: "700", fontSize: "10px", color: activeModel === "chatgpt" ? "var(--chatgpt-color)" : "var(--text-muted)" }}>
                {getBotStateText("chatgpt")}
              </span>
            </div>
            <div className="bot-sync-card">
              <span style={{ color: activeModel === "gemini" ? "var(--gemini-color)" : "var(--text-muted)" }}>GEM:</span>
              <span style={{ fontWeight: "700", fontSize: "10px", color: activeModel === "gemini" ? "var(--gemini-color)" : "var(--text-muted)" }}>
                {getBotStateText("gemini")}
              </span>
            </div>
            <div className="bot-sync-card">
              <span style={{ color: activeModel === "claude" ? "var(--claude-color)" : "var(--text-muted)" }}>CLD:</span>
              <span style={{ fontWeight: "700", fontSize: "10px", color: activeModel === "claude" ? "var(--claude-color)" : "var(--text-muted)" }}>
                {getBotStateText("claude")}
              </span>
            </div>
          </div>
        </header>

        {/* MESSAGES VIEW */}
        <div className="message-list">
          {activeSessionMessages.length === 0 ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", gap: "12px" }}>
              <IconSparkles />
              <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--text-secondary)" }}>Unified Switchboard Thread</div>
              <div style={{ fontSize: "13px", maxWidth: "320px", textAlign: "center", lineHeight: "1.4" }}>
                Select a chatbot above, choose your sync mode, and start chatting. Switch models anytime.
              </div>
            </div>
          ) : (
            activeSessionMessages.map((msg) => (
              <div key={msg.id} className={`message-wrapper animate-fade-in ${msg.sender === "user" ? "user" : "assistant"}`}>
                <div className={`message-bubble ${msg.sender === "user" ? "user" : "assistant"}`}>
                  {msg.text}
                </div>
                <div className="message-meta">
                  {msg.sender === "assistant" && (
                    <span className={`message-badge ${msg.model}`}>
                      {msg.model}
                    </span>
                  )}
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            ))
          )}
          {isGenerating && (
            <div className="message-wrapper assistant animate-fade-in">
              <div className="message-bubble assistant" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                <span className="sync-indicator sync-active"></span>
                <span>{activeModel.toUpperCase()} is digesting context and typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT PANEL */}
        <div className="input-area">
          <form onSubmit={handleSendMessage}>
            <div className={`input-box-container transition-all ${getInputGlowClass()}`}>
              <textarea
                className="textarea-input"
                placeholder={`Ask ${activeModel.toUpperCase()}... (Switch tabs above at any time)`}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <div className="input-toolbar">
                {/* Sync Mode Selector */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: "600" }}>Sync Mode:</span>
                  <div className="sync-selector">
                    <button
                      type="button"
                      className={`sync-btn transition-all ${syncMode === "full" ? "active" : ""}`}
                      onClick={() => setSyncMode("full")}
                      title="Full Sync: Transfers 100% of conversation transcript context"
                    >
                      <IconLightning />
                      Full
                    </button>
                    <button
                      type="button"
                      className={`sync-btn transition-all ${syncMode === "smart" ? "active" : ""}`}
                      onClick={() => setSyncMode("smart")}
                      title="Smart Sync: Background summarization, retaining requirements & core code"
                    >
                      <IconBrain />
                      Smart
                    </button>
                    <button
                      type="button"
                      className={`sync-btn transition-all ${syncMode === "clean" ? "active" : ""}`}
                      onClick={() => setSyncMode("clean")}
                      title="Clean Handover: Discards history context, passes last output as starter context"
                    >
                      <IconRefresh />
                      Clean
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="send-btn transition-all"
                  disabled={!inputMessage.trim() || isGenerating}
                >
                  <span>Send</span>
                  <IconSend />
                </button>
              </div>
            </div>
          </form>
          <div style={{ fontSize: "11px", color: "var(--text-muted)", textAlign: "center", marginTop: "10px" }}>
            Standby bots are updated in read-only mode using **{syncMode.toUpperCase()} SYNC** setup.
          </div>
        </div>
      </section>

      {/* SETTINGS MODAL */}
      {isSettingsOpen && (
        <SettingsModal
          initialKeys={apiKeys}
          onSave={handleSaveKeys}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </main>
  );
}

// Subcomponent: Settings & Keys Modal
function SettingsModal({ initialKeys, onSave, onClose }) {
  const [keys, setKeys] = useState(initialKeys);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(keys);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">API Keys Configuration</h2>
          <button className="close-btn" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.4", display: "flex", gap: "8px", alignItems: "flex-start", backgroundColor: "rgba(99, 102, 241, 0.05)", padding: "10px", borderRadius: "8px", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
              <IconLock />
              <span>
                **Security Info**: Your API keys are saved directly in your browser's local storage and are never uploaded to any remote server.
              </span>
            </div>

            <div className="form-group">
              <label className="form-label">ChatGPT (OpenAI API Key)</label>
              <input
                type="password"
                className="form-input"
                placeholder="sk-proj-..."
                value={keys.chatgpt}
                onChange={(e) => setKeys({ ...keys, chatgpt: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Gemini (Google AI API Key)</label>
              <input
                type="password"
                className="form-input"
                placeholder="AIzaSy..."
                value={keys.gemini}
                onChange={(e) => setKeys({ ...keys, gemini: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Claude (Anthropic API Key)</label>
              <input
                type="password"
                className="form-input"
                placeholder="sk-ant-..."
                value={keys.claude}
                onChange={(e) => setKeys({ ...keys, claude: e.target.value })}
              />
            </div>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Keys
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
