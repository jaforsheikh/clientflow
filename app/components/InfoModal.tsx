"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

type InfoModalProps = {
  open: boolean;
  onClose: () => void;
  item: {
    title: string;
    badge: string;
    desc: string;
    fullDesc: string;
    icon: React.ElementType;
    benefits: string[];
    useCases: string[];
    tools: string[];
  } | null;
};

export default function InfoModal({ open, onClose, item }: InfoModalProps) {
  if (!item) return null;

  const Icon = item.icon;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute inset-0"
            aria-label="Close modal"
          />

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[34px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl shadow-cyan-400/10 md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-red-500/20"
            >
              <X size={20} />
            </button>

            <div className="mb-8 flex items-start gap-4 pr-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Icon size={30} />
              </div>

              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                  {item.badge}
                </p>
                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  {item.fullDesc}
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-xl font-black text-white">
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {item.benefits.map((benefit) => (
                    <p
                      key={benefit}
                      className="flex gap-2 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-xl font-black text-white">
                  Use Cases
                </h3>
                <div className="space-y-3">
                  {item.useCases.map((useCase) => (
                    <p
                      key={useCase}
                      className="flex gap-2 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-yellow-300"
                      />
                      {useCase}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-xl font-black text-white">
                  CRM Modules
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">
                    Ready to explore this workflow?
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Open the dashboard and test the CRM experience.
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
  );
}