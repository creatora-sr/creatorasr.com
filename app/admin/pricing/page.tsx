"use client";
import { useEffect, useState } from "react";

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  category: string;
};

export default function AdminPricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [form, setForm] = useState({ name: "", price: "", period: "month", tagline: "", features: "", popular: false, category: "monthly" });

  const load = async () => { const res = await fetch("/api/pricing"); setPlans(await res.json()); };
  useEffect(() => {
    let alive = true;
    fetch("/api/pricing")
      .then((res) => res.json())
      .then((data: Plan[]) => { if (alive) setPlans(data); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/pricing", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setForm({ name: "", price: "", period: "month", tagline: "", features: "", popular: false, category: "monthly" });
    load();
  };
  const del = async (id: string) => { await fetch(`/api/pricing?id=${id}`, { method: "DELETE" }); load(); };

  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Pricing Plans</h1>
      <form onSubmit={add} className="glass p-6 mb-6 grid md:grid-cols-2 gap-3">
        <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input required placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Period (month/year)" value={form.period} onChange={(e) => setForm({ ...form, period: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Tagline" value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <textarea placeholder="Features (comma separated)" value={form.features} onChange={(e) => setForm({ ...form, features: e.target.value })} className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <label className="md:col-span-2 flex items-center gap-2 text-sm"><input type="checkbox" checked={form.popular} onChange={(e) => setForm({ ...form, popular: e.target.checked })} /> Popular</label>
        <button className="btn-primary md:col-span-2">Add Plan</button>
      </form>
      <div className="space-y-3">
        {plans.map((p) => (
          <div key={p.id} className="glass p-4 flex justify-between items-start">
            <div>
              <div className="font-semibold">{p.name} <span className="text-xs text-purple-300">{p.category}</span></div>
              <div className="text-green-400 text-sm">{p.price}/{p.period}</div>
              <p className="text-xs text-gray-400 mt-1">{p.tagline}</p>
            </div>
            <button onClick={() => del(p.id)} className="text-red-400 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
