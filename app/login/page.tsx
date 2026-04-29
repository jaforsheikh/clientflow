"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const benefits = [
  "Manage leads, clients, deals, and tasks from one dashboard",
  "Track revenue pipeline and business performance",
  "Organize follow-ups with premium CRM workflow",
  "Built for freelancers, agencies, and small businesses",
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("jafar@clientflow.com");
  const [password, setPassword] = useState("clientflow123");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 900);
  }

  return (
    <main className="min-h-screen crm-bg px-4 py-10 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-[1140px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="hidden lg:block"
        >
          <Link href="/" className="mb-10 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 blue-glow">
              <BarChart3 size={24} />
            </span>
            <span className="text-2xl font-black tracking-tight text-white">
              Client<span className="text-cyan-400">Flow</span>
            </span>
          </Link>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
            <Sparkles size={17} />
            Premium CRM Access
          </span>

          <h1 className="text-5xl font-black leading-tight tracking-tight">
            Welcome back to your{" "}
            <span className="gradient-text">growth command center</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Login to manage your CRM pipeline, track clients, organize deals,
            complete tasks, and monitor revenue performance from one premium
            dashboard.
          </p>

          <div className="mt-9 grid gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
              >
                <CheckCircle2 size={20} className="shrink-0 text-cyan-300" />
                <p className="text-sm font-semibold text-slate-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-9 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["2.8K+", "Leads"],
              ["$124K", "Pipeline"],
              ["92%", "Tasks Done"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-3xl font-black text-white">{value}</h3>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65 }}
          className="mx-auto w-full max-w-[520px]"
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

              <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                Secure
              </span>
            </div>

            <div>
              <p className="text-sm font-bold text-cyan-300">Login Account</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-4xl">
                Sign in to ClientFlow
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Use the demo credentials or your own account to access the CRM
                dashboard experience.
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setRemember((prev) => !prev)}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-300"
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                      remember
                        ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                        : "border-white/10"
                    }`}
                  >
                    {remember && <CheckCircle2 size={13} />}
                  </span>
                  Remember me
                </button>

                <a
                  href="#"
                  className="text-sm font-bold text-cyan-300 hover:text-white"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-600/30 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Signing in..."
                ) : (
                  <>
                    Open Dashboard
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                [ShieldCheck, "Secure Login"],
                [TrendingUp, "CRM Ready"],
                [UsersRound, "Team Access"],
              ].map(([Icon, label]) => {
                const IconComponent = Icon as React.ElementType;

                return (
                  <div
                    key={label as string}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                  >
                    <IconComponent className="mx-auto mb-2 text-cyan-300" />
                    <p className="text-xs font-bold text-slate-300">
                      {label as string}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mt-7 text-center text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-black text-cyan-300">
                Create account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}