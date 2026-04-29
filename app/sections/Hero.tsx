"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-custom text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
        >
          <Sparkles size={16} />
          Premium CRM Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl"
        >
          Manage Leads, Clients & Revenue in{" "}
          <span className="gradient-text">One Powerful CRM</span>
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          ClientFlow helps freelancers and agencies track deals, manage clients,
          complete tasks, and grow revenue — all in one dashboard.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-500"
          >
            Start Free Demo <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard"
            className="rounded-full border border-white/10 px-6 py-4 font-bold text-white hover:border-cyan-400"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}