import { store } from "@/lib/db";

export default async function AdminClients() {
  const users = [...store.users].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Clients / Users</h1>
      {users.length === 0 && <p className="text-gray-400">No users yet.</p>}
      <div className="space-y-3">
        {users.map((u) => (
          <div key={u.id} className="glass p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{u.name || "—"} <span className="text-gray-400 text-sm">({u.email})</span></div>
              <div className="text-xs text-purple-300 mt-1">{u.role}</div>
            </div>
            <div className="text-xs text-gray-500">{new Date(u.createdAt).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6">Admin account: admin@creatora.com / Admin@123</p>
    </div>
  );
}
