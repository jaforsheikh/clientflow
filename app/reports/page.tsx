"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Download,
  Eye,
  Filter,
  LineChart,
  Menu,
  PieChart,
  Search,
  Target,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const ranges = ["7 Days", "30 Days", "90 Days", "12 Months"];

const monthlyRevenue = [
  { month: "Jan", revenue: 12000, leads: 42, deals: 8 },
  { month: "Feb", revenue: 18000, leads: 58, deals: 12 },
  { month: "Mar", revenue: 15000, leads: 51, deals: 10 },
  { month: "Apr", revenue: 24000, leads: 76, deals: 16 },
  { month: "May", revenue: 21000, leads: 69, deals: 14 },
  { month: "Jun", revenue: 32000, leads: 92, deals: 22 },
  { month: "Jul", revenue: 28000, leads: 84, deals: 19 },
  { month: "Aug", revenue: 37000, leads: 108, deals: 25 },
  { month: "Sep", revenue: 34000, leads: 99, deals: 23 },
  { month: "Oct", revenue: 42000, leads: 125, deals: 29 },
  { month: "Nov", revenue: 39000, leads: 116, deals: 27 },
  { month: "Dec", revenue: 48000, leads: 138, deals: 34 },
];

const sources = [
  { name: "Website Form", leads: 126, revenue: 58000, conversion: 34 },
  { name: "LinkedIn", leads: 94, revenue: 47000, conversion: 28 },
  { name: "Referral", leads: 72, revenue: 62000, conversion: 41 },
  { name: "Facebook", leads: 58, revenue: 24000, conversion: 19 },
  { name: "Cold Outreach", leads: 45, revenue: 18000, conversion: 16 },
];

const teamPerformance = [
  {
    name: "Jafar",
    role: "Sales Lead",
    closed: 34,
    revenue: 76000,
    tasks: 92,
    response: "1.4h",
  },
  {
    name: "Sarah",
    role: "Account Manager",
    closed: 24,
    revenue: 52000,
    tasks: 88,
    response: "2.1h",
  },
  {
    name: "Michael",
    role: "Growth Consultant",
    closed: 19,
    revenue: 43000,
    tasks: 74,
    response: "2.8h",
  },
];

const reports = [
  {
    title: "Monthly Sales Performance",
    type: "Revenue Report",
    date: "Apr 29, 2026",
    status: "Ready",
    summary:
      "Revenue increased by 24% compared to last month. Website Form and Referral channels performed best.",
    points: [
      "Total revenue: $48,000",
      "Best channel: Referral",
      "Highest conversion: 41%",
      "Recommended action: scale referral campaign",
    ],
  },
  {
    title: "Lead Source Breakdown",
    type: "Marketing Report",
    date: "Apr 28, 2026",
    status: "Ready",
    summary:
      "Website Form generated the highest lead volume, while Referral generated the highest revenue per lead.",
    points: [
      "Website Form: 126 leads",
      "Referral revenue: $62,000",
      "Cold Outreach needs improvement",
      "LinkedIn is stable and scalable",
    ],
  },
  {
    title: "Task Productivity Overview",
    type: "Operations Report",
    date: "Apr 27, 2026",
    status: "Review",
    summary:
      "Team completed 84% of assigned tasks. Follow-up tasks still need better response time management.",
    points: [
      "Task completion: 84%",
      "Average response: 2.1 hours",
      "Delayed tasks: 12",
      "Recommended action: add reminders",
    ],
  },
];

const reportStatusStyles: Record<string, string> = {
  Ready: "border-green-400/20 bg-green-400/10 text-green-300",
  Review: "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
};

