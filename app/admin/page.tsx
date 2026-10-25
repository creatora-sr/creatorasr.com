import { store } from "@/lib/db";

export default async function AdminDashboard() {
  const inquiries = store.inquiries;
  const users = store.users;
  const services = store.services;
  const newInquiries = store.inquiries.filter((q) => q.status === "new").length;
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass p-6"><div className="text-3xl font-bold">{inquiries.length}</div><div className="text-gray-400 text-sm">Total Inquiries</div></div>
        <div className="glass p-6"><div className="text-3xl font-bold text-yellow-400">{newInquiries}</div><div className="text-gray-400 text-sm">New Inquiries</div></div>
        <div className="glass p-6"><div className="text-3xl font-bold">{users.length}</div><div className="text-gray-400 text-sm">Users</div></div>
        <div className="glass p-6"><div className="text-3xl font-bold">{services.length}</div><div className="text-gray-400 text-sm">Services</div></div>
      </div>
      <div className="mt-8 glass p-6">
        <h2 className="text-xl font-bold mb-3">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/admin/inquiries" className="btn-outline !py-2 !px-4 text-sm">Manage Inquiries</a>
          <a href="/admin/services" className="btn-outline !py-2 !px-4 text-sm">Manage Services</a>
          <a href="/admin/pricing" className="btn-outline !py-2 !px-4 text-sm">Manage Pricing</a>
          <a href="/admin/clients" className="btn-outline !py-2 !px-4 text-sm">Manage Clients</a>
        </div>
      </div>
    </div>
  );
}
