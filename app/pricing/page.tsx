"use client";
import { useState } from "react";
import Link from "next/link";
import PaymentGuide from "@/components/PaymentGuide";

const monthly = [
  { name: "STARTER", price: "₹4,999", tag: "Perfect for Creators & Small Businesses", features: ["AI Video", "Video Editing", "Content Creation", "Web Designing", "Graphics", "Banner & Thumbnail", "AI Agent Creation", "Poster"] },
  { name: "GROWTH", price: "₹9,999", tag: "More Reach. More Engagement. More Growth.", popular: true, features: ["AI Video", "Video Editing", "Content Creation", "Web Designing", "Graphics", "Banner & Thumbnail", "AI Agent Creation", "Poster"] },
  { name: "PREMIUM", price: "₹17,999", tag: "Full Creative Power. All-in-One Solution.", features: ["AI Video", "Video Editing", "Content Creation", "Web Designing", "Graphics", "Banner & Thumbnail", "AI Agent Creation", "Poster"] },
];

const yearly = [
  { name: "STARTER", price: "₹39,999", tag: "Perfect for getting started", items: [["AI Video", "12"], ["Content Creation", "24"], ["Video Editing", "12"], ["Web Designing", "6"], ["Graphics", "24"], ["Banner & Thumbnail", "24"], ["Poster", "12"], ["Special Offer - Full Bundle", "1 Setup"]] },
  { name: "GROWTH", price: "₹79,999", tag: "For growing brands", items: [["AI Video", "30"], ["Content Creation", "60"], ["Video Editing", "30"], ["Web Designing", "12"], ["Graphics", "60"], ["Banner & Thumbnail", "60"], ["Poster", "30"], ["Special Offer - Full Bundle", "1 Setup"]] },
  { name: "PREMIUM", price: "₹1,49,999", tag: "Maximum reach, impact & profit", items: [["AI Video", "60"], ["Content Creation", "120"], ["Video Editing", "60"], ["Web Designing", "24"], ["Graphics", "120"], ["Banner & Thumbnail", "120"], ["Poster", "60"], ["Special Offer - Full Bundle", "1 Setup"]] },
];

const addons = [
  { name: "BASIC ADD-ONS", price: "₹2,999/mo", features: ["1 Service", "Basic Support", "Monthly Report"] },
  { name: "STANDARD ADD-ONS", price: "₹4,999/mo", features: ["3 Services", "Priority Support", "Bi-Weekly Report"] },
  { name: "PREMIUM ADD-ONS", price: "₹7,999/mo", features: ["All Services", "Dedicated Support", "Weekly Report"] },
];

const aiAgents = [
  { name: "STARTER", price: "₹5,999/mo", agents: "1 AI Agent" },
  { name: "GROWTH", price: "₹9,999/mo", agents: "Up to 3 AI Agents" },
  { name: "PREMIUM", price: "₹14,999/mo", agents: "Up to 5 AI Agents" },
];

export default function Pricing() {
  const [tab, setTab] = useState<"monthly" | "yearly">("monthly");
  return (
    <section className="container py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold grad-text">Pricing</h1>
        <p className="text-gray-400 mt-3">Simple, transparent pricing. No hidden charges.</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        <button onClick={() => setTab("monthly")} className={`px-6 py-2 rounded-full ${tab === "monthly" ? "bg-purple-600" : "bg-white/5"}`}>Monthly</button>
        <button onClick={() => setTab("yearly")} className={`px-6 py-2 rounded-full ${tab === "yearly" ? "bg-purple-600" : "bg-white/5"}`}>Yearly (Save up to 20%)</button>
      </div>

      {tab === "monthly" && (
        <div className="grid md:grid-cols-3 gap-6">
          {monthly.map((p) => (
            <div key={p.name} className={`glass p-6 ${p.popular ? "border-purple-500/50 scale-105" : ""}`}>
              {p.popular && <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">MOST POPULAR</span>}
              <h3 className="text-xl font-bold mt-3">{p.name}</h3>
              <div className="text-4xl font-extrabold mt-2">{p.price}<span className="text-base text-gray-400">/mo</span></div>
              <p className="text-gray-400 text-sm mt-2">{p.tag}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {p.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <Link href="/contact" className="btn-primary mt-6 inline-block w-full text-center">Get Started</Link>
            </div>
          ))}
        </div>
      )}

      {tab === "yearly" && (
        <div className="grid md:grid-cols-3 gap-6">
          {yearly.map((p) => (
            <div key={p.name} className="glass p-6">
              <h3 className="text-xl font-bold">{p.name} YEARLY</h3>
              <div className="text-4xl font-extrabold mt-2">{p.price}<span className="text-base text-gray-400">/yr</span></div>
              <p className="text-gray-400 text-sm mt-2">{p.tag}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                {p.items.map(([k, v]) => <li key={k} className="flex justify-between"><span>{k}</span><span className="text-purple-300">{v}</span></li>)}
              </ul>
              <Link href="/contact" className="btn-primary mt-6 inline-block w-full text-center">Get Started</Link>
            </div>
          ))}
        </div>
      )}

      {/* Add-ons */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Add-on Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((a) => (
            <div key={a.name} className="glass p-6 text-center">
              <h3 className="text-lg font-bold">{a.name}</h3>
              <div className="text-3xl font-extrabold mt-2">{a.price}</div>
              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                {a.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <Link href="/contact" className="btn-outline mt-6 inline-block w-full text-center">Choose</Link>
            </div>
          ))}
        </div>
      </div>

      {/* AI Agents */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Custom AI Agents</h2>
        <p className="text-center text-gray-400 mb-6">Your Personal AI Workforce</p>
        <div className="grid md:grid-cols-3 gap-6">
          {aiAgents.map((a) => (
            <div key={a.name} className="glass p-6 text-center">
              <h3 className="text-lg font-bold">{a.name}</h3>
              <div className="text-3xl font-extrabold mt-2">{a.price}</div>
              <p className="text-gray-400 text-sm mt-2">{a.agents}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-300">
                <li>✓ Task Automation</li>
                <li>✓ Smart Assistants</li>
                <li>✓ Business Solutions</li>
                <li>✓ Scalable & Flexible</li>
              </ul>
              <Link href="/contact" className="btn-outline mt-6 inline-block w-full text-center">Choose</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Payment policy */}
      <div className="mt-16 glass p-8">
        <h2 className="text-2xl font-bold mb-4">Payment Policy</h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Advance payment required to start the project.</li>
          <li>• We accept UPI, Bank Transfer, Cards & other secure methods.</li>
          <li>• 100% transparency - no hidden charges, clear and fair pricing.</li>
          <li>• Refunds applicable as per terms and conditions.</li>
          <li>• Free revisions included per package; we refine until you&apos;re happy.</li>
          <li>• ✦ This website never collects card / UPI details — payment happens only after you contact us directly.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400">
          To make a payment, please contact us directly: <strong className="text-white">+91 7015804907</strong> (WhatsApp/Call) or <strong className="text-white">creatoras.r27@gmail.com</strong>.
        </p>
      </div>

      {/* Step-by-step enquiry + payment guide */}
      <PaymentGuide />
    </section>
  );
}
