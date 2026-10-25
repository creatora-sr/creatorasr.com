"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ onChat }: { onChat: () => void }) {
  const [year] = useState(() => new Date().getFullYear());
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="container py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <Image src="/logo.png" alt="CREATORA S.R logo" width={36} height={36} style={{ width: 36, height: 36 }} className="rounded-full object-cover" />
            <span className="grad-text">CREATORA S.R</span>
          </div>
          <p className="text-gray-400">Your Ideas Our Creation : &quot;Powerful Digital Solution&quot;</p>
          <button onClick={onChat} className="mt-4 btn-outline !py-2 !px-4 text-sm flex items-center gap-2">
            <MessageCircle size={16} /> Chat with AI
          </button>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li>
              <a href="https://creatora-sr.github.io/creatora-portfolio/" target="_blank" rel="noreferrer">
                Live Portfolio ↗
              </a>
            </li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>AI Video</li>
            <li>AI Agent Creation</li>
            <li>Web Designing</li>
            <li>Content Creation</li>
            <li>Graphics & Posters</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><Phone size={14} /> +91 7015804907</li>
            <li className="flex items-center gap-2"><Mail size={14} /> creatoras.r27@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Hisar, Haryana, India</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://wa.me/917015804907" target="_blank" className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center">W</a>
            <a href="https://instagram.com" target="_blank" className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center">I</a>
            <a href="https://facebook.com" target="_blank" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">F</a>
            <a href="https://linkedin.com" target="_blank" className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center">L</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {year} CREATORA S.R. All rights reserved. | Payment: contact +91 7015804907 (UPI/Bank Transfer/Cards)
      </div>
    </footer>
  );
}
