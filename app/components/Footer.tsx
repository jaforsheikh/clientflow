"use client";

import Link from "next/link";
import {
  BarChart3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Dashboard: [
    { label: "Overview", href: "/dashboard" },
    { label: "Leads", href: "/leads" },
    { label: "Clients", href: "/clients" },
    { label: "Deals", href: "/deals" },
  ],
  CRM: [
    { label: "Tasks", href: "/tasks" },
    { label: "Reports", href: "/reports" },
    { label: "Settings", href: "/settings" },
    { label: "Login", href: "/login" },
  ],
};

const socials = [
  { label: "Website", href: "#", icon: Globe },
  { label: "Email", href: "mailto:jaforsheikh258@gmail.com", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/8801716506412", icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020617]">
      <div className="container-custom py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
                <BarChart3 size={24} />
              </span>
              <span className="text-2xl font-black text-white">
                Client<span className="text-cyan-400">Flow</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              ClientFlow is a premium CRM dashboard for freelancers, agencies,
              and teams to manage leads, clients, deals, tasks, reports, and
              business growth from one clean workspace.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-white">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-medium text-slate-400 transition hover:text-cyan-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:jaforsheikh258@gmail.com"
            className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <Mail size={18} className="shrink-0 text-cyan-300" />
            jaforsheikh258@gmail.com
          </a>

          <a
            href="tel:+8801716506412"
            className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <Phone size={18} className="shrink-0 text-cyan-300" />
            +8801716506412
          </a>

          <a
            href="https://wa.me/8801716506412"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            <MessageCircle size={18} className="shrink-0 text-cyan-300" />
            WhatsApp Consultation
          </a>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin size={18} className="shrink-0 text-cyan-300" />
            Bangladesh • Global Clients
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ClientFlow CRM. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#" className="text-slate-500 transition hover:text-cyan-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 transition hover:text-cyan-300">
              Terms
            </a>
            <a href="/register" className="text-slate-500 transition hover:text-cyan-300">
              Start Demo
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-cyan-400/20 bg-cyan-400/10 p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-black text-white">
                Ready to explore ClientFlow?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Open the CRM dashboard and test leads, clients, deals, tasks,
                reports, and settings.
              </p>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white transition hover:bg-blue-500"
            >
              Open Dashboard <Rocket size={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}