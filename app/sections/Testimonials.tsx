"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Quote,
  Star,
  TrendingUp,
  UsersRound,
  X,
} from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Agency Owner",
    company: "ScaleUp Studio",
    rating: 5,
    short:
      "ClientFlow makes CRM management feel simple, premium, and organized.",
    story:
      "Before using ClientFlow, our leads were scattered across spreadsheets, email, and chat. The dashboard structure helped us organize leads, track clients, manage deals, and follow up faster. The UI feels like a real premium SaaS product.",
    results: [
      "Lead workflow became more organized",
      "Follow-up process improved",
      "Sales pipeline became easier to understand",
      "Team visibility improved",
    ],
    modules: ["Leads", "Clients", "Deals", "Tasks"],
  },
  {
    name: "Michael Carter",
    role: "Sales Consultant",
    company: "LocalBoost Media",
    rating: 5,
    short:
      "The lead pipeline, deal tracking, and reports page feel like a real SaaS product.",
    story:
      "ClientFlow gives a complete CRM experience. I liked how the deal pipeline connects with tasks, reports, and client profiles. It is not just a static dashboard — it shows real product thinking and business workflow.",
    results: [
      "Pipeline clarity improved",
      "Deal tracking became easier",
      "Revenue visibility increased",
      "Reports helped better decisions",
    ],
    modules: ["Pipeline", "Reports", "Revenue", "Settings"],
  },
  {
    name: "Nadia Rahman",
    role: "eCommerce Manager",
    company: "NovaCart Store",
    rating: 5,
    short:
      "A clean CRM experience with strong UI, smooth animations, and business-focused sections.",
    story:
      "The interface feels clean, modern, and easy to understand. The interactive cards, modals, search filters, and animated dashboard make the product feel high quality. It is perfect for portfolio and SaaS product presentation.",
    results: [
      "Cleaner client data organization",
      "Better task visibility",
      "Modern user experience",
      "Strong portfolio impression",
    ],
    modules: ["Clients", "Tasks", "Analytics", "UI/UX"],
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<(typeof testimonials)[0] | null>(
    null
  );

  const review = testimonials[active];

  function next() {
    setActive((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

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
            <UsersRound size={17} />
            Customer Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Built for teams that need{" "}
            <span className="gradient-text">clarity and control</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Explore customer stories and see how ClientFlow improves CRM
            organization, sales workflow, task visibility, and business
            reporting.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {testimonials.map((item, index) => (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                whileHover={{ x: 8 }}
                className={`w-full rounded-3xl border p-5 text-left transition ${
                  active === index
                    ? "border-cyan-400/35 bg-cyan-400/10"
                    : "border-white/10 bg-white/[0.04] hover:border-cyan-400/25"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div>
                    <h3 className="font-black text-white">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  “{item.short}”
                </p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="rounded-[36px] border border-white/10 bg-white/[0.04] p-7 md:p-9"
            >
              <Quote className="mb-6 text-cyan-300" size={44} />

              <div className="mb-5 flex gap-1 text-yellow-300">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-xl leading-9 text-slate-300">
                “{review.story}”
              </p>

              <div className="mt-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-300">
                    {review.role} • {review.company}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {review.results.slice(0, 4).map((result) => (
                  <div
                    key={result}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/60 px-4 py-3"
                  >
                    <CheckCircle2 size={18} className="text-cyan-300" />
                    <p className="text-sm font-semibold text-slate-300">
                      {result}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelected(review)}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-black text-cyan-300 hover:bg-cyan-400/15"
              >
                Read full customer story <ArrowRight size={16} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["92%", "Task Completion", TrendingUp],
            ["2.8K+", "Leads Managed", UsersRound],
            ["$124K", "Pipeline Tracked", BarChart3],
          ].map(([value, label, Icon]) => {
            const IconComponent = Icon as React.ElementType;

            return (
              <motion.div
                key={label as string}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center"
              >
                <IconComponent className="mx-auto mb-4 text-cyan-300" />
                <h3 className="text-3xl font-black text-white">
                  {value as string}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {label as string}
                </p>
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
              aria-label="Close testimonial"
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
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Full Customer Story
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selected.company}
                </h2>

                <p className="mt-3 text-slate-400">
                  {selected.name} • {selected.role}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <Quote className="mb-4 text-cyan-300" />
                <p className="text-base leading-8 text-slate-300">
                  “{selected.story}”
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Results
                  </h3>

                  <div className="space-y-3">
                    {selected.results.map((result) => (
                      <p
                        key={result}
                        className="flex gap-2 text-sm leading-6 text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        {result}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Modules Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selected.modules.map((module) => (
                      <span
                        key={module}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <h3 className="text-xl font-black text-white">
                  Why this matters
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  This story shows how ClientFlow connects workflow clarity,
                  client management, deal tracking, and reporting into one
                  premium CRM experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}