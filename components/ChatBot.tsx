"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { sendToFormspree } from "@/lib/formspree";

const SUGGESTIONS = [
  "What services do you offer?",
  "Show me pricing plans",
  "I need a website",
  "AI video ka rate?",
];

export default function ChatBot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Creatora Assistant — ask me about services, pricing or timelines. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const ask = async (text: string) => {
    const q = text.trim();
    if (!q || loading) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setLoading(true);
    // log every visitor question into the official Formspree inbox (non-blocking)
    sendToFormspree({ type: "AI Chat message", message: q }).catch(() => {});
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q,
          history: msgs.map((m) => ({ role: m.role === "user" ? "user" : "model", text: m.text })),
        }),
      });
      const data = await res.json();
      const answer =
        typeof data.answer === "string" && data.answer.trim()
          ? data.answer
          : "Sorry, something went wrong. Please try again or WhatsApp us on +91 7015804907.";
      setMsgs((m) => [...m, { role: "bot", text: answer }]);
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: "Network error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div className="chat-panel fixed bottom-24 right-6 z-50 w-[380px] max-w-[92vw] h-[560px] max-h-[72vh] glass rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-purple-600/40 to-cyan-600/40">
        <div className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <Sparkles size={18} />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-purple-800" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-sm">Creatora Assistant</div>
            <div className="text-[11px] text-green-300">Online &bull; Powered by Gemini AI</div>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close chat" className="p-1 rounded-full hover:bg-white/10">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-3 py-2 rounded-2xl max-w-[82%] text-sm whitespace-pre-wrap ${
                m.role === "user" ? "bg-purple-600 text-white" : "bg-white/10 text-gray-100"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-2xl bg-white/10 text-gray-300 text-sm">Typing…</div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {msgs.length <= 1 && (
        <div className="px-3 pb-2 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              className="text-[11px] px-3 py-1.5 rounded-full border border-purple-400/40 text-purple-200 hover:bg-purple-500/20 transition"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ask(input)}
          placeholder="Ask about services, pricing…"
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-purple-400"
        />
        <button onClick={() => ask(input)} disabled={loading} className="btn-primary !p-2 !rounded-full disabled:opacity-50">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
