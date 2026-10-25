"use client";
import { useEffect, useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  price?: string;
  category?: string;
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [form, setForm] = useState({ title: "", description: "", icon: "", price: "", category: "" });

  const load = async () => {
    const res = await fetch("/api/services");
    setServices(await res.json());
  };
  useEffect(() => {
    let alive = true;
    fetch("/api/services")
      .then((res) => res.json())
      .then((data: Service[]) => { if (alive) setServices(data); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/services", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setForm({ title: "", description: "", icon: "", price: "", category: "" });
    load();
  };

  const del = async (id: string) => {
    await fetch(`/api/services?id=${id}`, { method: "DELETE" });
    load();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Services</h1>
      <form onSubmit={add} className="glass p-6 mb-6 grid md:grid-cols-2 gap-3">
        <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Icon URL" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <textarea required placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2" />
        <button className="btn-primary md:col-span-2">Add Service</button>
      </form>
      <div className="space-y-3">
        {services.map((s) => (
          <div key={s.id} className="glass p-4 flex justify-between items-start">
            <div>
              <div className="font-semibold">{s.title} <span className="text-xs text-purple-300">{s.category}</span></div>
              <p className="text-sm text-gray-400">{s.description}</p>
              {s.price && <div className="text-xs text-green-400 mt-1">{s.price}</div>}
            </div>
            <button onClick={() => del(s.id)} className="text-red-400 text-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
