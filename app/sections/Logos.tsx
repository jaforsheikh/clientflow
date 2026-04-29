"use client";

import { motion } from "framer-motion";
import { Building2, BriefcaseBusiness, Globe2, Sparkles, UsersRound } from "lucide-react";

const logos = [
  { name: "ScaleUp Studio", icon: Building2 },
  { name: "LocalBoost", icon: Globe2 },
  { name: "NovaCart", icon: BriefcaseBusiness },
  { name: "Urban Taste", icon: UsersRound },
  { name: "BrightCare", icon: Sparkles },
];

export default function Logos() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-10">
      <div className="container-custom">
        <p className="mb-6 text-center text-xs font-black uppercase tracking-[0.25em] text-slate-500">
          Trusted CRM workspace for modern teams
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logos.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <Icon size={18} className="text-cyan-300" />
                <span className="text-sm font-black text-slate-300">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}