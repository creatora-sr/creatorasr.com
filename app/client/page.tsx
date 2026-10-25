import { auth } from "@/auth";
import { store } from "@/lib/db";

export default async function ClientDashboard() {
  const session = await auth();
  const userId = session?.user?.id;
  const orders = userId ? store.orders.filter((o) => o.userId === userId) : [];
  const tickets = userId ? store.tickets.filter((t) => t.userId === userId) : [];
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-2">Welcome, {session?.user?.name || session?.user?.email}</h1>
      <p className="text-gray-400 mb-6">Your client dashboard.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="glass p-6"><div className="text-3xl font-bold">{orders.length}</div><div className="text-gray-400 text-sm">Orders</div></div>
        <div className="glass p-6"><div className="text-3xl font-bold">{tickets.length}</div><div className="text-gray-400 text-sm">Support Tickets</div></div>
        <div className="glass p-6"><div className="text-3xl font-bold text-green-400">Active</div><div className="text-gray-400 text-sm">Status</div></div>
      </div>
      <div className="mt-8 glass p-6">
        <h2 className="text-xl font-bold mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/client/services" className="btn-outline !py-2 !px-4 text-sm">My Services</a>
          <a href="/client/support" className="btn-outline !py-2 !px-4 text-sm">Open Ticket</a>
          <a href="/pricing" className="btn-primary !py-2 !px-4 text-sm">Buy a Plan</a>
        </div>
      </div>
    </div>
  );
}