export default function ReportsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [range, setRange] = useState("12 Months");
  const [query, setQuery] = useState("");
  const [selectedReport, setSelectedReport] = useState<(typeof reports)[0] | null>(
    null
  );

  const filteredReports = useMemo(() => {
    return reports.filter(
      (report) =>
        report.title.toLowerCase().includes(query.toLowerCase()) ||
        report.type.toLowerCase().includes(query.toLowerCase()) ||
        report.status.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const totalRevenue = monthlyRevenue.reduce((sum, item) => sum + item.revenue, 0);
  const totalLeads = monthlyRevenue.reduce((sum, item) => sum + item.leads, 0);
  const totalDeals = monthlyRevenue.reduce((sum, item) => sum + item.deals, 0);
  const conversionRate = Math.round((totalDeals / totalLeads) * 100);

  const maxRevenue = Math.max(...monthlyRevenue.map((item) => item.revenue));
  const maxLeads = Math.max(...monthlyRevenue.map((item) => item.leads));

  function formatMoney(value: number) {
    return `$${value.toLocaleString()}`;
  }

  function exportDemoReport() {
    alert("Demo export started! In real CRM, this would generate a PDF/CSV report.");
  }

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
                  CRM Intelligence
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Reports & Analytics
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Track revenue, leads, conversion, source performance, team
                  productivity, and business growth insights.
                </p>
              </div>
            </div>

            <button
              onClick={exportDemoReport}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-500"
            >
              <Download size={18} />
              Export Report
            </button>
          </header>

          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2">
              {ranges.map((item) => (
                <button
                  key={item}
                  onClick={() => setRange(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    range === item
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  <CalendarDays size={14} className="mr-1 inline" />
                  {item}
                </button>
              ))}
            </div>

            <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 xl:max-w-md">
              <Search size={18} className="text-cyan-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search reports by title, type, status..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Total Revenue",
                value: formatMoney(totalRevenue),
                icon: CircleDollarSign,
                change: "+24%",
              },
              {
                label: "Total Leads",
                value: totalLeads.toLocaleString(),
                icon: UsersRound,
                change: "+18%",
              },
              {
                label: "Closed Deals",
                value: totalDeals.toLocaleString(),
                icon: BadgeDollarSign,
                change: "+14%",
              },
              {
                label: "Conversion Rate",
                value: `${conversionRate}%`,
                icon: Target,
                change: "+7%",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="crm-card p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
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

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Revenue Analytics</p>
                  <h2 className="text-2xl font-black">Monthly Growth Chart</h2>
                </div>

                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300">
                  {range}
                </span>
              </div>

              <div className="flex h-80 items-end gap-2 md:gap-3">
                {monthlyRevenue.map((item, index) => {
                  const height = Math.round((item.revenue / maxRevenue) * 100);

                  return (
                    <button
                      key={item.month}
                      onClick={() =>
                        alert(
                          `${item.month}: Revenue ${formatMoney(
                            item.revenue
                          )}, Leads ${item.leads}, Deals ${item.deals}`
                        )
                      }
                      className="group flex flex-1 flex-col items-center gap-3"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.7, delay: index * 0.04 }}
                        className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-300 shadow-lg shadow-cyan-400/10 transition group-hover:from-cyan-500 group-hover:to-yellow-300"
                      />
                      <span className="text-xs font-bold text-slate-500 group-hover:text-cyan-300">
                        {item.month}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-7">
                <p className="text-sm text-slate-400">Lead Source Quality</p>
                <h2 className="text-2xl font-black">Top Channels</h2>
              </div>

              <div className="space-y-5">
                {sources.map((source, index) => (
                  <button
                    key={source.name}
                    onClick={() =>
                      alert(
                        `${source.name}: ${source.leads} leads, ${formatMoney(
                          source.revenue
                        )} revenue, ${source.conversion}% conversion`
                      )
                    }
                    className="w-full text-left"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-bold text-slate-300">
                          {source.name}
                        </span>
                        <span className="font-black text-white">
                          {source.conversion}%
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${source.conversion}%` }}
                          transition={{ duration: 0.7, delay: index * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                        />
                      </div>

                      <div className="mt-2 flex justify-between text-xs text-slate-500">
                        <span>{source.leads} leads</span>
                        <span>{formatMoney(source.revenue)}</span>
                      </div>
                    </motion.div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Lead Volume</p>
                  <h2 className="text-2xl font-black">Monthly Lead Trend</h2>
                </div>
                <LineChart className="text-cyan-300" />
              </div>

              <div className="space-y-4">
                {monthlyRevenue.slice(-6).map((item, index) => {
                  const width = Math.round((item.leads / maxLeads) * 100);

                  return (
                    <motion.div
                      key={item.month}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-bold text-slate-300">
                          {item.month}
                        </span>
                        <span className="font-black text-white">
                          {item.leads} leads
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${width}%` }}
                          transition={{ duration: 0.7 }}
                          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-cyan-300"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              className="crm-card p-6"
            >
              <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-slate-400">Generated Reports</p>
                  <h2 className="text-2xl font-black">Business Insights</h2>
                </div>

                <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black text-yellow-300">
                  Click report to view
                </span>
              </div>

              <div className="space-y-4">
                {filteredReports.map((report, index) => (
                  <motion.button
                    key={report.title}
                    onClick={() => setSelectedReport(report)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-400/35 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-black text-white">
                          {report.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {report.type} • {report.date}
                        </p>
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-black ${
                          reportStatusStyles[report.status]
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-slate-300">
                      {report.summary}
                    </p>

                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                      View Details <ArrowRight size={15} />
                    </p>
                  </motion.button>
                ))}

                {filteredReports.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
                    <BarChart3 className="mx-auto mb-3 text-slate-500" />
                    <p className="text-sm font-bold text-slate-500">
                      No reports found
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {teamPerformance.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="crm-card p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {member.role}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <UsersRound size={22} />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">Closed</p>
                    <h4 className="mt-1 text-xl font-black text-white">
                      {member.closed}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">Revenue</p>
                    <h4 className="mt-1 text-xl font-black text-white">
                      {formatMoney(member.revenue)}
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">Tasks</p>
                    <h4 className="mt-1 text-xl font-black text-white">
                      {member.tasks}%
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">Response</p>
                    <h4 className="mt-1 text-xl font-black text-white">
                      {member.response}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedReport && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute inset-0"
              aria-label="Close report details"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
            >
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
              >
                <X size={20} />
              </button>

              <div className="mb-8 pr-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Report Details
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selectedReport.title}
                </h2>

                <p className="mt-3 text-slate-400">
                  {selectedReport.type} • {selectedReport.date}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
                  <Eye className="text-cyan-300" />
                  Executive Summary
                </h3>

                <p className="text-sm leading-7 text-slate-300">
                  {selectedReport.summary}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {selectedReport.points.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <CheckCircle2 className="mb-4 text-cyan-300" />
                    <h4 className="text-lg font-black text-white">
                      Insight {index + 1}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Recommended action
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Use this report to adjust sales strategy, follow-up
                      priority, and lead source investment.
                    </p>
                  </div>

                  <button
                    onClick={exportDemoReport}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Export PDF <Download size={17} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}