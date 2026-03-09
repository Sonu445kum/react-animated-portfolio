import React, { useState, useRef, useEffect } from "react";
import { askAI } from "../../services/openaiService";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi 👋 I'm Sonu's AI Assistant. Ask me anything!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    let botMessage = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, botMessage]);

    await askAI(input, (token) => {
      botMessage.content += token;

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...botMessage };
        return updated;
      });
    });

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-[420px] w-[320px] bg-zinc-900 rounded-2xl border border-white/10 shadow-xl">
      ```
      <div className="p-4 font-semibold border-b border-white/10">
        🤖 AI Assistant
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-xs">
                AI
              </div>
            )}

            <div
              className={`text-sm p-3 rounded-xl max-w-[70%] ${
                msg.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-zinc-200"
              }`}
            >
              {msg.content}
            </div>

            {msg.role === "user" && (
              <div className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center text-xs">
                U
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="text-zinc-400 text-xs">AI is typing...</div>
        )}

        <div ref={messagesEndRef} />
      </div>
      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          className="flex-1 p-2 rounded-lg bg-black border border-white/10 text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask something..."
        />

        <button
          onClick={handleSend}
          className="px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
