"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Menu,
  Search,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const stats = [
  { label: "Total Leads", value: "2,840", change: "+18%", icon: UsersRound },
  {
    label: "Active Deals",
    value: "48",
    change: "+12%",
    icon: BriefcaseBusiness,
  },
  { label: "Revenue", value: "$124K", change: "+24%", icon: TrendingUp },
  { label: "Tasks Done", value: "92%", change: "+8%", icon: CheckCircle2 },
];

const activities = [
  "New lead added: Sarah Johnson",
  "Proposal sent to Nova Agency",
  "Deal moved to Negotiation",
  "Follow-up task completed",
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen dashboard-shell text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <DashboardSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <section className="min-h-screen p-4 md:p-8">
          <header className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] lg:hidden"
              >
                <Menu className="text-cyan-300" />
              </button>

              <div>
                <p className="text-sm font-bold text-cyan-300">
                  Welcome back, Jafar 👋
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  CRM Dashboard
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Manage leads, clients, deals, and revenue from one place.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 md:flex">
                <Search size={18} className="text-cyan-300" />
                <input
                  placeholder="Search anything..."
                  className="bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>

              <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Bell size={19} className="text-cyan-300" />
              </button>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="crm-card p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={22} />
                    </span>

                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                      {item.change}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Sales Pipeline</p>
                  <h2 className="text-2xl font-black">Deal Progress</h2>
                </div>
                <TrendingUp className="text-cyan-300" />
              </div>

              <div className="space-y-5">
                {[
                  ["New Lead", "82%"],
                  ["Qualified", "64%"],
                  ["Proposal", "48%"],
                  ["Negotiation", "35%"],
                  ["Closed Won", "24%"],
                ].map(([label, width]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-bold text-slate-300">{label}</span>
                      <span className="font-black text-white">{width}</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width }}
                        transition={{ duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-6">
                <p className="text-sm text-slate-400">Live Feed</p>
                <h2 className="text-2xl font-black">Recent Activity</h2>
              </div>

              <div className="space-y-4">
                {activities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-sm font-semibold text-slate-300">
                      {item}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Just now • CRM automation
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              ["Today’s Meetings", "5 calls scheduled", CalendarDays],
              ["Hot Leads", "12 leads need follow-up", UsersRound],
              ["Open Deals", "$42K active pipeline", BriefcaseBusiness],
            ].map(([title, desc, Icon]) => {
              const IconComponent = Icon as React.ElementType;

              return (
                <motion.div
                  key={title as string}
                  whileHover={{ y: -6 }}
                  className="crm-card p-6"
                >
                  <IconComponent className="mb-5 text-cyan-300" />
                  <h3 className="text-xl font-black">{title as string}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {desc as string}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}