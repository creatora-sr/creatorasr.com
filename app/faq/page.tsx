"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does CREATORA S.R offer?", a: "AI Video, AI Agent Creation, Content Creation, Video Editing, Poster, Web Designing, Graphics, Banner, Thumbnail, plus add-on services like Social Media Management, YouTube Management, Ad Campaign Setup, Website Maintenance, Content Writing and Analytics." },
  { q: "How much do your plans cost?", a: "Monthly plans start at ₹4,999 (STARTER), ₹9,999 (GROWTH) and ₹17,999 (PREMIUM). Yearly plans and AI Agent plans are also available. See Pricing page." },
  { q: "Is there an advance payment?", a: "Yes, a small advance is required to start the project. We accept UPI, Bank Transfer, Cards and other secure methods." },
  { q: "Do you offer revisions?", a: "Yes, free revisions are included in each package. We refine until you're happy." },
  { q: "How do I pay?", a: "Contact us directly at +91 7015804907 (WhatsApp/Call) or creatoras.r27@gmail.com. We do not process payments directly on the website." },
  { q: "Where are you located?", a: "Hisar, Haryana, India. We work with clients remotely as well." },
  { q: "Can I get a custom AI agent?", a: "Yes, custom AI agents are available from ₹5,999/month (1 agent) up to ₹14,999/month (up to 5 agents)." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="container py-16 max-w-3xl">
      <h1 className="text-4xl font-bold grad-text text-center mb-10">Frequently Asked Questions</h1>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="glass">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
              <span className="font-semibold">{f.q}</span>
              <ChevronDown className={`transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-4 pb-4 text-gray-300 text-sm">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
