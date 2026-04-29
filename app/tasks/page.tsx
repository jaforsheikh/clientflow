"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Filter,
  Flag,
  ListTodo,
  Menu,
  Plus,
  Search,
  Timer,
  UserRound,
  X,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const statuses = ["To Do", "In Progress", "Review", "Done"];

const initialTasks = [
  {
    id: 1,
    title: "Follow up with Sarah Johnson",
    client: "Urban Taste Kitchen",
    owner: "Jafar",
    status: "To Do",
    priority: "High",
    dueDate: "Apr 30, 2026",
    estimated: "20 min",
    category: "Sales",
    notes:
      "Sarah asked for a website redesign estimate. Send a friendly follow-up with package options and WhatsApp consultation link.",
    checklist: [
      "Review last conversation",
      "Prepare package recommendation",
      "Send follow-up message",
    ],
  },
  {
    id: 2,
    title: "Prepare proposal for LocalBoost Media",
    client: "LocalBoost Media",
    owner: "Jafar",
    status: "In Progress",
    priority: "High",
    dueDate: "May 02, 2026",
    estimated: "2 hours",
    category: "Proposal",
    notes:
      "Create a proposal for agency landing page system including SEO structure, case study layout, pricing, and delivery timeline.",
    checklist: [
      "Add scope of work",
      "Add pricing table",
      "Add timeline",
      "Export final proposal",
    ],
  },
  {
    id: 3,
    title: "Review eCommerce conversion audit",
    client: "NovaCart Store",
    owner: "Jafar",
    status: "Review",
    priority: "Medium",
    dueDate: "May 04, 2026",
    estimated: "45 min",
    category: "CRO",
    notes:
      "Check product page trust badges, checkout flow, CTA placement, and mobile layout issues before sending final recommendations.",
    checklist: [
      "Review product page",
      "Check mobile checkout",
      "Write conversion suggestions",
    ],
  },
  {
    id: 4,
    title: "Update dashboard KPI section",
    client: "ClientFlow Internal",
    owner: "Jafar",
    status: "Done",
    priority: "Low",
    dueDate: "Apr 28, 2026",
    estimated: "1 hour",
    category: "Development",
    notes:
      "Dashboard KPI cards have been updated with revenue, tasks, leads, and active deals metrics.",
    checklist: [
      "Update UI cards",
      "Add animation",
      "Test responsive layout",
    ],
  },
  {
    id: 5,
    title: "Schedule discovery call with BrightCare Clinic",
    client: "BrightCare Clinic",
    owner: "Jafar",
    status: "To Do",
    priority: "Medium",
    dueDate: "May 06, 2026",
    estimated: "15 min",
    category: "Meeting",
    notes:
      "Clinic is interested in a trust-focused website and local SEO. Schedule discovery call and prepare questions.",
    checklist: [
      "Send availability",
      "Prepare discovery questions",
      "Confirm call time",
    ],
  },
];

const priorityStyles: Record<string, string> = {
  High: "bg-red-500/10 text-red-300 border-red-500/20",
  Medium: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Low: "bg-green-400/10 text-green-300 border-green-400/20",
};

const statusStyles: Record<string, string> = {
  "To Do": "bg-slate-400/10 text-slate-300 border-slate-400/20",
  "In Progress": "bg-blue-500/10 text-blue-300 border-blue-400/20",
  Review: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  Done: "bg-green-400/10 text-green-300 border-green-400/20",
};

