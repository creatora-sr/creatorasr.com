import { auth } from "@/auth";
import { store } from "@/lib/db";

export default async function ClientInvoices() {
  const session = await auth();
  const userId = session?.user?.id;
  const orders = userId ? store.orders.filter((o) => o.userId === userId) : [];
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Invoices</h1>
      {orders.length === 0 && <p className="text-gray-400">No invoices yet.</p>}
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="glass p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">Invoice #{o.id.slice(0, 8)}</div>
              <div className="text-sm text-gray-400">{o.plan} — {o.amount}</div>
              <div className="text-xs text-gray-500">{new Date(o.createdAt).toLocaleDateString()}</div>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${o.status === "pending" ? "bg-yellow-600/30 text-yellow-300" : "bg-green-600/30 text-green-300"}`}>{o.status}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6">Payment is made by contacting us directly: +91 7015804907.</p>
    </div>
  );
}
