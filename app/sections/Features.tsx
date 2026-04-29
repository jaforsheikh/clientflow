"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckSquare,
  Filter,
  Mail,
  PieChart,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import InfoModal from "../components/InfoModal";

const features = [
  {
    icon: UsersRound,
    title: "Client Management",
    badge: "CRM Core Feature",
    desc: "Manage client profiles, contact details, revenue, project history, and follow-up notes.",
    fullDesc:
      "ClientFlow gives freelancers and agencies a clean client management system where every client profile includes contact information, company details, service history, revenue value, notes, status, and next recommended action. This helps you avoid scattered client information and improves long-term relationship management.",
    benefits: [
      "Keep all client information in one place",
      "Track client revenue and project count",
      "View last contact and follow-up status",
      "Improve client communication clarity",
    ],
    useCases: [
      "Agency client management",
      "Freelance service tracking",
      "Consulting relationship management",
      "High-value client follow-up system",
    ],
    tools: ["Client Profiles", "Notes", "Revenue", "Status Badges"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Deal Pipeline",
    badge: "Sales Pipeline",
    desc: "Track opportunities from discovery to proposal, negotiation, won, or lost.",
    fullDesc:
      "The deal pipeline helps you understand exactly where each opportunity stands. You can track deal value, probability, close date, lead source, priority, notes, services, and recent activity. This makes the CRM feel like a real sales command center.",
    benefits: [
      "Visualize sales opportunities clearly",
      "Track deal value and probability",
      "Move deals between stages",
      "Understand expected revenue",
    ],
    useCases: [
      "Sales pipeline management",
      "Proposal tracking",
      "Revenue forecasting",
      "Client acquisition workflow",
    ],
    tools: ["Deal Stages", "Probability", "Revenue", "Close Date"],
  },
  {
    icon: CheckSquare,
    title: "Task Management",
    badge: "Productivity System",
    desc: "Manage follow-ups, proposals, reminders, deadlines, and internal work.",
    fullDesc:
      "ClientFlow task management lets you organize work into To Do, In Progress, Review, and Done. Each task includes client, owner, priority, due date, estimated time, notes, and checklist progress. This makes project workflow more professional and organized.",
    benefits: [
      "Never miss client follow-ups",
      "Track task progress visually",
      "Prioritize urgent work",
      "Improve daily productivity",
    ],
    useCases: [
      "Client follow-up reminders",
      "Proposal preparation",
      "Project task tracking",
      "Internal team workflow",
    ],
    tools: ["Kanban Tasks", "Checklist", "Priority", "Due Date"],
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    badge: "Business Intelligence",
    desc: "Analyze revenue, leads, conversion rate, source quality, and team performance.",
    fullDesc:
      "The reports page turns CRM data into business insights. You can view monthly revenue, lead trend, source conversion, generated reports, team performance, and actionable recommendations. This shows product-level thinking and dashboard design skill.",
    benefits: [
      "Understand revenue growth",
      "Find best lead sources",
      "Track conversion performance",
      "Make better business decisions",
    ],
    useCases: [
      "Monthly sales reporting",
      "Lead source analysis",
      "Team productivity tracking",
      "Revenue performance review",
    ],
    tools: ["Charts", "Reports", "Lead Sources", "Team Metrics"],
  },
  {
    icon: Workflow,
    title: "CRM Workflow Automation",
    badge: "Smart Workflow",
    desc: "Create a smoother workflow from lead capture to closing and follow-up.",
    fullDesc:
      "ClientFlow is designed around workflow clarity. Every page connects logically: leads become deals, deals create tasks, clients have notes, and reports show business performance. This structure makes the product feel realistic and scalable.",
    benefits: [
      "Clear workflow between CRM modules",
      "Better follow-up process",
      "More organized client acquisition",
      "Scalable SaaS product thinking",
    ],
    useCases: [
      "Freelancer CRM system",
      "Agency pipeline workflow",
      "Sales team process",
      "Consulting business management",
    ],
    tools: ["Leads", "Deals", "Tasks", "Reports"],
  },
  {
    icon: ShieldCheck,
    title: "Secure SaaS Settings",
    badge: "Workspace Control",
    desc: "Manage profile, company, security, notifications, billing, and integrations.",
    fullDesc:
      "The settings page includes realistic SaaS controls like profile settings, company workspace, notification toggles, security preferences, billing history, integrations, and team members. This makes the project feel much more complete than a basic dashboard.",
    benefits: [
      "Professional SaaS settings experience",
      "Notification and security controls",
      "Team and billing structure",
      "Integration-ready product design",
    ],
    useCases: [
      "CRM workspace setup",
      "Team access management",
      "Billing and subscription UI",
      "Security preferences",
    ],
    tools: ["Settings", "Security", "Billing", "Integrations"],
  },
];

export default function Features() {
  const [selected, setSelected] = useState<(typeof features)[0] | null>(null);

  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300"
          >
            <Sparkles size={17} />
            Powerful CRM Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Everything you need to manage{" "}
            <span className="gradient-text">clients, deals, and growth</span>
          </motion.h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Click any feature card to see detailed CRM use cases, benefits,
            modules, and how the workflow helps real businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.button
                key={feature.title}
                type="button"
                onClick={() => setSelected(feature)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative min-h-[330px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-15 w-15 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={28} />
                    </span>

                    <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-300">
                      Interactive
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                    {feature.badge}
                  </p>

                  <h3 className="text-2xl font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {feature.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {feature.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="mt-7 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    View details <ArrowRight size={16} />
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {[
            ["Lead Tracking", "2.8K+ leads managed", Filter],
            ["Email Follow-up", "Smart contact flow", Mail],
            ["Revenue Reports", "$124K pipeline view", PieChart],
            ["Team Workflow", "Role-based CRM usage", UsersRound],
          ].map(([title, desc, Icon]) => {
            const IconComponent = Icon as React.ElementType;

            return (
              <motion.div
                key={title as string}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <IconComponent className="mb-4 text-cyan-300" />
                <h3 className="text-lg font-black text-white">
                  {title as string}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {desc as string}
                </p>
              </motion.div>
            );
          })}
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