import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* subtle “paper / mist” gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px] opacity-[0.10]" />
        <div className="absolute -bottom-56 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-full bg-[#19A89D] blur-[180px] opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/25 to-background/60" />
      </div>

      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay hero-grain" />

      <div className="relative mx-auto max-w-[800px] px-6 pt-[88px] pb-[80px] md:pt-[140px] md:pb-[130px] flex flex-col items-center text-center">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-5xl md:text-7xl leading-[1.1] text-foreground font-serif tracking-tight"
        >
          <span className="block font-normal">
            Build the invisible automated infrastructure
          </span>
          <span className="block italic text-foreground mt-1">
            behind a business that runs itself.
          </span>
        </motion.h1>

        {/* Subcopy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-[18px] md:mt-7 max-w-2xl mx-auto text-lg md:text-xl leading-[1.6] text-muted-foreground font-light"
        >
          The work you shouldn’t do. The problems you shouldn’t have to notice.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Book a call
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full w-11 h-11 border border-border bg-background/50 hover:bg-muted transition backdrop-blur text-foreground"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
          
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition backdrop-blur"
          >
            View deployed systems
          </a>
        </motion.div>

        {/* Proof row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 md:mt-20 w-full border-t border-border/40 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground text-left md:text-center">
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground/70">Outcome</div>
              <div className="mt-2">Less admin. Fewer handoffs. Faster decisions.</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground/70">Deliverables</div>
              <div className="mt-2">Internal tools, integrations, bespoke automations.</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground/70">Positioning</div>
              <div className="mt-2">Quiet execution, enterprise-grade reliability.</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Peek */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 20 }}
        whileHover={{ rotateX: 0, scale: 1.02, transition: { duration: 0.5 } }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        className="relative z-20 w-full max-w-6xl px-4 mt-auto mx-auto perspective-container"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-card shadow-2xl interface-card">
          
          {/* Window bar */}
          <div className="flex h-10 items-center justify-between border-b border-border/10 bg-muted/20 px-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Operations Dashboard
            </span>
            <div className="w-16" />
          </div>

            <div className="w-full h-[500px] md:h-[600px] bg-card relative overflow-hidden group">
                <div className="relative h-full w-full overflow-hidden bg-background/95">
                  {/* Background grid */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(125,125,125,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,125,125,0.14) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />

                  {/* Subtle teal wash */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#19A89D]/20 to-background blur-[160px] opacity-[0.15]" />

                  {/* Film grain */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(125,125,125,0.18) 0, transparent 35%), radial-gradient(circle at 80% 40%, rgba(125,125,125,0.10) 0, transparent 40%), radial-gradient(circle at 30% 90%, rgba(125,125,125,0.08) 0, transparent 45%)",
                    }}
                  />

                  <div className="relative h-full p-8">
                    {/* Top row */}
                    <div className="grid grid-cols-12 gap-4">
                      {[
                        { tint: "bg-[#19A89D]/20", dot: "bg-[#19A89D]" },
                        { tint: "bg-foreground/10", dot: "bg-foreground/35" },
                        { tint: "bg-foreground/10", dot: "bg-foreground/35" },
                        { tint: "bg-foreground/10", dot: "bg-foreground/35" },
                      ].map((c, i) => (
                        <div
                          key={i}
                          className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-2xl border border-border/10 bg-foreground/[0.035] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
                        >
                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <div className={`h-7 w-7 rounded-lg ${c.tint}`} />
                              <div className="h-2 w-2 rounded-full opacity-80 shadow-[0_0_10px_rgba(25,168,157,0.55)]" style={{ backgroundColor: i === 0 ? "#19A89D" : "rgba(125,125,125,0.35)" }} />
                            </div>

                            <div className="mt-4 space-y-2">
                              <div className="h-2.5 w-24 rounded bg-foreground/15" />
                              <div className="h-2 w-32 rounded bg-foreground/10" />
                              <div className="h-2 w-20 rounded bg-foreground/10" />
                            </div>

                            <div className="mt-4 flex justify-end">
                              <div className="h-1 w-10 rounded-full bg-[#19A89D]/35" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart card */}
                    <div className="mt-6 rounded-2xl border border-border/10 bg-foreground/[0.03] backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                      <div className="relative h-[260px]">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.12]"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(125,125,125,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(125,125,125,0.10) 1px, transparent 1px)",
                            backgroundSize: "56px 56px",
                          }}
                        />

                        <div className="absolute left-6 top-5 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground/50">
                          Output trend
                        </div>

                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="consulStroke" x1="0" x2="1" y1="0" y2="0">
                              <stop offset="0%" stopColor="#19A89D" stopOpacity="0.25" />
                              <stop offset="55%" stopColor="#19A89D" stopOpacity="0.70" />
                              <stop offset="100%" stopColor="#19A89D" stopOpacity="0.95" />
                            </linearGradient>
                            <linearGradient id="consulFill" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#19A89D" stopOpacity="0.18" />
                              <stop offset="100%" stopColor="#19A89D" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          <path
                            d="M0,240 C120,235 220,225 320,212
                               C420,198 520,182 620,168
                               C720,154 820,140 920,118
                               C1020,96 1120,78 1200,62
                               L1200,300 L0,300 Z"
                            fill="url(#consulFill)"
                          />

                          <path
                            d="M0,240 C120,235 220,225 320,212
                               C420,198 520,182 620,168
                               C720,154 820,140 920,118
                               C1020,96 1120,78 1200,62"
                            fill="none"
                            stroke="url(#consulStroke)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            style={{ filter: "drop-shadow(0 0 12px rgba(25,168,157,0.55))" }}
                          />
                        </svg>

                        <div className="absolute bottom-5 left-6 right-6 flex items-end gap-2 opacity-60">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-sm bg-foreground/10"
                              style={{ height: `${12 + (i % 6) * 8}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/10" />
                  </div>
                </div>
            </div>
        </div>
        
        <div className="-mt-10 h-10 w-full bg-gradient-to-b from-transparent to-background" />
      </motion.div>

      <style>{`
        .hero-grain {
          background-image:
            radial-gradient(circle at 20% 10%, rgba(125,125,125,0.10) 0, transparent 35%),
            radial-gradient(circle at 70% 40%, rgba(125,125,125,0.06) 0, transparent 40%),
            radial-gradient(circle at 30% 90%, rgba(125,125,125,0.05) 0, transparent 45%);
        }
        .perspective-container {
            perspective: 2000px;
        }
        .interface-card {
            transform-origin: center bottom;
        }
      `}</style>
    </section>
  );
}
