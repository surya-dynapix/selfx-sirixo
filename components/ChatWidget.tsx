"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi there! I'm the SelfX assistant. How can I help you scale your restaurant today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulated AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Thanks for reaching out! Our sales engineers are currently busy, but please leave your email and we will contact you directly regarding your inquiry about POS & Kiosks."
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] rounded-2xl shadow-2xl flex flex-col mb-4 border border-zinc-200 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">SelfX AI Sales</h3>
                <p className="text-[10px] text-red-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow bg-zinc-50 p-4 overflow-y-auto flex flex-col gap-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.sender === "user" 
                      ? "bg-red-600 text-white rounded-tr-sm" 
                      : "bg-white text-zinc-800 border border-zinc-200 shadow-sm rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex w-full justify-start">
                <div className="bg-white border border-zinc-200 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-zinc-200">
            <form onSubmit={handleSend} className="relative flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-zinc-100 text-zinc-900 placeholder:text-zinc-500 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-1 w-8 h-8 bg-red-600 hover:bg-red-700 disabled:bg-zinc-300 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
          
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-[0_5px_20px_rgba(220,38,38,0.4)] flex items-center justify-center transition-transform hover:scale-110 relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white animate-pulse">
            1
          </span>
        )}
      </button>

    </div>
  );
}
