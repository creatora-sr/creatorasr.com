"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SubwayRunner from "@/components/SubwayRunner";
import PaymentGuide from "@/components/PaymentGuide";
import { sendToFormspree } from "@/lib/formspree";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    const payload = { ...form };
    try {
      // Primary: send client info to Formspree inbox
      const ok = await sendToFormspree(payload);
      if (ok) {
        setStatus("Thank you! We'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        // Also save a copy in the local admin dashboard (best effort)
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      } else {
        setStatus("Failed to send. Please WhatsApp us on +91 7015804907.");
      }
    } catch {
      setStatus("Network error.");
    }
  };

  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold grad-text">Get in Touch</h1>
        <p className="text-gray-400 mt-4">We&apos;re here to help, anytime!</p>
        <div className="mt-8 space-y-4 text-gray-300">
          <div className="flex items-center gap-3"><Phone size={18} className="text-purple-400" /> +91 7015804907 (WhatsApp/Call)</div>
          <div className="flex items-center gap-3"><Mail size={18} className="text-purple-400" /> creatoras.r27@gmail.com</div>
          <div className="flex items-center gap-3"><MapPin size={18} className="text-purple-400" /> Hisar, Haryana, India</div>
        </div>
        <div className="mt-8">
          <a href="https://wa.me/917015804907" target="_blank" className="btn-primary inline-flex items-center gap-2">
            <Send size={16} /> WhatsApp Us
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          ✦ Payment ke liye yahan contact karein: <strong className="text-white">+91 7015804907</strong>{" "}
          (WhatsApp/Call) — UPI / Bank Transfer / Cards. Website par koi direct transaction nahi hota hai.
        </p>
      </div>
      <form onSubmit={submit} className="glass p-8 space-y-4">
        <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
        <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
        <input placeholder="Phone / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400">
          <option value="">Select Service (optional)</option>
          <option>AI Video</option>
          <option>AI Agent Creation</option>
          <option>Content Creation</option>
          <option>Video Editing</option>
          <option>Web Designing</option>
          <option>Graphics</option>
          <option>Poster/Banner/Thumbnail</option>
          <option>Other</option>
        </select>
        <textarea required rows={4} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
        <button type="submit" className="btn-primary w-full">Send Message</button>
        {status && <p className="text-sm text-gray-300">{status}</p>}
        <p className="text-xs text-gray-500">
          Where does this go? Your details go straight to the official CREATORA S.R enquiry inbox
          (Formspree) &amp; our dashboard, and we reply on your Email / WhatsApp within 24 hours.
          No payment is taken on this website.
        </p>
      </form>
      </div>

      {/* Step-by-step: enquiry form + payment flow */}
      <PaymentGuide />

      {/* Game at the bottom of the last page of the website */}
      <div className="mt-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">🎮 Take a Break</h2>
          <p className="text-gray-400 text-sm mt-2">Scroll to the bottom of the site and enjoy a quick run!</p>
        </div>
        <SubwayRunner />
      </div>
    </section>
  );
}