export default function TasksPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof initialTasks)[0] | null>(
    null
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesQuery =
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.client.toLowerCase().includes(query.toLowerCase()) ||
        task.category.toLowerCase().includes(query.toLowerCase()) ||
        task.owner.toLowerCase().includes(query.toLowerCase());

      const matchesPriority =
        priorityFilter === "All" || task.priority === priorityFilter;

      return matchesQuery && matchesPriority;
    });
  }, [tasks, query, priorityFilter]);

  function moveTask(id: number, direction: "next" | "back") {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const currentIndex = statuses.indexOf(task.status);
        const nextIndex =
          direction === "next"
            ? Math.min(currentIndex + 1, statuses.length - 1)
            : Math.max(currentIndex - 1, 0);

        return { ...task, status: statuses[nextIndex] };
      })
    );
  }

  function addDemoTask() {
    const demoTask = {
      id: Date.now(),
      title: "Send CRM onboarding checklist",
      client: "ScaleUp Studio",
      owner: "Jafar",
      status: "To Do",
      priority: "High",
      dueDate: "May 10, 2026",
      estimated: "30 min",
      category: "Onboarding",
      notes:
        "New CRM lead needs onboarding checklist, dashboard walkthrough, and next call schedule.",
      checklist: [
        "Prepare onboarding checklist",
        "Send dashboard access steps",
        "Schedule follow-up call",
      ],
    };

    setTasks((prev) => [demoTask, ...prev]);
  }

  const completedTasks = tasks.filter((task) => task.status === "Done").length;
  const highPriority = tasks.filter((task) => task.priority === "High").length;
  const progressRate = Math.round((completedTasks / tasks.length) * 100);

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
                  Work Management
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Tasks
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Manage follow-ups, proposals, client work, deadlines, and
                  internal CRM tasks.
                </p>
              </div>
            </div>

            <button
              onClick={addDemoTask}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-500"
            >
              <Plus size={18} />
              Add Demo Task
            </button>
          </header>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Total Tasks",
                value: tasks.length,
                icon: ListTodo,
                change: "+16%",
              },
              {
                label: "Completed",
                value: completedTasks,
                icon: CheckCircle2,
                change: `${progressRate}%`,
              },
              {
                label: "High Priority",
                value: highPriority,
                icon: AlertCircle,
                change: "Urgent",
              },
              {
                label: "Avg. Time",
                value: "48 min",
                icon: Timer,
                change: "-12%",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="crm-card p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={22} />
                    </span>

                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                      {item.change}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mb-6 grid gap-4 xl:grid-cols-[1fr_0.8fr]">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Search size={18} className="text-cyan-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tasks by title, client, category, owner..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "High", "Medium", "Low"].map((priority) => (
                <button
                  key={priority}
                  onClick={() => setPriorityFilter(priority)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    priorityFilter === priority
                      ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                      : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  <Filter size={14} className="mr-1 inline" />
                  {priority}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-4">
            {statuses.map((status, statusIndex) => {
              const statusTasks = filteredTasks.filter(
                (task) => task.status === status
              );

              return (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: statusIndex * 0.08 }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-black text-white">
                        {status}
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">
                        {statusTasks.length} tasks
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-black ${statusStyles[status]}`}
                    >
                      {statusTasks.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {statusTasks.map((task) => (
                      <motion.div
                        layout
                        key={task.id}
                        whileHover={{ y: -4 }}
                        className="rounded-3xl border border-white/10 bg-[#0f172a]/85 p-5"
                      >
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-black ${
                              priorityStyles[task.priority]
                            }`}
                          >
                            <Flag size={12} className="mr-1 inline" />
                            {task.priority}
                          </span>

                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-300">
                            {task.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-black text-white">
                          {task.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                          {task.client}
                        </p>

                        <div className="mt-4 space-y-3">
                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <UserRound size={15} />
                            Owner: {task.owner}
                          </p>

                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <CalendarDays size={15} />
                            Due: {task.dueDate}
                          </p>

                          <p className="flex items-center gap-2 text-sm text-slate-400">
                            <Clock3 size={15} />
                            Est: {task.estimated}
                          </p>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="font-bold text-slate-400">
                              Checklist
                            </span>
                            <span className="font-black text-white">
                              {task.status === "Done"
                                ? task.checklist.length
                                : Math.max(1, task.checklist.length - 1)}
                              /{task.checklist.length}
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width:
                                  task.status === "Done"
                                    ? "100%"
                                    : task.status === "Review"
                                    ? "75%"
                                    : task.status === "In Progress"
                                    ? "50%"
                                    : "25%",
                              }}
                              transition={{ duration: 0.7 }}
                              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                            />
                          </div>
                        </div>

                        <div className="mt-5 flex gap-2">
                          <button
                            onClick={() => moveTask(task.id, "back")}
                            disabled={status === "To Do"}
                            className="flex-1 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Back
                          </button>

                          <button
                            onClick={() => moveTask(task.id, "next")}
                            disabled={status === "Done"}
                            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-blue-600 px-4 py-2 text-xs font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            Move
                            <ArrowRight size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => setSelected(task)}
                          className="mt-3 w-full rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-300 hover:bg-cyan-400/15"
                        >
                          View Task Details
                        </button>
                      </motion.div>
                    ))}

                    {statusTasks.length === 0 && (
                      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
                        <ListTodo
                          className="mx-auto mb-3 text-slate-500"
                          size={30}
                        />
                        <p className="text-sm font-bold text-slate-500">
                          No tasks here
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              aria-label="Close task details"
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

              <div className="mb-8 pr-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Task Details
                </p>

                <h2 className="text-3xl font-black text-white md:text-5xl">
                  {selected.title}
                </h2>

                <p className="mt-3 text-slate-400">{selected.client}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-4">
                {[
                  ["Status", selected.status, ListTodo],
                  ["Priority", selected.priority, Flag],
                  ["Due Date", selected.dueDate, CalendarDays],
                  ["Estimate", selected.estimated, Timer],
                ].map(([label, value, Icon]) => {
                  const IconComponent = Icon as React.ElementType;

                  return (
                    <div
                      key={label as string}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <IconComponent className="mb-4 text-cyan-300" />
                      <p className="text-sm text-slate-400">
                        {label as string}
                      </p>
                      <h3 className="mt-2 text-xl font-black text-white">
                        {value as string}
                      </h3>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 text-xl font-black text-white">
                    Task Notes
                  </h3>

                  <p className="text-sm leading-7 text-slate-300">
                    {selected.notes}
                  </p>

                  <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                    <p className="text-sm leading-7 text-slate-300">
                      Recommended action: complete this task before{" "}
                      <span className="font-black text-yellow-300">
                        {selected.dueDate}
                      </span>{" "}
                      to keep the client workflow moving smoothly.
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="mb-5 flex items-center gap-2 text-xl font-black text-white">
                    <CheckCircle2 className="text-cyan-300" />
                    Checklist
                  </h3>

                  <div className="space-y-3">
                    {selected.checklist.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/70 p-4"
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black ${
                            selected.status === "Done" ||
                            index <
                              (selected.status === "Review"
                                ? selected.checklist.length - 1
                                : selected.status === "In Progress"
                                ? Math.ceil(selected.checklist.length / 2)
                                : 1)
                              ? "bg-cyan-400/10 text-cyan-300"
                              : "bg-white/10 text-slate-500"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <p className="text-sm text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-black text-white">
                      Move this task forward
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Keep the CRM workflow clean by updating status after each
                      completed action.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      moveTask(selected.id, "next");
                      setSelected(null);
                    }}
                    disabled={selected.status === "Done"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Move Next <ArrowRight size={17} />
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