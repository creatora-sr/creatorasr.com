"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917015804907?text=Hi%20Creatora%20S.R%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} color="#fff" />
    </a>
  );
}
