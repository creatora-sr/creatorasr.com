"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ onChat }: { onChat: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/logo.png" alt="CREATORA S.R logo" width={36} height={36} style={{ width: 36, height: 36 }} className="rounded-full object-cover" />
          <span className="grad-text">CREATORA S.R</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-purple-300 transition">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onChat} className="btn-primary !py-2 !px-4 text-sm flex items-center gap-2">
            <Sparkles size={16} /> AI Chat
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="container py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2">
                {n.label}
              </Link>
            ))}
            <Link href="/login" className="py-2 text-purple-300">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}
