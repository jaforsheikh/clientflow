"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Workflow", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#020617]/70 border-b border-white/10">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <BarChart3 className="text-cyan-400" />
            <span className="font-black text-xl">
              Client<span className="text-cyan-400">Flow</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-bold">
              Login
            </Link>

            <Link
              href="/register"
              className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-500"
            >
              Get Started <ArrowRight size={14} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6">
              <button onClick={() => setOpen(false)}>
                <X />
              </button>

              <div className="mt-10 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg"
                  >
                    {link.name}
                  </a>
                ))}

                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}