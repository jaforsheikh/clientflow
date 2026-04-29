"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  LayoutDashboard,
  LineChart,
  PieChart,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import InfoModal from "../components/InfoModal";

const previewCards = [
  {
    title: "Dashboard Overview",
    badge: "KPI Command Center",
    desc: "Track leads, clients, active deals, task progress, revenue, and CRM activity from one screen.",
    fullDesc:
      "The ClientFlow dashboard gives users a complete business snapshot. It includes KPI cards, sales pipeline progress, recent activity, hot leads, meetings, and revenue visibility. This makes the dashboard feel like a real SaaS product rather than a simple static UI.",
    icon: LayoutDashboard,
    benefits: [
      "See business performance at a glance",
      "Track leads, clients, deals, and tasks",
      "Monitor recent CRM activity",
      "Understand daily priorities faster",
    ],
    useCases: [
      "Agency daily sales overview",
      "Freelancer client workflow",
      "Small business CRM tracking",
      "Team performance snapshot",
    ],
    tools: ["KPI Cards", "Activity Feed", "Pipeline Bars", "Hot Leads"],
  },
  {
    title: "Pipeline Analytics",
    badge: "Sales Intelligence",
    desc: "Visualize deal movement, stage progress, probability, and expected revenue.",
    fullDesc:
      "Pipeline Analytics helps teams understand where revenue is coming from and which opportunities need attention. Users can monitor New Leads, Qualified, Proposal, Negotiation, and Closed stages with progress bars and value-focused insights.",
    icon: TrendingUp,
    benefits: [
      "Understand pipeline health visually",
      "Track stage-by-stage deal progress",
      "Find weak conversion points",
      "Improve follow-up decisions",
    ],
    useCases: [
      "Sales pipeline review",
      "Proposal stage monitoring",
      "Revenue forecasting",
      "Weekly team reporting",
    ],
    tools: ["Deal Stages", "Progress Bars", "Revenue Forecast", "Probability"],
  },
  {
    title: "Revenue Reports",
    badge: "Business Reporting",
    desc: "Analyze monthly revenue, lead sources, conversion rate, and team performance.",
    fullDesc:
      "Revenue Reports give users deeper business intelligence. The reports page includes monthly growth charts, source quality, generated reports, lead trends, and team performance cards so users can make better decisions.",
    icon: BarChart3,
    benefits: [
      "Track monthly revenue growth",
      "Find best lead sources",
      "Measure conversion performance",
      "Review team productivity",
    ],
    useCases: [
      "Monthly business review",
      "Marketing source comparison",
      "Team performance analysis",
      "Executive CRM reporting",
    ],
    tools: ["Charts", "Reports", "Lead Sources", "Team Metrics"],
  },
];

export default function DashboardPreview() {
  const [selected, setSelected] = useState<(typeof previewCards)[0] | null>(
    null
  );

  return (
    <section id="dashboard-preview" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
            >
              <Sparkles size={17} />
              Dashboard Preview
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black tracking-tight text-white md:text-6xl"
            >
              See your whole business from{" "}
              <span className="gradient-text">one smart dashboard</span>
            </motion.h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Click each dashboard module to understand how ClientFlow connects
              KPI tracking, pipeline analytics, reports, and CRM workflow into
              one premium SaaS experience.
            </p>

            <div className="mt-8 grid gap-4">
              {previewCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.button
                    key={card.title}
                    type="button"
                    onClick={() => setSelected(card)}
                    initial={{ opacity: 0, x: -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 8 }}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <Icon size={22} />
                      </span>

                      <div>
                        <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                          {card.badge}
                        </p>
                        <h3 className="text-xl font-black text-white">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {card.desc}
                        </p>
                        <p className="mt-3 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                          View module details <ArrowRight size={15} />
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">ClientFlow</p>
                  <h3 className="text-2xl font-black text-white">
                    CRM Overview
                  </h3>
                </div>

                <span className="rounded-full bg-green-400/10 px-3 py-2 text-xs font-black text-green-300">
                  LIVE
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [LayoutDashboard, "Active Deals", "48"],
                  [UsersRound, "Clients", "126"],
                  [BadgeDollarSign, "Revenue", "$42K"],
                ].map(([Icon, label, value], index) => {
                  const IconComponent = Icon as React.ElementType;

                  return (
                    <motion.button
                      key={label as string}
                      type="button"
                      onClick={() => setSelected(previewCards[index])}
                      whileHover={{ y: -5 }}
                      className="rounded-3xl border border-white/10 bg-[#020617]/70 p-4 text-left transition hover:border-cyan-400/40"
                    >
                      <IconComponent className="mb-4 text-cyan-300" />
                      <h4 className="text-2xl font-black text-white">
                        {value as string}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        {label as string}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-[#020617]/70 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-lg font-black text-white">
                    Pipeline Health
                  </h4>
                  <TrendingUp className="text-cyan-300" />
                </div>

                <div className="space-y-4">
                  {[
                    ["New Lead", "82%"],
                    ["Qualified", "64%"],
                    ["Proposal", "48%"],
                    ["Closed Won", "24%"],
                  ].map(([label, width]) => (
                    <button
                      key={label}
                      onClick={() => setSelected(previewCards[1])}
                      className="w-full text-left"
                    >
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-slate-300">{label}</span>
                        <span className="font-bold text-white">{width}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <button
                  onClick={() => setSelected(previewCards[2])}
                  className="rounded-3xl border border-white/10 bg-[#020617]/70 p-5 text-left transition hover:border-cyan-400/40"
                >
                  <LineChart className="mb-4 text-cyan-300" />
                  <h4 className="text-lg font-black text-white">
                    Monthly Growth
                  </h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Revenue trend and lead volume insight.
                  </p>
                </button>

                <button
                  onClick={() => setSelected(previewCards[2])}
                  className="rounded-3xl border border-white/10 bg-[#020617]/70 p-5 text-left transition hover:border-cyan-400/40"
                >
                  <PieChart className="mb-4 text-cyan-300" />
                  <h4 className="text-lg font-black text-white">
                    Source Quality
                  </h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Find top channels by revenue and conversion.
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <InfoModal
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}