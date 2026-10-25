import { auth } from "@/auth";
import { store } from "@/lib/db";

export default async function ClientServices() {
  const session = await auth();
  const userId = session?.user?.id;
  const orders = userId ? store.orders.filter((o) => o.userId === userId) : [];
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">My Services</h1>
      {orders.length === 0 && <p className="text-gray-400">No services yet. <a href="/pricing" className="text-purple-400">Browse plans</a>.</p>}
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="glass p-4 flex justify-between">
            <div>
              <div className="font-semibold">{o.plan}</div>
              <div className="text-sm text-gray-400">{o.amount}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${o.status === "pending" ? "bg-yellow-600/30 text-yellow-300" : "bg-green-600/30 text-green-300"}`}>{o.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
