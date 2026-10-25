"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) {
      setError("Invalid credentials");
      setLoading(false);
      return;
    }
    // fetch session to know role
    const sess = await fetch("/api/auth/session").then((r) => r.json());
    const role = sess?.user?.role;
    if (role === "ADMIN") router.push("/admin");
    else router.push("/client");
    setLoading(false);
  };

  return (
    <section className="container py-16 max-w-md">
      <div className="glass p-8">
        <h1 className="text-3xl font-bold grad-text text-center mb-6">Login</h1>
        <form onSubmit={submit} className="space-y-4">
          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-400" />
          <button type="submit" disabled={loading} className="btn-primary w-full">{loading ? "Signing in..." : "Sign In"}</button>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">Admin & client accounts are created by the administrator.</p>
      </div>
    </section>
  );
}
