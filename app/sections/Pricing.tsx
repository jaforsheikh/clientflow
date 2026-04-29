"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import InfoModal from "../components/InfoModal";

const plans = [
  {
    name: "Starter",
    badge: "Beginner",
    priceMonthly: "$39",
    priceYearly: "$29",
    desc: "Perfect for freelancers starting CRM workflow.",
    fullDesc:
      "Starter plan is designed for freelancers who want to manage leads, clients, and tasks in a structured way. It includes core CRM modules and essential workflow tools.",
    features: [
      "Lead management system",
      "Client profiles",
      "Task tracking",
      "Basic dashboard",
    ],
    benefits: [
      "Start CRM workflow easily",
      "Organize client data",
      "Track follow-ups",
      "Improve productivity",
    ],
    useCases: [
      "Freelancers",
      "Solo consultants",
      "New service providers",
    ],
    tools: ["Leads", "Clients", "Tasks"],
  },
  {
    name: "Growth",
    badge: "Most Popular",
    priceMonthly: "$49",
    priceYearly: "$39",
    desc: "Best for agencies and growing teams.",
    fullDesc:
      "Growth plan is built for agencies and teams that need full pipeline control, deal tracking, analytics, and workflow optimization.",
    features: [
      "Everything in Starter",
      "Deal pipeline",
      "Reports & analytics",
      "Priority support",
    ],
    benefits: [
      "Better deal visibility",
      "Revenue tracking",
      "Pipeline clarity",
      "Faster closing",
    ],
    useCases: [
      "Agencies",
      "Sales teams",
      "Growing businesses",
    ],
    tools: ["Deals", "Reports", "Pipeline"],
  },
  {
    name: "Pro",
    badge: "Advanced",
    priceMonthly: "$99",
    priceYearly: "$79",
    desc: "Advanced CRM with full business control.",
    fullDesc:
      "Pro plan provides advanced analytics, integrations, team management, and full SaaS-level CRM experience.",
    features: [
      "Everything in Growth",
      "Advanced reports",
      "Integrations",
      "Team management",
    ],
    benefits: [
      "Scale business faster",
      "Automate workflow",
      "Advanced insights",
      "Team collaboration",
    ],
    useCases: [
      "Large agencies",
      "High-ticket freelancers",
      "Scaling SaaS users",
    ],
    tools: ["Integrations", "Team", "Advanced Analytics"],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-24">
      <div className="container-custom text-center">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
        >
          <Sparkles size={16} />
          Pricing Plans
        </motion.span>

        <h2 className="text-4xl font-black md:text-6xl">
          Simple & scalable pricing
        </h2>

        <button
          onClick={() => setYearly(!yearly)}
          className="mt-6 rounded-full border px-5 py-2 text-sm"
        >
          {yearly ? "Yearly (Save 20%)" : "Monthly"}
        </button>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.button
              key={plan.name}
              onClick={() => setSelected(plan)}
              whileHover={{ y: -8 }}
              className="text-left rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-xs text-yellow-300 font-bold mb-2">
                {plan.badge}
              </p>

              <h3 className="text-2xl font-black">{plan.name}</h3>

              <p className="mt-3 text-3xl font-black text-cyan-300">
                {yearly ? plan.priceYearly : plan.priceMonthly}
              </p>

              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>

              <div className="mt-5 space-y-2">
                {plan.features.map((f: string) => (
                  <p key={f} className="flex text-sm text-slate-300 gap-2">
                    <CheckCircle2 size={16} className="text-cyan-300" />
                    {f}
                  </p>
                ))}
              </div>

              <p className="mt-6 text-cyan-300 text-sm font-bold flex items-center gap-2">
                View full plan <ArrowRight size={15} />
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <InfoModal
        open={!!selected}
        onClose={() => setSelected(null)}
        item={
          selected && {
            title: selected.name + " Plan",
            badge: selected.badge,
            desc: selected.desc,
            fullDesc: selected.fullDesc,
            icon: Sparkles,
            benefits: selected.benefits,
            useCases: selected.useCases,
            tools: selected.tools,
          }
        }
      />
    </section>
  );
}