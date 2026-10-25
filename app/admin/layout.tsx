import Link from "next/link";
import { LayoutDashboard, Inbox, Package, DollarSign, Users, Settings, LogOut } from "lucide-react";

export const dynamic = "force-dynamic";

const items = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/inquiries", label: "Inquiries", icon: Inbox },
  { href: "/admin/services", label: "Services", icon: Package },
  { href: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black/40 border-r border-white/10 p-4 hidden md:block">
        <div className="font-bold text-lg grad-text mb-6">Admin Panel</div>
        <nav className="space-y-1">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm">
              <it.icon size={16} /> {it.label}
            </Link>
          ))}
        </nav>
        <Link href="/api/auth/signout" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-sm mt-6 text-red-400">
          <LogOut size={16} /> Logout
        </Link>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
