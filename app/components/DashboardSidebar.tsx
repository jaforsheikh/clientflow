"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  LayoutDashboard,
  ListTodo,
  Settings,
  UsersRound,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/leads", icon: BarChart3 },
  { label: "Clients", href: "/clients", icon: UsersRound },
  { label: "Deals", href: "/deals", icon: BriefcaseBusiness },
  { label: "Tasks", href: "/tasks", icon: ListTodo },
  { label: "Reports", href: "/reports", icon: CalendarDays },
  { label: "Settings", href: "/settings", icon: Settings },
];

type DashboardSidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export default function DashboardSidebar({
  open = false,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[280px] border-r border-white/10 bg-[#020617] p-5 transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
              <BarChart3 size={22} />
            </span>
            <span className="text-xl font-black text-white">
              Client<span className="text-cyan-400">Flow</span>
            </span>
          </Link>

          <button onClick={onClose} className="text-white lg:hidden">
            <X />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  active
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon size={19} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}