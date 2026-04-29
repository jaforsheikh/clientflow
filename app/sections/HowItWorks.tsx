"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Filter,
  KanbanSquare,
  Rocket,
  Sparkles,
} from "lucide-react";
import InfoModal from "../components/InfoModal";

const steps = [
  {
    title: "Capture Leads",
    badge: "Step 01",
    desc: "Collect new leads from forms, referrals, outreach, LinkedIn, ads, and campaigns.",
    fullDesc:
      "ClientFlow starts by helping you capture and organize new business opportunities. Instead of keeping leads in notes, spreadsheets, or chat messages, every lead can be added to a structured CRM pipeline with contact details, source, priority, deal value, and follow-up status.",
    icon: ClipboardCheck,
    benefits: [
      "Centralize all new leads in one place",
      "Track lead source and deal value",
      "Identify high-priority prospects faster",
      "Reduce lost opportunities",
    ],
    useCases: [
      "Website form lead capture",
      "LinkedIn outreach tracking",
      "Referral lead management",
      "Agency sales prospecting",
    ],
    tools: ["Lead Form", "Lead Source", "Priority", "Deal Value"],
  },
  {
    title: "Organize Pipeline",
    badge: "Step 02",
    desc: "Move leads through stages like New, Qualified, Proposal, Negotiation, and Closed.",
    fullDesc:
      "The pipeline gives your sales process a clear visual structure. You can move leads and deals through different stages, understand which prospects need attention, and see how much revenue is currently active inside the pipeline.",
    icon: KanbanSquare,
    benefits: [
      "See every opportunity by stage",
      "Move leads through the sales process",
      "Understand pipeline health visually",
      "Improve follow-up discipline",
    ],
    useCases: [
      "Sales pipeline management",
      "Freelance client closing process",
      "Agency proposal tracking",
      "Deal stage monitoring",
    ],
    tools: ["Kanban Pipeline", "Stages", "Move Actions", "Revenue View"],
  },
  {
    title: "Track Follow-ups",
    badge: "Step 03",
    desc: "Manage tasks, reminders, calls, proposals, notes, and next actions.",
    fullDesc:
      "Follow-up is where most deals are won or lost. ClientFlow helps you manage client tasks, deadlines, reminders, proposal preparation, checklists, and next actions so your workflow stays organized and professional.",
    icon: Filter,
    benefits: [
      "Never miss important follow-ups",
      "Track deadlines and next actions",
      "Organize proposal tasks",
      "Improve daily productivity",
    ],
    useCases: [
      "Client follow-up reminders",
      "Proposal preparation workflow",
      "Meeting scheduling tasks",
      "Project handoff checklist",
    ],
    tools: ["Tasks", "Checklists", "Due Dates", "Priority Labels"],
  },
  {
    title: "Close More Deals",
    badge: "Step 04",
    desc: "Use analytics, reports, conversion data, and team performance to grow faster.",
    fullDesc:
      "ClientFlow turns CRM activity into business insights. You can understand revenue growth, lead sources, conversion rate, team productivity, and pipeline value. This helps you make smarter decisions and close more deals.",
    icon: Rocket,
    benefits: [
      "Track revenue growth clearly",
      "Find your best lead sources",
      "Improve conversion rate",
      "Make better business decisions",
    ],
    useCases: [
      "Monthly sales reporting",
      "Revenue forecasting",
      "Lead source analysis",
      "Team performance review",
    ],
    tools: ["Reports", "Charts", "Conversion Rate", "Revenue Metrics"],
  },
];

export default function HowItWorks() {
  const [selected, setSelected] = useState<(typeof steps)[0] | null>(null);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <Sparkles size={17} />
            CRM Workflow
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            A clear process to manage{" "}
            <span className="gradient-text">leads to revenue</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Click each workflow step to see how ClientFlow supports real CRM
            operations, sales tracking, and business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.button
                key={step.title}
                type="button"
                onClick={() => setSelected(step)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={26} />
                    </span>

                    <span className="text-5xl font-black text-white/10">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                    {step.badge}
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {step.desc}
                  </p>

                  <div className="mt-6 space-y-2">
                    {step.benefits.slice(0, 2).map((benefit) => (
                      <p
                        key={benefit}
                        className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-300"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {benefit}
                      </p>
                    ))}
                  </div>

                  <p className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    View workflow details <ArrowRight size={16} />
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-16 rounded-[36px] border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                Connected CRM System
              </span>

              <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                Every module connects with your real sales workflow.
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Leads connect to deals, deals create tasks, clients store notes,
                and reports show revenue performance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Leads → Deals",
                "Deals → Tasks",
                "Clients → Notes",
                "Reports → Decisions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/60 px-5 py-4 text-sm font-bold text-slate-200"
                >
                  <CheckCircle2 className="shrink-0 text-cyan-300" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
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