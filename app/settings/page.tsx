"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Building2,
  CheckCircle2,
  CreditCard,
  Database,
  Globe2,
  KeyRound,
  Lock,
  Mail,
  Menu,
  MonitorCog,
  Palette,
  Save,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

const tabs = [
  { label: "Profile", icon: UserRound },
  { label: "Company", icon: Building2 },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: ShieldCheck },
  { label: "Billing", icon: CreditCard },
  { label: "Integrations", icon: Database },
];

const integrations = [
  {
    name: "Google Calendar",
    desc: "Sync meetings, calls, follow-ups, and CRM reminders.",
    status: "Connected",
    icon: Globe2,
  },
  {
    name: "Gmail",
    desc: "Track email communication and client follow-ups.",
    status: "Connected",
    icon: Mail,
  },
  {
    name: "Stripe",
    desc: "Connect payments, invoices, and subscription revenue.",
    status: "Not Connected",
    icon: CreditCard,
  },
  {
    name: "Slack",
    desc: "Send team notifications for hot leads and closed deals.",
    status: "Not Connected",
    icon: UsersRound,
  },
];

const teamMembers = [
  {
    name: "Md Jafar Ali Shaikh",
    role: "Owner",
    email: "jafar@clientflow.com",
    access: "Full Access",
  },
  {
    name: "Sarah Johnson",
    role: "Sales Manager",
    email: "sarah@clientflow.com",
    access: "Sales Access",
  },
  {
    name: "Michael Carter",
    role: "Account Manager",
    email: "michael@clientflow.com",
    access: "Client Access",
  },
];

