import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I`m AhmadBuilds AI assistant. Ask me about his skills, experience, or for contact info!" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    // Simple keyword-based logic
    setTimeout(() => {
      let botResponse = "I`m a simple bot. Try asking about `skills`, `experience`, `projects`, or `contact`!";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("languages")) {
        botResponse = "Ahmad specializes in Data Science (Python, SQL, Machine Learning) and Full-Stack Dev (React, Next.js, Node.js).";
      } else if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job")) {
        botResponse = "He`s currently doing Infrastructure Support at SoulTech Pakistan (Jan 2025 - Present), and previously managed IT at Al-Fazal Hospital.";
      } else if (lowerInput.includes("project") || lowerInput.includes("portfolio")) {
        botResponse = "He built an Enterprise Retail POS system, an ML Car Price Predictor, and this portfolio! Check the Projects page for more.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
        botResponse = "You can easily reach him at ahmadb2dps@gmail.com, or through his LinkedIn profile!";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        botResponse = "Hello there! How can I assist you in exploring Ahmad`s portfolio?";
      } else if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("university")) {
        botResponse = "He is currently pursuing a Bachelor`s in Data Science at the Faculty of Computing and Information Technology (FCIT), Punjab University.";
      } else if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
        botResponse = "You can download his resume directly using the button in the top navigation bar!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "active" : ""}`}>
        <div className="chatbot-header">
          <Bot size={20} className="bot-icon" />
          <h3>AhmadBot AI</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask something..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Send Message"><Send size={18} /></button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
