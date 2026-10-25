"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendToFormspree } from "@/lib/formspree";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await res.json();
    if (res.ok) {
      setStatus("Account created. You can now login.");
      // new account info -> Formspree (password is NEVER sent)
      sendToFormspree({ type: "New Registration", name: form.name, email: form.email });
      router.push("/login");
    }
    else setStatus(data.error || "Failed");
  };
  return (
    <section className="container py-16 max-w-md">
      <div className="glass p-8">
        <h1 className="text-3xl font-bold grad-text text-center mb-6">Create Account</h1>
        <form onSubmit={submit} className="space-y-4">
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3" />
          <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3" />
          <input type="password" required placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3" />
          <button className="btn-primary w-full">Register</button>
          {status && <p className="text-sm text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
