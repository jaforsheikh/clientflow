"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Workflow,
} from "lucide-react";

const crmBenefits = [
  {
    title: "Lead Pipeline",
    desc: "Track prospects from new lead to closed deal.",
    icon: Workflow,
  },
  {
    title: "Client Management",
    desc: "Keep client profiles, notes, projects, and revenue organized.",
    icon: UsersRound,
  },
  {
    title: "Deal Tracking",
    desc: "Monitor value, stage, probability, and next action.",
    icon: BriefcaseBusiness,
  },
];

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("Md Jafar Ali Shaikh");
  const [email, setEmail] = useState("jafar@clientflow.com");
  const [company, setCompany] = useState("ClientFlow Studio");
  const [password, setPassword] = useState("clientflow123");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);

  const passwordScore = useMemo(() => {
    let score = 0;

    if (password.length >= 6) score += 25;
    if (password.length >= 10) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;

    return score;
  }, [password]);

  const strengthLabel =
    passwordScore >= 75 ? "Strong" : passwordScore >= 50 ? "Good" : "Weak";

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!agree) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 900);
  }

  return (
    <main className="min-h-screen crm-bg px-4 py-10 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-[1140px] items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-[560px]"
        >
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
                  <BarChart3 size={22} />
                </span>
                <span className="text-xl font-black text-white">
                  Client<span className="text-cyan-400">Flow</span>
                </span>
              </Link>

              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-black text-yellow-300">
                Free Demo
              </span>
            </div>

            <div>
              <p className="text-sm font-bold text-cyan-300">Create Account</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                Start your CRM workspace
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Create a ClientFlow demo account and explore a premium CRM
                dashboard for leads, clients, deals, tasks, and reports.
              </p>
            </div>

            <form onSubmit={handleRegister} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Full Name
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-cyan-400/50">
                    <UserRound size={18} className="text-cyan-300" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    Company
                  </label>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-cyan-400/50">
                    <BriefcaseBusiness size={18} className="text-cyan-300" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder="Company name"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300">
                  Email Address
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-cyan-400/50">
                  <Mail size={18} className="text-cyan-300" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition focus-within:border-cyan-400/50">
                  <Lock size={18} className="text-cyan-300" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-slate-400 transition hover:text-cyan-300"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="mt-3">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="font-bold text-slate-400">
                      Password strength
                    </span>
                    <span
                      className={`font-black ${
                        passwordScore >= 75
                          ? "text-green-300"
                          : passwordScore >= 50
                          ? "text-yellow-300"
                          : "text-red-300"
                      }`}
                    >
                      {strengthLabel}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      animate={{ width: `${passwordScore}%` }}
                      transition={{ duration: 0.35 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setAgree((prev) => !prev)}
                className="flex items-start gap-3 text-left text-sm leading-6 text-slate-300"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                    agree
                      ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10"
                  }`}
                >
                  {agree && <CheckCircle2 size={13} />}
                </span>
                I agree to use this demo CRM dashboard for portfolio and product
                testing purposes.
              </button>

              <button
                type="submit"
                disabled={loading || !agree}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Creating workspace..."
                ) : (
                  <>
                    Create Workspace
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link href="/login" className="font-black text-cyan-300">
                Login
              </Link>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="hidden lg:block"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
            <Sparkles size={17} />
            Build Your Sales System
          </span>

          <h1 className="text-5xl font-black leading-tight tracking-tight">
            Launch a CRM workspace that keeps your{" "}
            <span className="gradient-text">business organized</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            ClientFlow helps teams manage sales pipelines, client profiles,
            tasks, revenue reports, and follow-up actions with a premium SaaS
            experience.
          </p>

          <div className="mt-9 grid gap-5">
            {crmBenefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={22} />
                    </span>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-9 rounded-[34px] border border-yellow-400/20 bg-yellow-400/10 p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="shrink-0 text-yellow-300" size={28} />
              <div>
                <h3 className="text-2xl font-black text-white">
                  Portfolio-ready CRM SaaS
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  This project demonstrates dashboard UI, CRM logic, interactive
                  pages, dynamic states, modals, filters, analytics, and
                  product-level thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}