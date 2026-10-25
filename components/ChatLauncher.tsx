"use client";
import { Sparkles } from "lucide-react";
import { useChat } from "@/components/ChatContext";

export default function ChatLauncher() {
  const { setOpen } = useChat();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Open AI chat"
      className="chat-launcher fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full pl-3 pr-5 py-3 text-white font-semibold shadow-2xl transition hover:scale-105"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        <Sparkles size={18} />
        <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-purple-700 animate-pulse" />
      </span>
      <span className="text-sm leading-tight text-left">
        AI Chat
        <span className="block text-[10px] font-normal opacity-80">Ask anything</span>
      </span>
    </button>
  );
}