const billingHistory = [
  {
    invoice: "INV-2026-001",
    date: "Apr 29, 2026",
    amount: "$49",
    status: "Paid",
  },
  {
    invoice: "INV-2026-002",
    date: "Mar 29, 2026",
    amount: "$49",
    status: "Paid",
  },
  {
    invoice: "INV-2026-003",
    date: "Feb 29, 2026",
    amount: "$49",
    status: "Paid",
  },
];

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    name: "Md Jafar Ali Shaikh",
    email: "jaforsheikh258@gmail.com",
    role: "Full Stack Web Developer",
    timezone: "Asia/Dhaka",
  });

  const [company, setCompany] = useState({
    name: "ClientFlow CRM",
    website: "https://clientflow.vercel.app",
    industry: "SaaS / CRM",
    size: "1-10",
  });

  const [notifications, setNotifications] = useState({
    newLead: true,
    dealWon: true,
    taskReminder: true,
    weeklyReport: false,
    securityAlert: true,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
    sessionTimeout: true,
    apiAccess: false,
  });

  const summary = useMemo(() => {
    const enabledNotifications = Object.values(notifications).filter(Boolean).length;
    const enabledSecurity = Object.values(security).filter(Boolean).length;

    return [
      {
        label: "Notification Rules",
        value: `${enabledNotifications}/5`,
        icon: Bell,
      },
      {
        label: "Security Controls",
        value: `${enabledSecurity}/4`,
        icon: ShieldCheck,
      },
      {
        label: "Connected Apps",
        value: `${integrations.filter((item) => item.status === "Connected").length}/4`,
        icon: Database,
      },
      {
        label: "Team Members",
        value: teamMembers.length,
        icon: UsersRound,
      },
    ];
  }, [notifications, security]);

  function handleSave() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2200);
  }

  function toggleNotification(key: keyof typeof notifications) {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function toggleSecurity(key: keyof typeof security) {
    setSecurity((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

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
                  Workspace Controls
                </p>
                <h1 className="mt-2 text-3xl font-black md:text-5xl">
                  Settings
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  Manage profile, workspace, notifications, security,
                  integrations, billing, and team access.
                </p>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-500"
            >
              <Save size={18} />
              Save Changes
            </button>
          </header>

          <AnimatePresence>
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mb-6 rounded-3xl border border-green-400/20 bg-green-400/10 p-4 text-sm font-bold text-green-300"
              >
                ✅ Settings saved successfully. Your workspace preferences have
                been updated.
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summary.map((item, index) => {
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
                      Active
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
            <aside className="crm-card h-fit p-4">
              <div className="mb-4 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <Sparkles className="mb-3 text-cyan-300" />
                <h3 className="text-lg font-black text-white">
                  ClientFlow Pro
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Configure your CRM workspace for better sales, team workflow,
                  and client management.
                </p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.label;

                  return (
                    <button
                      key={tab.label}
                      onClick={() => setActiveTab(tab.label)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
                        active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="crm-card p-6 md:p-8"
            >
              {activeTab === "Profile" && (
                <div>
                  <SectionHeader
                    icon={UserRound}
                    title="Profile Settings"
                    desc="Update your personal CRM profile and account information."
                  />

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <InputField
                      label="Full Name"
                      value={profile.name}
                      onChange={(value) =>
                        setProfile((prev) => ({ ...prev, name: value }))
                      }
                    />

                    <InputField
                      label="Email Address"
                      value={profile.email}
                      onChange={(value) =>
                        setProfile((prev) => ({ ...prev, email: value }))
                      }
                    />

                    <InputField
                      label="Role / Title"
                      value={profile.role}
                      onChange={(value) =>
                        setProfile((prev) => ({ ...prev, role: value }))
                      }
                    />

                    <InputField
                      label="Timezone"
                      value={profile.timezone}
                      onChange={(value) =>
                        setProfile((prev) => ({ ...prev, timezone: value }))
                      }
                    />
                  </div>

                  <ProfilePreview profile={profile} />
                </div>
              )}

              {activeTab === "Company" && (
                <div>
                  <SectionHeader
                    icon={Building2}
                    title="Company Settings"
                    desc="Manage workspace branding, company details, and CRM identity."
                  />

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <InputField
                      label="Company Name"
                      value={company.name}
                      onChange={(value) =>
                        setCompany((prev) => ({ ...prev, name: value }))
                      }
                    />

                    <InputField
                      label="Website"
                      value={company.website}
                      onChange={(value) =>
                        setCompany((prev) => ({ ...prev, website: value }))
                      }
                    />

                    <InputField
                      label="Industry"
                      value={company.industry}
                      onChange={(value) =>
                        setCompany((prev) => ({ ...prev, industry: value }))
                      }
                    />

                    <InputField
                      label="Team Size"
                      value={company.size}
                      onChange={(value) =>
                        setCompany((prev) => ({ ...prev, size: value }))
                      }
                    />
                  </div>

                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <h3 className="text-xl font-black text-white">
                      Workspace Preview
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {company.name} is configured as a{" "}
                      <span className="font-bold text-cyan-300">
                        {company.industry}
                      </span>{" "}
                      workspace with team size{" "}
                      <span className="font-bold text-cyan-300">
                        {company.size}
                      </span>
                      .
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "Notifications" && (
                <div>
                  <SectionHeader
                    icon={Bell}
                    title="Notification Settings"
                    desc="Control which CRM events send alerts to your inbox or dashboard."
                  />

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <ToggleCard
                      title="New Lead Alerts"
                      desc="Notify when a new lead enters your CRM pipeline."
                      active={notifications.newLead}
                      onClick={() => toggleNotification("newLead")}
                    />

                    <ToggleCard
                      title="Deal Won Alerts"
                      desc="Notify when a deal is marked as won."
                      active={notifications.dealWon}
                      onClick={() => toggleNotification("dealWon")}
                    />

                    <ToggleCard
                      title="Task Reminders"
                      desc="Get reminders for overdue tasks and follow-ups."
                      active={notifications.taskReminder}
                      onClick={() => toggleNotification("taskReminder")}
                    />

                    <ToggleCard
                      title="Weekly Reports"
                      desc="Receive weekly revenue and pipeline insights."
                      active={notifications.weeklyReport}
                      onClick={() => toggleNotification("weeklyReport")}
                    />

                    <ToggleCard
                      title="Security Alerts"
                      desc="Get notified about login and security events."
                      active={notifications.securityAlert}
                      onClick={() => toggleNotification("securityAlert")}
                    />
                  </div>
                </div>
              )}

              {activeTab === "Security" && (
                <div>
                  <SectionHeader
                    icon={ShieldCheck}
                    title="Security Settings"
                    desc="Protect your CRM workspace with account and access controls."
                  />

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <ToggleCard
                      title="Two-Factor Authentication"
                      desc="Add an extra verification step when signing in."
                      active={security.twoFactor}
                      onClick={() => toggleSecurity("twoFactor")}
                    />

                    <ToggleCard
                      title="Login Alerts"
                      desc="Send alerts when a new device logs in."
                      active={security.loginAlerts}
                      onClick={() => toggleSecurity("loginAlerts")}
                    />

                    <ToggleCard
                      title="Session Timeout"
                      desc="Automatically log out inactive sessions."
                      active={security.sessionTimeout}
                      onClick={() => toggleSecurity("sessionTimeout")}
                    />

                    <ToggleCard
                      title="API Access"
                      desc="Enable secure API tokens for integrations."
                      active={security.apiAccess}
                      onClick={() => toggleSecurity("apiAccess")}
                    />
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <SecurityBox
                      icon={Lock}
                      title="Password"
                      desc="Last changed 18 days ago. Use a strong password with letters, numbers, and symbols."
                      action="Change Password"
                    />

                    <SecurityBox
                      icon={KeyRound}
                      title="API Keys"
                      desc="Create and manage API keys for automation, reporting, and external tools."
                      action="Manage Keys"
                    />
                  </div>
                </div>
              )}

              {activeTab === "Billing" && (
                <div>
                  <SectionHeader
                    icon={CreditCard}
                    title="Billing & Subscription"
                    desc="Manage your subscription plan, invoices, and billing details."
                  />

                  <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                          Current Plan
                        </p>
                        <h3 className="mt-2 text-3xl font-black text-white">
                          ClientFlow Growth
                        </h3>
                        <p className="mt-2 text-sm text-slate-300">
                          $49/month • Includes CRM dashboard, lead pipeline,
                          reports, tasks, and client management.
                        </p>
                      </div>

                      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-500">
                        Upgrade Plan <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="mb-5 text-xl font-black text-white">
                      Billing History
                    </h3>

                    <div className="space-y-3">
                      {billingHistory.map((invoice) => (
                        <div
                          key={invoice.invoice}
                          className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:flex-row md:items-center"
                        >
                          <div>
                            <h4 className="font-black text-white">
                              {invoice.invoice}
                            </h4>
                            <p className="mt-1 text-sm text-slate-400">
                              {invoice.date}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-black text-white">
                              {invoice.amount}
                            </span>
                            <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-black text-green-300">
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Integrations" && (
                <div>
                  <SectionHeader
                    icon={Database}
                    title="Integrations"
                    desc="Connect ClientFlow with tools your business already uses."
                  />

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {integrations.map((integration) => {
                      const Icon = integration.icon;
                      const connected = integration.status === "Connected";

                      return (
                        <motion.div
                          key={integration.name}
                          whileHover={{ y: -6 }}
                          className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                        >
                          <div className="mb-5 flex items-center justify-between">
                            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                              <Icon size={22} />
                            </span>

                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-black ${
                                connected
                                  ? "border-green-400/20 bg-green-400/10 text-green-300"
                                  : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300"
                              }`}
                            >
                              {integration.status}
                            </span>
                          </div>

                          <h3 className="text-xl font-black text-white">
                            {integration.name}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {integration.desc}
                          </p>

                          <button
                            className={`mt-5 w-full rounded-full px-5 py-3 text-sm font-black transition ${
                              connected
                                ? "border border-white/10 text-slate-300 hover:border-red-400/30 hover:text-red-300"
                                : "bg-blue-600 text-white hover:bg-blue-500"
                            }`}
                          >
                            {connected ? "Disconnect" : "Connect"}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="mt-6 crm-card p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm text-slate-400">Team Access</p>
                <h2 className="text-2xl font-black">Workspace Members</h2>
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 hover:bg-cyan-400/15">
                <UsersRound size={17} />
                Invite Member
              </button>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.email}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-sm font-black text-white">
                      {member.name
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </span>

                    <div>
                      <h3 className="font-black text-white">{member.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400">{member.email}</p>

                  <span className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-300">
                    {member.access}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        <Icon size={24} />
      </span>

      <div>
        <h2 className="text-3xl font-black text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
          {desc}
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-300">
        {label}
      </label>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
      />
    </div>
  );
}

function ToggleCard({
  title,
  desc,
  active,
  onClick,
}: {
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl border p-5 text-left transition ${
        active
          ? "border-cyan-400/30 bg-cyan-400/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-black text-white">{title}</h3>

        <span
          className={`relative h-7 w-12 rounded-full transition ${
            active ? "bg-cyan-400" : "bg-white/10"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              active ? "left-6" : "left-1"
            }`}
          />
        </span>
      </div>

      <p className="text-sm leading-7 text-slate-400">{desc}</p>

      <p
        className={`mt-4 text-xs font-black ${
          active ? "text-cyan-300" : "text-slate-500"
        }`}
      >
        {active ? "Enabled" : "Disabled"}
      </p>
    </button>
  );
}

function SecurityBox({
  icon: Icon,
  title,
  desc,
  action,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  action: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <Icon className="mb-4 text-cyan-300" size={24} />
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-400">{desc}</p>

      <button className="mt-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-300 hover:bg-cyan-400/15">
        {action}
      </button>
    </div>
  );
}

function ProfilePreview({
  profile,
}: {
  profile: {
    name: string;
    email: string;
    role: string;
    timezone: string;
  };
}) {
  return (
    <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-xl font-black text-white">
          {profile.name
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </span>

        <div>
          <h3 className="text-2xl font-black text-white">{profile.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{profile.role}</p>
          <p className="mt-1 text-sm text-cyan-300">{profile.email}</p>
        </div>
      </div>
    </div>
  );
}