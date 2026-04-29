"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  DollarSign,
  Mail,
  Menu,
  Phone,
  Search,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const clients = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Urban Taste Kitchen",
    email: "sarah@example.com",
    phone: "+1 555 0192",
    status: "Active",
    value: "$12,500",
    projects: 4,
    industry: "Restaurant",
    lastContact: "Today",
    joined: "Jan 2026",
    notes:
      "High-value restaurant client. Interested in website redesign, local SEO, and review management system.",
    services: ["Web Design", "Local SEO", "Reputation"],
  },
  {
    id: 2,
    name: "Michael Carter",
    company: "LocalBoost Media",
    email: "michael@example.com",
    phone: "+1 555 0431",
    status: "VIP",
    value: "$28,000",
    projects: 8,
    industry: "Agency",
    lastContact: "Yesterday",
    joined: "Nov 2025",
    notes:
      "Agency partner client. Needs landing pages, client dashboards, SEO content structure, and automation support.",
    services: ["Landing Pages", "CRM", "SEO"],
  },
  {
    id: 3,
    name: "Nadia Rahman",
    company: "NovaCart Store",
    email: "nadia@example.com",
    phone: "+880 1716 506412",
    status: "Active",
    value: "$9,700",
    projects: 3,
    industry: "eCommerce",
    lastContact: "2 days ago",
    joined: "Dec 2025",
    notes:
      "eCommerce client focused on conversion optimization, product page UI, trust badges, and analytics setup.",
    services: ["eCommerce UI", "Analytics", "CRO"],
  },
  {
    id: 4,
    name: "David Wilson",
    company: "Wilson Advisory",
    email: "david@example.com",
    phone: "+1 555 0877",
    status: "Pending",
    value: "$4,200",
    projects: 1,
    industry: "Consulting",
    lastContact: "5 days ago",
    joined: "Feb 2026",
    notes:
      "Consulting brand. Needs personal brand website, service page structure, and lead capture CTA.",
    services: ["Personal Brand", "Lead Gen", "Copywriting"],
  },
  {
    id: 5,
    name: "Aisha Khan",
    company: "BrightCare Clinic",
    email: "aisha@example.com",
    phone: "+44 7700 900123",
    status: "Active",
    value: "$16,800",
    projects: 5,
    industry: "Healthcare",
    lastContact: "1 week ago",
    joined: "Oct 2025",
    notes:
      "Healthcare client focused on trust, appointment flow, reviews, and professional service presentation.",
    services: ["Healthcare Website", "SEO", "Reviews"],
  },
  {
    id: 6,
    name: "James Miller",
    company: "Miller Realty Group",
    email: "james@example.com",
    phone: "+1 555 0654",
    status: "Inactive",
    value: "$3,900",
    projects: 2,
    industry: "Real Estate",
    lastContact: "3 weeks ago",
    joined: "Sep 2025",
    notes:
      "Real estate client. Previously completed landing page and lead form setup. Needs follow-up campaign.",
    services: ["Landing Page", "Lead Form", "Email CTA"],
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-green-400/10 text-green-300 border-green-400/20",
  VIP: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Pending: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  Inactive: "bg-red-500/10 text-red-300 border-red-500/20",
};

export default function ClientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<(typeof clients)[0] | null>(null);

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesQuery =
        client.name.toLowerCase().includes(query.toLowerCase()) ||
        client.company.toLowerCase().includes(query.toLowerCase()) ||
        client.email.toLowerCase().includes(query.toLowerCase()) ||
        client.industry.toLowerCase().includes(query.toLowerCase());

      const matchesStatus = status === "All" || client.status === status;

      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  const totalRevenue = clients
    .reduce((sum, client) => {
      return sum + Number(client.value.replace("$", "").replace(",", ""));
    }, 0)
    .toLocaleString();

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
                  Client Management
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Clients
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Manage client profiles, project history, revenue, and follow-ups.
                </p>
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white hover:bg-blue-500">
              <UsersRound size={18} />
              Add Client
            </button>
          </header>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {[
              ["Total Clients", clients.length, UsersRound],
              ["Client Revenue", `$${totalRevenue}`, DollarSign],
              [
                "Active Clients",
                clients.filter((client) => client.status === "Active").length,
                CheckCircle2,
              ],
            ].map(([label, value, Icon], index) => {
              const IconComponent = Icon as React.ElementType;

              return (
                <motion.div
                  key={label as string}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="crm-card p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <IconComponent size={22} />
                    </span>
                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                      +12%
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">{value as string}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {label as string}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 lg:max-w-md">
              <Search size={18} className="text-cyan-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clients, company, email, industry..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Active", "VIP", "Pending", "Inactive"].map((item) => (
                <button
                  key={item}
                  onClick={() => setStatus(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    status === item
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredClients.map((client, index) => (
              <motion.button
                key={client.id}
                type="button"
                onClick={() => setSelected(client)}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
                        {client.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-white">
                          {client.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          {client.company}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-black ${
                        statusStyles[client.status]
                      }`}
                    >
                      {client.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="flex items-center gap-2 text-sm text-slate-400">
                      <Mail size={16} className="text-cyan-300" />
                      {client.email}
                    </p>

                    <p className="flex items-center gap-2 text-sm text-slate-400">
                      <BriefcaseBusiness size={16} className="text-cyan-300" />
                      {client.industry}
                    </p>

                    <p className="flex items-center gap-2 text-sm text-slate-400">
                      <CalendarDays size={16} className="text-cyan-300" />
                      Last contact: {client.lastContact}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">Revenue</p>
                      <h4 className="mt-1 text-xl font-black text-white">
                        {client.value}
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">Projects</p>
                      <h4 className="mt-1 text-xl font-black text-white">
                        {client.projects}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {client.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    View profile <ArrowRight size={15} />
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="mt-8 rounded-[30px] border border-dashed border-white/10 bg-white/[0.03] p-10 text-center">
              <UserRound className="mx-auto mb-4 text-slate-500" size={38} />
              <h3 className="text-xl font-black text-white">No clients found</h3>
              <p className="mt-2 text-sm text-slate-400">
                Try another search keyword or filter.
              </p>
            </div>
          )}
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
              aria-label="Close client profile"
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

              <div className="mb-8 flex flex-col gap-5 pr-12 md:flex-row md:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 text-2xl font-black text-white">
                  {selected.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                    Client Profile
                  </p>
                  <h2 className="text-3xl font-black text-white md:text-5xl">
                    {selected.name}
                  </h2>
                  <p className="mt-2 text-slate-400">{selected.company}</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {[
                  ["Status", selected.status],
                  ["Revenue", selected.value],
                  ["Projects", selected.projects],
                  ["Joined", selected.joined],
                ].map(([label, value]) => (
                  <div
                    key={label as string}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-sm text-slate-400">{label as string}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {value as string}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <Mail size={18} className="text-cyan-300" />
                      {selected.email}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <Phone size={18} className="text-cyan-300" />
                      {selected.phone}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <BriefcaseBusiness size={18} className="text-cyan-300" />
                      {selected.industry}
                    </p>
                    <p className="flex items-center gap-3 text-sm text-slate-300">
                      <CalendarDays size={18} className="text-cyan-300" />
                      Last contact: {selected.lastContact}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Client Notes
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {selected.notes}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
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

              <div className="mt-7 rounded-3xl border border-yellow-400/20 bg-yellow-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Next recommended action
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Schedule a follow-up and prepare a personalized project proposal.
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