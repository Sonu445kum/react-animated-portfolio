import React, { useState } from "react";
import { askAI } from "../../services/openaiService";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 I'm Sonu's AI Assistant. Ask me anything!" }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const reply = await askAI(input);

    const botReply = {
      role: "assistant",
      content: reply,
    };

    setMessages((prev) => [...prev, botReply]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-96 w-80 bg-zinc-900 rounded-2xl border border-white/10 shadow-xl">

      <div className="p-4 font-bold border-b border-white/10">
        AI Assistant
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-3 rounded-xl ${
              msg.role === "user"
                ? "bg-purple-600 text-white self-end"
                : "bg-white/10 text-zinc-300"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="text-zinc-400 text-sm">
            AI is typing...
          </div>
        )}
      </div>

      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          className="flex-1 p-2 rounded-lg bg-black border border-white/10 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />

        <button
          onClick={handleSend}
          className="px-4 bg-purple-600 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;