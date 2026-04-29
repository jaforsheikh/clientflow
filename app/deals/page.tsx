"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileText,
  Filter,
  Mail,
  Menu,
  Plus,
  Search,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const dealStages = ["Discovery", "Proposal", "Negotiation", "Won", "Lost"];

const initialDeals = [
  {
    id: 1,
    title: "Website Redesign Project",
    client: "Urban Taste Kitchen",
    contact: "Sarah Johnson",
    email: "sarah@example.com",
    value: 4500,
    stage: "Discovery",
    probability: 35,
    priority: "High",
    closeDate: "May 08, 2026",
    source: "Website Form",
    notes:
      "Client wants a premium restaurant website with menu section, Google reviews, WhatsApp booking CTA, and local SEO foundation.",
    services: ["Web Design", "Local SEO", "WhatsApp CTA"],
    activities: [
      "Discovery call completed",
      "Website audit sent",
      "Waiting for content and brand assets",
    ],
  },
  {
    id: 2,
    title: "Agency Landing Page System",
    client: "LocalBoost Media",
    contact: "Michael Carter",
    email: "michael@example.com",
    value: 7800,
    stage: "Proposal",
    probability: 55,
    priority: "High",
    closeDate: "May 14, 2026",
    source: "LinkedIn",
    notes:
      "Agency needs a high-converting landing page system for their SEO service and reputation management offers.",
    services: ["Landing Page", "Copy Structure", "SEO"],
    activities: [
      "Proposal draft created",
      "Pricing package discussed",
      "Follow-up scheduled tomorrow",
    ],
  },
  {
    id: 3,
    title: "eCommerce Conversion Upgrade",
    client: "NovaCart Store",
    contact: "Nadia Rahman",
    email: "nadia@example.com",
    value: 6200,
    stage: "Negotiation",
    probability: 72,
    priority: "Medium",
    closeDate: "May 19, 2026",
    source: "Referral",
    notes:
      "Client wants product page UI improvement, trust badges, analytics tracking, and checkout conversion suggestions.",
    services: ["CRO", "Analytics", "Product UI"],
    activities: [
      "Call completed",
      "Scope revised",
      "Client requested final discount",
    ],
  },
  {
    id: 4,
    title: "Consultant Brand Website",
    client: "Wilson Advisory",
    contact: "David Wilson",
    email: "david@example.com",
    value: 3200,
    stage: "Won",
    probability: 100,
    priority: "Medium",
    closeDate: "Apr 26, 2026",
    source: "Facebook",
    notes:
      "Closed deal for a personal brand website with consultation CTA, case studies, services, and FAQ section.",
    services: ["Personal Brand", "Lead Gen", "Copywriting"],
    activities: [
      "Payment received",
      "Project kickoff completed",
      "Homepage wireframe started",
    ],
  },
  {
    id: 5,
    title: "Clinic SEO Website",
    client: "BrightCare Clinic",
    contact: "Aisha Khan",
    email: "aisha@example.com",
    value: 9400,
    stage: "Proposal",
    probability: 60,
    priority: "High",
    closeDate: "May 22, 2026",
    source: "Google Search",
    notes:
      "Healthcare clinic needs trust-focused website, appointment CTA, review sections, SEO service pages, and local visibility improvement.",
    services: ["Healthcare Website", "Local SEO", "Reviews"],
    activities: [
      "Requirement collected",
      "Competitor research done",
      "Proposal needs final polish",
    ],
  },
  {
    id: 6,
    title: "Real Estate Lead Funnel",
    client: "Miller Realty Group",
    contact: "James Miller",
    email: "james@example.com",
    value: 5100,
    stage: "Lost",
    probability: 0,
    priority: "Low",
    closeDate: "Apr 20, 2026",
    source: "Cold Outreach",
    notes:
      "Client postponed project due to budget. Follow up in 60 days with a smaller landing page offer.",
    services: ["Landing Page", "Lead Form", "Follow-up Funnel"],
    activities: [
      "Proposal rejected",
      "Budget issue discussed",
      "Follow-up reminder needed",
    ],
  },
];

const stageStyles: Record<string, string> = {
  Discovery: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  Proposal: "border-blue-400/20 bg-blue-500/10 text-blue-300",
  Negotiation: "border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
  Won: "border-green-400/20 bg-green-400/10 text-green-300",
  Lost: "border-red-400/20 bg-red-500/10 text-red-300",
};

