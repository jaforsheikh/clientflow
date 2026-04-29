"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (lead: {
    name: string;
    company: string;
    email: string;
    value: string;
    priority: string;
  }) => void;
};

export default function LeadModal({ open, onClose, onAdd }: LeadModalProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    onAdd({
      name: String(form.get("name")),
      company: String(form.get("company")),
      email: String(form.get("email")),
      value: String(form.get("value")),
      priority: String(form.get("priority")),
    });

    e.currentTarget.reset();
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button onClick={onClose} className="absolute inset-0" />

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="relative w-full max-w-xl rounded-[32px] border border-cyan-400/25 bg-[#020617] p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white"
            >
              <X size={18} />
            </button>

            <p className="text-sm font-bold text-cyan-300">New Lead</p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Add a new lead
            </h2>

            <div className="mt-6 grid gap-4">
              {[
                ["name", "Lead Name", "Sarah Johnson"],
                ["company", "Company", "Urban Taste Kitchen"],
                ["email", "Email", "sarah@example.com"],
                ["value", "Deal Value", "$2,500"],
              ].map(([name, label, placeholder]) => (
                <div key={name}>
                  <label className="mb-2 block text-sm font-bold text-slate-300">
                    {label}
                  </label>
                  <input
                    name={name}
                    required
                    placeholder={placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  />
                </div>
              ))}

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-300">
                  Priority
                </label>
                <select
                  name="priority"
                  className="w-full rounded-2xl border border-white/10 bg-[#020617] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>

            <button className="mt-6 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white hover:bg-blue-500">
              Add Lead
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}