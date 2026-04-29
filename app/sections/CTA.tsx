"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    title: "Premium SaaS UI",
    desc: "Modern dashboard with smooth animations, gradients, and clean layout.",
  },
  {
    title: "Real CRM Workflow",
    desc: "Leads → Deals → Tasks → Reports — full business flow.",
  },
  {
    title: "Portfolio Power",
    desc: "High-level project that impresses clients and recruiters instantly.",
  },
  {
    title: "Scalable Structure",
    desc: "Ready for backend integration and real SaaS product development.",
  },
];

export default function CTA() {
  const [selected, setSelected] = useState<(typeof benefits)[0] | null>(null);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[42px] border border-cyan-400/20 bg-[#020617] p-8 text-center md:p-14"
        >
          {/* Background Glow */}
          <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              <Sparkles size={17} />
              Ready to launch your CRM system?
            </span>

            <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Build your business workflow with{" "}
              <span className="gradient-text">ClientFlow</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Experience a complete CRM system with leads, clients, deals,
              tasks, analytics, and settings — designed like a real SaaS
              product.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500"
              >
                Create Free Demo
                <ArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-black text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Dashboard
              </Link>
            </div>

            {/* Interactive Benefits */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <motion.button
                  key={item.title}
                  onClick={() => setSelected(item)}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-400/40"
                >
                  <Rocket className="mb-3 text-cyan-300" />
                  <h3 className="text-lg font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {item.desc}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
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
            />

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              className="relative w-full max-w-xl rounded-3xl border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4"
              >
                <X />
              </button>

              <h2 className="text-2xl font-black text-white">
                {selected.title}
              </h2>

              <p className="mt-4 text-slate-300">{selected.desc}</p>

              <div className="mt-6 space-y-3">
                {[
                  "High-quality UI design",
                  "Interactive components",
                  "Real business workflow",
                  "Strong portfolio value",
                ].map((point) => (
                  <p key={point} className="flex gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="text-cyan-300" size={16} />
                    {point}
                  </p>
                ))}
              </div>

              <Link
                href="/register"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500"
              >
                Start Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}