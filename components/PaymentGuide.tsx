"use client";
import { useState } from "react";
import { MessageCircle, Phone, ShieldCheck, UserCheck, Wallet } from "lucide-react";
import { sendToFormspree } from "@/lib/formspree";

const formSteps = [
  {
    title: "You fill the enquiry form",
    desc: "Name, Email, Phone, Service and Message go straight to our official Formspree inbox (formspree.io/f/mljdznya) + our server.",
  },
  {
    title: "It lands in our Dashboard",
    desc: "Your enquiry is saved instantly in the CREATORA S.R admin dashboard (Inquiries section) and Formspree — no middleman.",
  },
  {
    title: "We contact YOU",
    desc: "Our team replies on your Email / WhatsApp / Call within 24 hours with the scope, timeline and final quotation.",
  },
  {
    title: "You confirm the project",
    desc: "Once you are happy with the plan, we share the payment details and start your work.",
  },
];

const paymentSteps = [
  {
    title: "Choose your plan",
    desc: "Pick any package from the Pricing page (Monthly / Yearly / Add-ons / AI Agents).",
  },
  {
    title: "No online transaction on this website",
    desc: "This website does NOT process any payment, card or UPI transaction. Your money is always safe with you.",
  },
  {
    title: "Contact us directly for payment",
    desc: "Payment ke liye yahan contact karein: WhatsApp / Call +91 7015804907. Tell us your selected plan.",
  },
  {
    title: "We send you the payment details",
    desc: "After the quote is confirmed we share UPI ID / Bank Transfer details / Card payment option on WhatsApp or Email.",
  },
  {
    title: "Pay from your own app & send screenshot",
    desc: "Pay via GPay / PhonePe / Paytm / Net-Banking from your own device, then send us the payment screenshot.",
  },
  {
    title: "Receipt + work starts",
    desc: "You receive an official payment receipt and we begin your project with a clear delivery schedule.",
  },
];

export default function PaymentGuide() {
  const [payForm, setPayForm] = useState({ name: "", email: "", phone: "", plan: "", message: "" });
  const [payStatus, setPayStatus] = useState("");
  const [sending, setSending] = useState(false);

  const submitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setPayStatus("Sending...");
    const ok = await sendToFormspree({ type: "Payment / Plan Enquiry", ...payForm });
    setSending(false);
    if (ok) {
      setPayStatus("Done! We will contact you with the payment details soon.");
      setPayForm({ name: "", email: "", phone: "", plan: "", message: "" });
    } else {
      setPayStatus("Failed. Please WhatsApp us on +91 7015804907.");
    }
  };

  return (
    <div className="mt-16 space-y-10">
      {/* Enquiry / Form flow */}
      <div className="glass p-6 md:p-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <UserCheck className="text-purple-400" /> How your enquiry form works — Step by Step
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Whatever you fill in the form, here is exactly where it goes and how it is handled.
        </p>
        <ol className="mt-6 grid sm:grid-cols-2 gap-4">
          {formSteps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold mr-2">
                {i + 1}
              </span>
              <span className="font-semibold">{s.title}</span>
              <p className="text-gray-400 text-sm mt-2 pl-9">{s.desc}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-gray-500 mt-4">
          ✦ Your data is used only to contact you about your project. It is never sold or shared with anyone else.
        </p>
      </div>

      {/* Payment flow */}
      <div className="glass p-6 md:p-8 border-purple-500/30">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Wallet className="text-purple-400" /> Payment process — Step by Step
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-red-300">
            <ShieldCheck size={14} /> NO online transaction on this website
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 border border-green-500/30 px-3 py-1 text-green-300">
            <Phone size={14} /> Direct contact for payment: +91 7015804907
          </span>
        </div>
        <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paymentSteps.map((s, i) => (
            <li
              key={s.title}
              className={`rounded-xl border p-4 ${
                i === 1 || i === 2
                  ? "border-amber-500/40 bg-amber-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold mr-2">
                {i + 1}
              </span>
              <span className="font-semibold">{s.title}</span>
              <p className="text-gray-400 text-sm mt-2 pl-9">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/917015804907?text=Hi%20CREATORA%20S.R%2C%20I%20want%20to%20make%20a%20payment%20for%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} /> WhatsApp for Payment
          </a>
          <a href="tel:+917015804907" className="btn-outline flex items-center justify-center gap-2">
            <Phone size={16} /> Call +91 7015804907
          </a>
        </div>

        {/* Payment / Plan enquiry -> Formspree */}
        <form onSubmit={submitPayment} className="glass p-5 mt-6 space-y-3">
          <h3 className="font-semibold">Or send your payment details here</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              placeholder="Your Name"
              value={payForm.name}
              onChange={(e) => setPayForm({ ...payForm, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={payForm.email}
              onChange={(e) => setPayForm({ ...payForm, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
            />
            <input
              placeholder="Phone / WhatsApp"
              value={payForm.phone}
              onChange={(e) => setPayForm({ ...payForm, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
            />
            <select
              value={payForm.plan}
              onChange={(e) => setPayForm({ ...payForm, plan: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
            >
              <option value="">Select Plan</option>
              <option>STARTER - ₹4,999/month</option>
              <option>GROWTH - ₹9,999/month</option>
              <option>PREMIUM - ₹17,999/month</option>
              <option>Yearly / Custom</option>
            </select>
          </div>
          <textarea
            rows={3}
            placeholder="Selected plan, project details or payment message..."
            value={payForm.message}
            onChange={(e) => setPayForm({ ...payForm, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
          />
          <button type="submit" disabled={sending} className="btn-primary w-full">
            {sending ? "Sending..." : "Send Payment Details"}
          </button>
          {payStatus && <p className="text-sm text-gray-300">{payStatus}</p>}
        </form>

        <p className="text-xs text-gray-500 mt-3">
          Payment ke liye seedha yeh number contact karein — UPI / Bank Transfer / Card. Website par koi
          transaction nahi hota hai.
        </p>
      </div>
    </div>
  );
}
