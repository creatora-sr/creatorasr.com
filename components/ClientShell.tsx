"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import ChatLauncher from "@/components/ChatLauncher";
import { ChatContext } from "@/components/ChatContext";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <ChatContext.Provider value={{ open: chatOpen, setOpen: setChatOpen }}>
      <Header onChat={() => setChatOpen(true)} />
      <main className="min-h-screen">{children}</main>
      <Footer onChat={() => setChatOpen(true)} />
      <WhatsAppButton />
      {!chatOpen && <ChatLauncher />}
      <ChatBot open={chatOpen} onClose={() => setChatOpen(false)} />
    </ChatContext.Provider>
  );
}
