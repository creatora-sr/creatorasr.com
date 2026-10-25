"use client";
import { useEffect, useState } from "react";
import { sendToFormspree } from "@/lib/formspree";

type Ticket = {
  id: string;
  subject: string;
  message: string;
  status: string;
};

export default function ClientSupport() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [form, setForm] = useState({ subject: "", message: "" });
  const [status, setStatus] = useState("");

  const load = async () => {
    const res = await fetch("/api/tickets");
    if (res.ok) setTickets(await res.json());
  };
  useEffect(() => {
    let alive = true;
    fetch("/api/tickets")
      .then((res) => (res.ok ? res.json() : []))
      .then((data: Ticket[]) => { if (alive) setTickets(data); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form };
    const res = await fetch("/api/tickets", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (res.ok) {
      setStatus("Ticket created.");
      setForm({ subject: "", message: "" });
      load();
      // support ticket copy -> Formspree inbox
      sendToFormspree({ type: "Support Ticket", subject: payload.subject, message: payload.message });
    }
    else setStatus("Failed to create ticket.");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Support</h1>
      <form onSubmit={submit} className="glass p-6 mb-6 space-y-3">
        <input required placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <textarea required placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2" rows={4} />
        <button className="btn-primary">Submit Ticket</button>
        {status && <p className="text-sm text-gray-300">{status}</p>}
      </form>
      <div className="space-y-3">
        {tickets.map((t) => (
          <div key={t.id} className="glass p-4">
            <div className="font-semibold">{t.subject}</div>
            <p className="text-sm text-gray-400 mt-1">{t.message}</p>
            <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${t.status === "open" ? "bg-yellow-600/30 text-yellow-300" : "bg-green-600/30 text-green-300"}`}>{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
