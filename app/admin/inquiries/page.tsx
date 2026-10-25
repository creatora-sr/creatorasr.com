import { store } from "@/lib/db";

export default async function AdminInquiries() {
  const inquiries = [...store.inquiries].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  return (
    <div>
      <h1 className="text-3xl font-bold grad-text mb-6">Inquiries</h1>
      <div className="space-y-3">
        {inquiries.length === 0 && <p className="text-gray-400">No inquiries yet.</p>}
        {inquiries.map((q) => (
          <div key={q.id} className="glass p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{q.name} <span className="text-gray-400 text-sm">({q.email})</span></div>
                {q.phone && <div className="text-sm text-gray-400">{q.phone}</div>}
                {q.service && <div className="text-xs text-purple-300 mt-1">Service: {q.service}</div>}
                <p className="text-sm text-gray-300 mt-2">{q.message}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded ${q.status === "new" ? "bg-yellow-600/30 text-yellow-300" : "bg-green-600/30 text-green-300"}`}>{q.status}</span>
                <div className="text-xs text-gray-500 mt-2">{new Date(q.createdAt).toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
