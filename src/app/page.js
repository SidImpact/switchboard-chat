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

const IconAltChatIntersection = ({ size = 22, style = {} }) => (
  <img 
    src="/logo.png" 
    alt="Alt-Chat Logo" 
    width={size} 
    height={size} 
    style={{ 
      borderRadius: size > 30 ? "12px" : "5px", 
      objectFit: "cover", 
      flexShrink: 0,
      marginRight: "6px",
      display: "inline-block",
      verticalAlign: "middle",
      ...style 
    }} 
  />
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

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const IconEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"></path>
  </svg>
);

const IconHeart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4"/>
    <path d="M12 8h.01"/>
  </svg>
);

const IconCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

const IconCheckmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconX = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CHATBOT_DETAILS = [
  {
    id: "chatgpt",
    name: "ChatGPT Pro",
    provider: "OpenAI",
    tagline: "Superb logic structuring and versatile reasoning.",
    pros: [
      "Outstanding general reasoning and multi-step logic",
      "Exceptional conversational flow and natural responses",
      "High knowledge cutoff with extensive reference data"
    ],
    cons: [
      "Can occasionally be verbose or overly structured",
      "Strict system-level policies/filters on sensitive topics",
      "Frequent rate limits on high-demand premium endpoints"
    ]
  },
  {
    id: "gemini",
    name: "Gemini Pro",
    provider: "Google AI",
    tagline: "Massive context window & real-time search integration.",
    pros: [
      "Enormous context window for bulk documents & codebases",
      "Native Google Search grounding for real-time web facts",
      "High execution speed and multimodal perception"
    ],
    cons: [
      "Can sometimes produce overly formatted markdown lists",
      "Safety filters can occasionally block benign code queries",
      "Niche syntax handling can feel slightly less optimized"
    ]
  },
  {
    id: "claude",
    name: "Claude 3.5",
    provider: "Anthropic",
    tagline: "Industry-standard for code generation and analysis.",
    pros: [
      "Exceptional accuracy for coding, refactoring & debugging",
      "Superb at following complex system instructions",
      "Nuanced, analytical, and highly human-like writing tone"
    ],
    cons: [
      "No native live web search capabilities",
      "Smaller relative context window limits for large feeds",
      "Strict input/output token cost structure"
    ]
  }
];

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
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [aboutActiveTab, setAboutActiveTab] = useState("about");

  // API Keys state (loaded from LocalStorage client-side)
  const [apiKeys, setApiKeys] = useState({
    chatgpt: "",
    claude: "",
    gemini: ""
  });

  // Chat sessions state (initialized empty to prevent hydration mismatch)
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [messageLogs, setMessageLogs] = useState({});
  const [isHydrated, setIsHydrated] = useState(false);
  const [editingSessionId, setEditingSessionId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const messagesEndRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageLogs, activeSessionId]);

  // Load API Keys, Sessions, and Message Logs from localStorage on mount & close sidebar on mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Load API Keys
      const savedKeys = localStorage.getItem("switchboard_api_keys");
      if (savedKeys) {
        try {
          setApiKeys(JSON.parse(savedKeys));
        } catch (e) {
          console.error("Error loading keys", e);
        }
      }
      
      // 2. Load Chat Sessions
      const savedSessions = localStorage.getItem("switchboard_sessions");
      const savedActiveSessionId = localStorage.getItem("switchboard_active_session_id");
      const savedMessageLogs = localStorage.getItem("switchboard_message_logs");

      let loadedSessions = [];
      let loadedActiveSessionId = null;
      let loadedMessageLogs = {};

      if (savedSessions) {
        try {
          loadedSessions = JSON.parse(savedSessions);
        } catch (e) {
          console.error("Error parsing sessions", e);
        }
      }

      if (savedActiveSessionId) {
        loadedActiveSessionId = savedActiveSessionId;
      }

      if (savedMessageLogs) {
        try {
          loadedMessageLogs = JSON.parse(savedMessageLogs);
        } catch (e) {
          console.error("Error parsing message logs", e);
        }
      }

      // If no sessions exist in storage, create default initial sessions with mock history
      if (loadedSessions.length === 0) {
        const defaultSessionId = "session-1";
        const secondarySessionId = "session-2";
        
        loadedSessions = [
          { id: defaultSessionId, title: "Python Web Scraper Build" },
          { id: secondarySessionId, title: "Refactoring React Styles" }
        ];
        loadedActiveSessionId = defaultSessionId;
        
        loadedMessageLogs = {
          [defaultSessionId]: [
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
          [secondarySessionId]: [
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
        };

        // Write defaults to localStorage
        localStorage.setItem("switchboard_sessions", JSON.stringify(loadedSessions));
        localStorage.setItem("switchboard_active_session_id", loadedActiveSessionId);
        localStorage.setItem("switchboard_message_logs", JSON.stringify(loadedMessageLogs));
      }

      setSessions(loadedSessions);
      setActiveSessionId(loadedActiveSessionId);
      setMessageLogs(loadedMessageLogs);
      setIsHydrated(true);

      // Default sidebar to closed on mobile viewports
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    }
  }, []);

  // Sync state changes to localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("switchboard_sessions", JSON.stringify(sessions));
    }
  }, [sessions, isHydrated]);

  useEffect(() => {
    if (isHydrated && activeSessionId) {
      localStorage.setItem("switchboard_active_session_id", activeSessionId);
    }
  }, [activeSessionId, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("switchboard_message_logs", JSON.stringify(messageLogs));
    }
  }, [messageLogs, isHydrated]);

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

  const handleDeleteSession = (sessionIdToDelete, e) => {
    if (e) e.stopPropagation(); // Prevent selecting session when clicking delete
    
    const updatedSessions = sessions.filter(s => s.id !== sessionIdToDelete);
    setSessions(updatedSessions);

    const updatedMessageLogs = { ...messageLogs };
    delete updatedMessageLogs[sessionIdToDelete];
    setMessageLogs(updatedMessageLogs);

    // If we deleted the active session, switch activeSessionId
    if (activeSessionId === sessionIdToDelete) {
      if (updatedSessions.length > 0) {
        setActiveSessionId(updatedSessions[0].id);
      } else {
        const newSessionId = `session-${Date.now()}`;
        const newSession = {
          id: newSessionId,
          title: "New Session 1"
        };
        setSessions([newSession]);
        setMessageLogs({
          [newSessionId]: []
        });
        setActiveSessionId(newSessionId);
      }
    }
  };

  const handleSaveRename = (sessionId) => {
    if (!editTitle.trim()) {
      setEditingSessionId(null);
      return;
    }
    const updatedSessions = sessions.map(s => {
      if (s.id === sessionId) {
        return { ...s, title: editTitle.trim() };
      }
      return s;
    });
    setSessions(updatedSessions);
    setEditingSessionId(null);
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
            <IconAltChatIntersection />
            Alt-Chat
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
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              {editingSessionId === session.id ? (
                <input
                  type="text"
                  className="rename-input"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  onBlur={() => handleSaveRename(session.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveRename(session.id);
                    if (e.key === "Escape") setEditingSessionId(null);
                  }}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
                    <IconChat />
                    {session.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <button
                      type="button"
                      className="rename-session-btn transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingSessionId(session.id);
                        setEditTitle(session.title);
                      }}
                      title="Rename Session"
                    >
                      <IconEdit />
                    </button>
                    <button
                      type="button"
                      className="delete-session-btn transition-all"
                      onClick={(e) => handleDeleteSession(session.id, e)}
                      title="Delete Session"
                    >
                      <IconTrash />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* BOTS DASHBOARD (Only visible on mobile via CSS) */}
        <div className="sidebar-status-dashboard">
          <div style={{ fontSize: "11px", fontWeight: "700", color: "var(--text-muted)", letterSpacing: "0.5px", textTransform: "uppercase", paddingBottom: "10px", paddingLeft: "8px" }}>
            Bots Dashboard
          </div>
          <div className="sidebar-status-list">
            <div className={`sidebar-status-item ${activeModel === "chatgpt" ? "active" : ""}`}>
              <div className="status-item-left">
                <span className={`status-dot gpt ${activeModel === "chatgpt" ? "active" : ""}`}></span>
                <span className="status-name">ChatGPT Pro</span>
              </div>
              <span className={`status-badge gpt ${activeModel === "chatgpt" ? "active" : ""}`}>
                {activeModel === "chatgpt" ? "ACTIVE" : "READ ONLY"}
              </span>
            </div>
            <div className={`sidebar-status-item ${activeModel === "gemini" ? "active" : ""}`}>
              <div className="status-item-left">
                <span className={`status-dot gemini ${activeModel === "gemini" ? "active" : ""}`}></span>
                <span className="status-name">Gemini Pro</span>
              </div>
              <span className={`status-badge gemini ${activeModel === "gemini" ? "active" : ""}`}>
                {activeModel === "gemini" ? "ACTIVE" : "READ ONLY"}
              </span>
            </div>
            <div className={`sidebar-status-item ${activeModel === "claude" ? "active" : ""}`}>
              <div className="status-item-left">
                <span className={`status-dot claude ${activeModel === "claude" ? "active" : ""}`}></span>
                <span className="status-name">Claude 3.5</span>
              </div>
              <span className={`status-badge claude ${activeModel === "claude" ? "active" : ""}`}>
                {activeModel === "claude" ? "ACTIVE" : "READ ONLY"}
              </span>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <button className="footer-btn transition-all" onClick={() => {
            setAboutActiveTab("about");
            setIsAboutOpen(true);
          }}>
            <IconHeart />
            About & Support
          </button>
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
              <button 
                type="button"
                className="model-tab transition-all"
                onClick={() => {
                  setAboutActiveTab("compare");
                  setIsAboutOpen(true);
                }}
                style={{ 
                  gap: "4px", 
                  background: "transparent", 
                  border: "1px dashed var(--border-color)", 
                  padding: "6px 10px",
                  marginLeft: "4px"
                }}
                title="Compare Chatbots Pros & Cons"
              >
                <IconInfo />
                <span>Compare</span>
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
            <div style={{ 
              flex: 1, 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "var(--text-muted)", 
              gap: "16px",
              padding: "24px 20px",
              overflowY: "auto",
              maxWidth: "100%",
              width: "100%",
              margin: "0 auto"
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <IconAltChatIntersection size={64} style={{ marginRight: 0, marginBottom: "4px" }} />
                <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.5px" }}>Alt-Chat</div>
                <div style={{ fontSize: "13px", color: "var(--text-secondary)", fontStyle: "italic" }}>"One conversation. Every AI."</div>
              </div>
              
              <div style={{ 
                fontSize: "13px", 
                maxWidth: "500px", 
                textAlign: "center", 
                lineHeight: "1.5", 
                color: "var(--text-secondary)",
                marginBottom: "8px" 
              }}>
                Compare chatbots below and pick your starting point. Swap models at any point in your conversation to continue with a different AI—your thread context is seamlessly synchronized!
              </div>

              <div className="compare-container">
                {CHATBOT_DETAILS.map((bot) => (
                  <div key={bot.id} className={`compare-card ${bot.id} animate-fade-in`}>
                    <div className="compare-card-header">
                      <span style={{ 
                        color: bot.id === "chatgpt" ? "var(--chatgpt-color)" : 
                               bot.id === "gemini" ? "var(--gemini-color)" : 
                               "var(--claude-color)"
                      }}>
                        {bot.id === "chatgpt" ? <IconBrain /> : 
                         bot.id === "gemini" ? <IconSparkles /> : 
                         <IconLightning />}
                      </span>
                      <div>
                        <div className="compare-card-title">{bot.name}</div>
                        <div className="compare-card-subtitle">{bot.provider}</div>
                      </div>
                    </div>
                    
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontStyle: "italic" }}>
                      "{bot.tagline}"
                    </div>
                    
                    <div>
                      <div className="compare-list-title pros">
                        <IconCheckmark /> Pros
                      </div>
                      <ul className="compare-list">
                        {bot.pros.map((pro, index) => (
                          <li key={index} className="compare-list-item">
                            <span style={{ color: "#10B981", fontSize: "11px", fontWeight: "bold" }}>✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="compare-list-title cons">
                        <IconX /> Cons
                      </div>
                      <ul className="compare-list">
                        {bot.cons.map((con, index) => (
                          <li key={index} className="compare-list-item">
                            <span style={{ color: "#EF4444", fontSize: "11px", fontWeight: "bold" }}>–</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      type="button"
                      className={`compare-select-btn transition-all ${activeModel === bot.id ? `active ${bot.id}` : ""}`}
                      onClick={() => setActiveModel(bot.id)}
                    >
                      {activeModel === bot.id ? (
                        <>
                          <IconCheckmark />
                          Active Bot
                        </>
                      ) : (
                        `Select ${bot.name}`
                      )}
                    </button>
                  </div>
                ))}
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

      {/* MOBILE SIDEBAR OVERLAY BACKDROP */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* SETTINGS MODAL */}
      {isSettingsOpen && (
        <SettingsModal
          initialKeys={apiKeys}
          onSave={handleSaveKeys}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}

      {/* ABOUT MODAL */}
      {isAboutOpen && (
        <AboutModal
          activeTab={aboutActiveTab}
          setActiveTab={setAboutActiveTab}
          activeModel={activeModel}
          setActiveModel={setActiveModel}
          onClose={() => setIsAboutOpen(false)}
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

// Subcomponent: About & Support Modal
function AboutModal({ activeTab, setActiveTab, activeModel, setActiveModel, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("sidbhimgaj.s14@okaxis");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-container large transition-all ${activeTab === "compare" ? "comparison-mode" : ""} animate-fade-in`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconInfo /> About & Support
          </h2>
          <button className="close-btn" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="modal-tabs-header">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <IconAltChatIntersection size={16} style={{ marginRight: "6px" }} />
            About Alt-Chat
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "donation" ? "active" : ""}`}
            onClick={() => setActiveTab("donation")}
          >
            <IconHeart />
            Support Developer
          </button>
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === "compare" ? "active" : ""}`}
            onClick={() => setActiveTab("compare")}
          >
            <IconSparkles />
            Compare Chatbots
          </button>
        </div>

        <div className="modal-body" style={{ minHeight: "280px" }}>
          {activeTab === "about" ? (
            <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="about-brand-box">
                <div className="about-logo-circle" style={{ background: "transparent", border: "none", padding: 0 }}>
                  <IconAltChatIntersection size={56} style={{ marginRight: 0 }} />
                </div>
                <h3 className="about-app-title">Alt-Chat</h3>
                <p className="about-app-tagline" style={{ color: "var(--accent-color)", fontWeight: "600", fontSize: "14px", marginTop: "-4px", marginBottom: "8px" }}>
                  One conversation. Every AI.
                </p>
                <p className="about-app-desc">
                  A high-performance workspace designed to unify multiple conversational models into a single context-aware environment.
                </p>
              </div>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <span className="about-feature-bullet"><IconBrain /></span>
                  <div>
                    <strong>Context Synchronization</strong>: Switch models seamlessly; active thread history is summary-synchronized behind the scenes.
                  </div>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-bullet"><IconLightning /></span>
                  <div>
                    <strong>Smart Proxy Architecture</strong>: Minimizes payload sizes and organizes system/user prompts for high-speed LLM processing.
                  </div>
                </div>
                <div className="about-feature-item">
                  <span className="about-feature-bullet"><IconLock /></span>
                  <div>
                    <strong>Local & Secure</strong>: All API keys remain isolated within browser localStorage. Zero remote tracking or key collection.
                  </div>
                </div>
              </div>

              <div className="about-footer-info">
                <span>Version 1.0.0</span>
                <span>Developer: <span className="developer-signature">SID IMPACT</span></span>
              </div>
            </div>
          ) : activeTab === "donation" ? (
            <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="donation-intro">
                If Alt-Chat streamlines your workflow, consider supporting the developer <strong>SID IMPACT</strong>. Your contribution keeps this project fast and open source!
              </div>

              <div className="donation-grid">
                {/* GPay UPI */}
                <div className="donation-card gpay" onClick={handleCopyUpi}>
                  <div className="donation-card-header">
                    <span className="donation-platform-name">
                      <span className="gpay-badge-icon"></span>
                      Google Pay (GPay)
                    </span>
                  </div>
                  <div className="donation-upi-box" title="Click to copy GPay Address">
                    <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      sidbhimgaj.s14@okaxis
                    </span>
                    <button type="button" className={`donation-copy-btn ${copied ? "copied" : ""}`}>
                      {copied ? <IconCheckmark /> : <IconCopy />}
                    </button>
                  </div>
                  <div className="donation-card-action">
                    <span>{copied ? "Address Copied!" : "Click to Copy Address"}</span>
                  </div>
                  {copied && <div className="copy-toast">Copied!</div>}
                </div>

                {/* PayPal */}
                <a
                  href="https://PayPal.Me/siddharthSingh374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-card paypal"
                >
                  <div className="donation-card-header">
                    <span className="donation-platform-name">PayPal</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    PayPal.Me/siddharthSingh374
                  </div>
                  <div className="donation-card-action">
                    <span>Support on PayPal &rarr;</span>
                  </div>
                </a>

                {/* Ko-fi */}
                <a
                  href="https://ko-fi.com/sidimpact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-card kofi"
                >
                  <div className="donation-card-header">
                    <span className="donation-platform-name">Ko-fi</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    ko-fi.com/sidimpact
                  </div>
                  <div className="donation-card-action">
                    <span>Buy a coffee &rarr;</span>
                  </div>
                </a>

                {/* Patreon */}
                <a
                  href="https://patreon.com/SIDDHARTHSINGH152?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-card patreon"
                >
                  <div className="donation-card-header">
                    <span className="donation-platform-name">Patreon</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    patreon.com/SIDDHARTHSINGH152
                  </div>
                  <div className="donation-card-action">
                    <span>Become a patron &rarr;</span>
                  </div>
                </a>

                {/* Razorpay */}
                <a
                  href="https://razorpay.me/@siddharthsingh7719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-card razorpay"
                >
                  <div className="donation-card-header">
                    <span className="donation-platform-name">Razorpay</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    razorpay.me/@siddharthsingh7719
                  </div>
                  <div className="donation-card-action">
                    <span>Pay via Razorpay &rarr;</span>
                  </div>
                </a>

                {/* Chai4.me */}
                <a
                  href="https://www.chai4.me/sidbhimgajs14gmailcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donation-card chai4me"
                >
                  <div className="donation-card-header">
                    <span className="donation-platform-name">chai4.me</span>
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                    chai4.me/sidbhimgajs14...
                  </div>
                  <div className="donation-card-action">
                    <span>Buy a tea &rarr;</span>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontSize: "13px", color: "var(--text-secondary)", textAlign: "center", lineHeight: "1.5", marginBottom: "8px" }}>
                Alt-Chat integrates several leading AI models into a single context-aware environment. Compare each model's key strengths and limitations below.
              </div>
              
              <div className="modal-comparison-grid">
                {CHATBOT_DETAILS.map((bot) => (
                  <div key={bot.id} className={`compare-card ${bot.id}`}>
                    <div className="compare-card-header">
                      <span style={{ 
                        color: bot.id === "chatgpt" ? "var(--chatgpt-color)" : 
                               bot.id === "gemini" ? "var(--gemini-color)" : 
                               "var(--claude-color)"
                      }}>
                        {bot.id === "chatgpt" ? <IconBrain /> : 
                         bot.id === "gemini" ? <IconSparkles /> : 
                         <IconLightning />}
                      </span>
                      <div>
                        <div className="compare-card-title">{bot.name}</div>
                        <div className="compare-card-subtitle">{bot.provider}</div>
                      </div>
                    </div>
                    
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontStyle: "italic" }}>
                      "{bot.tagline}"
                    </div>
                    
                    <div>
                      <div className="compare-list-title pros">
                        <IconCheckmark /> Pros
                      </div>
                      <ul className="compare-list">
                        {bot.pros.map((pro, index) => (
                          <li key={index} className="compare-list-item">
                            <span style={{ color: "#10B981", fontSize: "11px", fontWeight: "bold" }}>✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="compare-list-title cons">
                        <IconX /> Cons
                      </div>
                      <ul className="compare-list">
                        {bot.cons.map((con, index) => (
                          <li key={index} className="compare-list-item">
                            <span style={{ color: "#EF4444", fontSize: "11px", fontWeight: "bold" }}>–</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      type="button"
                      className={`compare-select-btn transition-all ${activeModel === bot.id ? `active ${bot.id}` : ""}`}
                      onClick={() => {
                        setActiveModel(bot.id);
                        onClose();
                      }}
                    >
                      {activeModel === bot.id ? (
                        <>
                          <IconCheckmark />
                          Active Bot
                        </>
                      ) : (
                        `Select ${bot.name}`
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
