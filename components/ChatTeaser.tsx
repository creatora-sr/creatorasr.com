"use client";
import { Sparkles, ArrowRight, MessageSquare, Bot } from "lucide-react";
import { useChat } from "@/components/ChatContext";

const sample = [
  { role: "user", text: "AI video ka price kya hai?" },
  { role: "bot", text: "AI Video plans ₹4,999/month se start hote hain. Aapko kaunsa service chahiye?" },
  { role: "user", text: "Website + thumbnails" },
  { role: "bot", text: "Great! Growth plan (₹9,999/mo) mein web design + graphics + AI video sab included hai. 😊" },
];

export default function ChatTeaser() {
  const { setOpen } = useChat();
  return (
    <section className="container py-16">
      <div className="glass p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center overflow-hidden">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles size={14} /> AI ASSISTANT — LIVE 24/7
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Chat with <span className="grad-text">Creatora AI</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Services, pricing, timelines ya project idea — kuch bhi poochhiye, instant jawab milega.
            No waiting, no forms. Sirf chat.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setOpen(true)} className="btn-primary inline-flex items-center gap-2">
              <MessageSquare size={18} /> Start AI Chat <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/917015804907"
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              WhatsApp instead
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Free • No signup • Realtime answers</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-purple-600/20 blur-3xl rounded-full" aria-hidden />
          <div className="relative glass p-4 rounded-2xl border-purple-500/30 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-cyan-500">
                <Bot size={16} />
              </span>
              <div className="text-sm font-semibold">Creatora Assistant</div>
              <span className="ml-auto text-[10px] text-green-300 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Online
              </span>
            </div>
            {sample.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-xs max-w-[85%] ${
                    m.role === "user" ? "bg-purple-600 text-white" : "bg-white/10 text-gray-100"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <button
              onClick={() => setOpen(true)}
              className="w-full text-xs text-center py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-purple-400/50"
            >
              Ask your own question →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