const priorityStyles: Record<string, string> = {
  High: "bg-red-500/10 text-red-300 border-red-500/20",
  Medium: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Low: "bg-green-400/10 text-green-300 border-green-400/20",
};

export default function DealsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deals, setDeals] = useState(initialDeals);
  const [query, setQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof initialDeals)[0] | null>(
    null
  );

  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      const matchesQuery =
        deal.title.toLowerCase().includes(query.toLowerCase()) ||
        deal.client.toLowerCase().includes(query.toLowerCase()) ||
        deal.contact.toLowerCase().includes(query.toLowerCase()) ||
        deal.source.toLowerCase().includes(query.toLowerCase());

      const matchesStage =
        stageFilter === "All" || deal.stage === stageFilter;

      return matchesQuery && matchesStage;
    });
  }, [deals, query, stageFilter]);

  const totalPipeline = deals
    .filter((deal) => deal.stage !== "Lost")
    .reduce((sum, deal) => sum + deal.value, 0);

  const wonRevenue = deals
    .filter((deal) => deal.stage === "Won")
    .reduce((sum, deal) => sum + deal.value, 0);

  const weightedPipeline = deals
    .filter((deal) => deal.stage !== "Lost")
    .reduce((sum, deal) => sum + (deal.value * deal.probability) / 100, 0);

  function formatMoney(value: number) {
    return `$${value.toLocaleString()}`;
  }

  function moveDeal(id: number, direction: "next" | "back") {
    setDeals((prev) =>
      prev.map((deal) => {
        if (deal.id !== id) return deal;

        const currentIndex = dealStages.indexOf(deal.stage);
        const nextIndex =
          direction === "next"
            ? Math.min(currentIndex + 1, dealStages.length - 1)
            : Math.max(currentIndex - 1, 0);

        const nextStage = dealStages[nextIndex];

        return {
          ...deal,
          stage: nextStage,
          probability:
            nextStage === "Won"
              ? 100
              : nextStage === "Lost"
              ? 0
              : nextStage === "Negotiation"
              ? 72
              : nextStage === "Proposal"
              ? 55
              : 35,
        };
      })
    );
  }

  function addDemoDeal() {
    const demoDeal = {
      id: Date.now(),
      title: "New CRM Automation Setup",
      client: "ScaleUp Studio",
      contact: "Alex Morgan",
      email: "alex@example.com",
      value: 6800,
      stage: "Discovery",
      probability: 35,
      priority: "High",
      closeDate: "Jun 03, 2026",
      source: "Website CTA",
      notes:
        "New inbound lead interested in CRM dashboard customization, sales pipeline setup, and automated reporting.",
      services: ["CRM Setup", "Automation", "Reports"],
      activities: [
        "Lead created from demo button",
        "Needs discovery call",
        "Prepare CRM audit checklist",
      ],
    };

    setDeals((prev) => [demoDeal, ...prev]);
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
                  Revenue Pipeline
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Deals
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Track deal value, probability, close dates, client activity,
                  and sales progress.
                </p>
              </div>
            </div>

            <button
              onClick={addDemoDeal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white hover:bg-blue-500"
            >
              <Plus size={18} />
              Add Demo Deal
            </button>
          </header>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Total Pipeline",
                value: formatMoney(totalPipeline),
                icon: CircleDollarSign,
                change: "+21%",
              },
              {
                label: "Won Revenue",
                value: formatMoney(wonRevenue),
                icon: BadgeDollarSign,
                change: "+14%",
              },
              {
                label: "Weighted Pipeline",
                value: formatMoney(Math.round(weightedPipeline)),
                icon: TrendingUp,
                change: "+18%",
              },
              {
                label: "Open Deals",
                value: deals.filter(
                  (deal) => deal.stage !== "Won" && deal.stage !== "Lost"
                ).length,
                icon: BriefcaseBusiness,
                change: "+9%",
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

          <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_0.8fr]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Search size={18} className="text-cyan-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search deals by title, client, contact, source..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", ...dealStages].map((stage) => (
                <button
                  key={stage}
                  onClick={() => setStageFilter(stage)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    stageFilter === stage
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-5">
            {dealStages.map((stage, stageIndex) => {
              const stageDeals = filteredDeals.filter(
                (deal) => deal.stage === stage
              );

              const stageValue = stageDeals.reduce(
                (sum, deal) => sum + deal.value,
                0
              );

              return (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stageIndex * 0.08 }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-black text-white">{stage}</h2>
                      <p className="mt-1 text-xs text-slate-400">
                        {stageDeals.length} deals • {formatMoney(stageValue)}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-black ${stageStyles[stage]}`}
                    >
                      {stageDeals.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {stageDeals.map((deal) => (
                      <motion.div
                        layout
                        key={deal.id}
                        whileHover={{ y: -4 }}
                        className="rounded-3xl border border-white/10 bg-[#0f172a]/85 p-5"
                      >
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-black ${
                              priorityStyles[deal.priority]
                            }`}
                          >
                            {deal.priority}
                          </span>

                          <span className="text-sm font-black text-cyan-300">
                            {formatMoney(deal.value)}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-white">
                          {deal.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                          {deal.client}
                        </p>

                        <div className="mt-4 space-y-3">
                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <UserRound size={15} />
                            {deal.contact}
                          </p>

                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <CalendarDays size={15} />
                            Close: {deal.closeDate}
                          </p>

                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <Filter size={15} />
                            Source: {deal.source}
                          </p>
                        </div>

                        <div className="mt-5">
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="font-bold text-slate-400">
                              Probability
                            </span>
                            <span className="font-black text-white">
                              {deal.probability}%
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${deal.probability}%` }}
                              transition={{ duration: 0.7 }}
                              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                            />
                          </div>
                        </div>

                        <div className="mt-5 flex gap-2">
                          <button
                            onClick={() => moveDeal(deal.id, "back")}
                            disabled={stage === "Discovery"}
                            className="flex-1 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Back
                          </button>

                          <button
                            onClick={() => moveDeal(deal.id, "next")}
                            disabled={stage === "Lost"}
                            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Move
                            <ArrowRight size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => setSelected(deal)}
                          className="mt-3 w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300 hover:bg-cyan-400/15"
                        >
                          View Deal Details
                        </button>
                      </motion.div>
                    ))}

                    {stageDeals.length === 0 && (
                      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
                        <BriefcaseBusiness
                          className="mx-auto mb-3 text-slate-500"
                          size={30}
                        />
                        <p className="text-sm font-bold text-slate-500">
                          No deals here
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute inset-0"
              aria-label="Close deal details"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
              >
                <X size={20} />
              </button>

              <div className="mb-8 pr-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Deal Details
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selected.title}
                </h2>

                <p className="mt-3 text-slate-400">{selected.client}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {[
                  ["Value", formatMoney(selected.value), CircleDollarSign],
                  ["Stage", selected.stage, BriefcaseBusiness],
                  ["Probability", `${selected.probability}%`, TrendingUp],
                  ["Close Date", selected.closeDate, CalendarDays],
                ].map(([label, value, Icon]) => {
                  const IconComponent = Icon as React.ElementType;

                  return (
                    <div
                      key={label as string}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <IconComponent className="mb-4 text-cyan-300" />
                      <p className="text-sm text-slate-400">
                        {label as string}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-white">
                        {value as string}
                      </h3>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Contact & Deal Source
                  </h3>

                  <div className="space-y-4">
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <UserRound size={18} className="text-cyan-300" />
                      {selected.contact}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <Mail size={18} className="text-cyan-300" />
                      {selected.email}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <Filter size={18} className="text-cyan-300" />
                      Source: {selected.source}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <Clock3 size={18} className="text-cyan-300" />
                      Priority: {selected.priority}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
                      Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-white">
                    <FileText className="text-cyan-300" />
                    Deal Notes
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {selected.notes}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#020617]/70 p-4">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-bold text-slate-400">
                        Probability Score
                      </span>
                      <span className="font-black text-white">
                        {selected.probability}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        style={{ width: `${selected.probability}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-xl font-black text-white">
                  Recent Deal Activity
                </h3>

                <div className="grid gap-3 md:grid-cols-3">
                  {selected.activities.map((activity) => (
                    <div
                      key={activity}
                      className="rounded-2xl border border-white/10 bg-[#020617]/70 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mb-3 text-cyan-300"
                      />
                      <p className="text-sm leading-6 text-slate-300">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Recommended next action
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Prepare follow-up message, update deal stage, and schedule
                      next call before {selected.closeDate}.
                    </p>
                  </div>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500">
                    Create Follow-up <ArrowRight size={17} />
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