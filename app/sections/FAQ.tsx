"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Sparkles,
  X,
} from "lucide-react";

const faqs = [
  {
    q: "What is ClientFlow CRM?",
    a: "ClientFlow is a premium CRM dashboard designed for freelancers, agencies, consultants, and small businesses to manage leads, clients, deals, tasks, reports, and workflow from one clean interface.",
    details:
      "ClientFlow is not only a static dashboard UI. It is structured like a real CRM SaaS product with separate pages for leads, clients, deals, tasks, reports, settings, login, and registration. It shows strong product thinking, UI/UX design, and scalable dashboard architecture.",
    points: [
      "Lead and deal management",
      "Client profile system",
      "Task and follow-up workflow",
      "Reports and analytics dashboard",
    ],
  },
  {
    q: "Who can use ClientFlow?",
    a: "ClientFlow is built for freelancers, agencies, consultants, small business owners, and sales teams who need a clean system to track client relationships and revenue opportunities.",
    details:
      "The CRM workflow is useful for anyone who handles prospects, proposals, client communication, recurring tasks, and revenue tracking. It is especially powerful for service-based businesses.",
    points: [
      "Freelancers managing clients",
      "Agencies tracking projects",
      "Consultants handling leads",
      "Small teams managing sales",
    ],
  },
  {
    q: "What CRM features are included?",
    a: "ClientFlow includes lead pipeline, client cards, deal tracking, task boards, reports, settings, team access UI, billing UI, notification controls, and interactive modals.",
    details:
      "Every major module is designed to feel like a real SaaS product. Pages include search filters, status badges, move actions, animated cards, modal details, KPI cards, and dynamic state management.",
    points: [
      "Leads pipeline",
      "Clients management",
      "Deals pipeline",
      "Tasks and reports",
    ],
  },
  {
    q: "Is the dashboard interactive?",
    a: "Yes. The dashboard includes clickable cards, modal popups, search, filters, toggles, progress bars, pricing toggle, testimonial slider, and animated dashboard sections.",
    details:
      "The project uses client-side state to make the interface dynamic. Users can filter data, move items between stages, open detailed modals, toggle settings, and interact with the CRM workflow.",
    points: [
      "Clickable modal cards",
      "Search and filtering",
      "Move stage buttons",
      "Animated transitions",
    ],
  },
  {
    q: "Does ClientFlow support lead pipeline management?",
    a: "Yes. The Leads page supports a Kanban-style pipeline where leads can move through stages like New, Qualified, Proposal, and Closed.",
    details:
      "Each lead card includes lead name, company, email, value, priority, owner, and stage controls. It helps users understand where every opportunity stands.",
    points: [
      "New lead stage",
      "Qualified stage",
      "Proposal stage",
      "Closed stage",
    ],
  },
  {
    q: "Does it include deal and revenue tracking?",
    a: "Yes. The Deals page includes deal value, probability, close date, source, stage, activities, and revenue-focused KPI cards.",
    details:
      "Deals can move through Discovery, Proposal, Negotiation, Won, and Lost. The page also calculates total pipeline, won revenue, weighted pipeline, and open deals.",
    points: [
      "Pipeline value",
      "Deal probability",
      "Close date tracking",
      "Won/lost status",
    ],
  },
  {
    q: "Can users manage tasks and follow-ups?",
    a: "Yes. The Tasks page includes task status columns, priority filters, due dates, estimated time, checklist progress, and task details modal.",
    details:
      "This is useful for tracking proposals, follow-up reminders, internal project tasks, client calls, and review steps before delivery.",
    points: [
      "To Do column",
      "In Progress column",
      "Review column",
      "Done column",
    ],
  },
  {
    q: "Does ClientFlow include reports and analytics?",
    a: "Yes. The Reports page includes revenue cards, lead source analysis, monthly growth charts, generated reports, team performance, and export demo action.",
    details:
      "The reports page makes the project feel like a real business intelligence dashboard. It shows how CRM activity connects with revenue and decision-making.",
    points: [
      "Revenue analytics",
      "Lead source quality",
      "Conversion tracking",
      "Team performance",
    ],
  },
  {
    q: "Is it responsive for mobile and desktop?",
    a: "Yes. ClientFlow uses responsive layouts, mobile sidebar, flexible grids, and mobile-friendly spacing to work across desktop, tablet, and mobile screens.",
    details:
      "Dashboard pages include a mobile menu button and slide-in sidebar. Cards, grids, modals, and forms are designed to adapt to different screen sizes.",
    points: [
      "Mobile sidebar",
      "Responsive cards",
      "Flexible grid layout",
      "Touch-friendly buttons",
    ],
  },
  {
    q: "Is ClientFlow portfolio-worthy?",
    a: "Yes. ClientFlow is designed as a premium full-stack portfolio project that demonstrates SaaS product thinking, dashboard UI, CRM workflow, interactivity, and clean frontend architecture.",
    details:
      "This project is powerful because it is not a basic CRUD app. It includes real business logic, multiple pages, premium UI, interactive features, and scalable structure for future backend integration.",
    points: [
      "Premium SaaS UI",
      "Real CRM workflow",
      "Multiple dashboard pages",
      "Future backend-ready structure",
    ],
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  const [selected, setSelected] = useState<(typeof faqs)[0] | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <HelpCircle size={17} />
            Frequently Asked Questions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Questions about{" "}
            <span className="gradient-text">ClientFlow CRM?</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Here are the most important questions about ClientFlow features,
            workflow, dashboard pages, responsiveness, and portfolio value.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.035 }}
                className={`overflow-hidden rounded-3xl border transition ${
                  isOpen
                    ? "border-cyan-400/35 bg-cyan-400/[0.07]"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-black text-white md:text-lg">
                    {index + 1}. {faq.q}
                  </span>

                  <ChevronDown
                    className={`shrink-0 text-cyan-300 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-white/10 px-6 pb-6 pt-4">
                        <p className="text-sm leading-7 text-slate-300">
                          {faq.a}
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {faq.points.slice(0, 4).map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/60 px-4 py-3"
                            >
                              <CheckCircle2
                                size={17}
                                className="shrink-0 text-cyan-300"
                              />
                              <p className="text-xs font-bold text-slate-300">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelected(faq)}
                          className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 hover:bg-cyan-400/15"
                        >
                          Read full answer <ArrowRight size={15} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
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
              aria-label="Close FAQ modal"
            />

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
              >
                <X size={20} />
              </button>

              <div className="mb-8 pr-12">
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <Sparkles size={16} />
                  Detailed FAQ Answer
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selected.q}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {selected.details}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {selected.points.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <CheckCircle2 className="mb-4 text-cyan-300" />
                    <h3 className="text-lg font-black text-white">
                      Point {index + 1}
                    </h3>
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
                      Want to explore the CRM?
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Open the dashboard and test the ClientFlow workflow.
                    </p>
                  </div>

                  <a
                    href="/dashboard"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
                  >
                    Open Dashboard <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}