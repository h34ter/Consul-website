import React from "react";

type Deliverable = { title: string; desc: string; status?: "Mapped" | "Building" | "Live" };

const COLS: { title: string; hint: string; items: Deliverable[] }[] = [
  {
    title: "Audit",
    hint: "Understand the system",
    items: [
      { title: "Workflow map", desc: "Where time is lost and why.", status: "Mapped" },
      { title: "Bottleneck report", desc: "What breaks, duplicates, delays.", status: "Mapped" },
      { title: "Automation backlog", desc: "What to fix first for ROI.", status: "Mapped" },
    ],
  },
  {
    title: "Build",
    hint: "Ship custom solutions",
    items: [
      { title: "Internal tool", desc: "Admin panel / ops console.", status: "Building" },
      { title: "Integrations", desc: "CRM, inbox, billing, docs.", status: "Building" },
      { title: "Automations", desc: "Routing, follow-ups, handoffs.", status: "Building" },
    ],
  },
  {
    title: "Operate",
    hint: "Keep it running",
    items: [
      { title: "Monitoring", desc: "Quietly stays reliable.", status: "Live" },
      { title: "Improvements", desc: "Iterate as you grow.", status: "Live" },
      { title: "Support", desc: "Fixes without drama.", status: "Live" },
    ],
  },
];

function Pill({ children, tone }: { children: React.ReactNode; tone: "teal" | "gray" | "amber" }) {
  const tones =
    tone === "teal"
      ? "bg-[#19A89D]/15 text-[#77e3db] border-[#19A89D]/30"
      : tone === "amber"
      ? "bg-amber-400/10 text-amber-200 border-amber-400/20"
      : "bg-white/5 text-gray-300 border-white/10";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones}`}>
      {children}
    </span>
  );
}

function statusTone(s?: Deliverable["status"]) {
  if (s === "Live") return "teal" as const;
  if (s === "Building") return "amber" as const;
  return "gray" as const;
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      {/* Background: subtle teal horizon + vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#19A89D] blur-[180px] opacity-[0.12]" />
        <div className="absolute bottom-[-260px] left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#19A89D]/25 to-transparent blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16">
        {/* Top row: badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#19A89D] shadow-[0_0_20px_rgba(25,168,157,0.8)]" />
          <span className="text-[11px] font-medium tracking-wide text-gray-200">
            Consult → Audit → Build → Operate
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Automate your entire business with Consul.
        </h1>
        <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-gray-400 md:text-lg">
          Not another tool to manage. Consul audits your workflows and builds custom internal tools, integrations, and
          automations that make operations feel effortless.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-gray-100 transition"
          >
            Book a call
          </a>
          <a
            href="#work"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition"
          >
            See what gets built
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 text-xs text-gray-500">
          Scroll to see examples of what Consul automates.
        </div>

        {/* Macbook / screen */}
        <div className="mt-14 w-full max-w-6xl">
          <div className="relative mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
            {/* window bar */}
            <div className="flex h-10 items-center justify-between border-b border-white/5 bg-[#111] px-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-3 text-[10px] font-medium tracking-widest text-gray-500">
                  CONSUL DELIVERY WORKSPACE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Pill tone="teal">Owner view</Pill>
              </div>
            </div>

            {/* screen */}
            <div className="relative p-6">
              {/* grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />
              {/* subtle glass glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#19A89D] blur-[140px] opacity-[0.10]" />

              {/* tabs */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white">Audit</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-gray-300">Build</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-gray-300">Operate</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Pill tone="gray">Custom tools</Pill>
                  <Pill tone="gray">Integrations</Pill>
                  <Pill tone="gray">Automations</Pill>
                </div>
              </div>

              {/* columns */}
              <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
                {COLS.map((col) => (
                  <div key={col.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <div className="mb-3 flex items-baseline justify-between">
                      <div className="text-sm font-semibold text-white">{col.title}</div>
                      <div className="text-[10px] text-gray-400">{col.hint}</div>
                    </div>

                    <div className="space-y-3">
                      {col.items.map((it) => (
                        <div
                          key={it.title}
                          className="rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/15 transition"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-[13px] font-semibold text-white">{it.title}</div>
                              <div className="mt-1 text-[11px] leading-snug text-gray-400">{it.desc}</div>
                            </div>
                            <Pill tone={statusTone(it.status)}>{it.status}</Pill>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* bottom strip: plain-English “what we do” */}
              <div className="relative mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm font-semibold text-white">What Consul delivers</div>
                  <div className="text-[11px] text-gray-400">
                    Systems that remove handoffs, errors, and busywork.
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill tone="teal">Internal dashboards</Pill>
                  <Pill tone="teal">Client onboarding</Pill>
                  <Pill tone="teal">Sales ops + follow-ups</Pill>
                  <Pill tone="teal">Invoicing + collections</Pill>
                  <Pill tone="teal">Reporting workspaces</Pill>
                  <Pill tone="teal">Custom integrations</Pill>
                </div>
              </div>
            </div>
          </div>

          {/* “peek” cut-off effect like the reference sites */}
          <div className="-mt-10 h-10 w-full bg-gradient-to-b from-transparent to-[#050505]" />
        </div>
      </div>
    </section>
  );
}
