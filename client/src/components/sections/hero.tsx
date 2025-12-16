import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Settings, Timer, Link, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CHART_DATA = [
  { stage: 'Manual', value: 5 },
  { stage: 'Tools', value: 18 },
  { stage: 'Core', value: 42 },
  { stage: 'Integration', value: 65 },
  { stage: 'Optimization', value: 83 },
  { stage: 'Autonomous', value: 94 }
];

const METRICS = [
  { 
    icon: Settings, 
    label: 'OPERATIONAL SCALE', 
    value: '47 workflows', 
    subtext: 'Zero bottlenecks' 
  },
  { 
    icon: Timer, 
    label: 'RESPONSE TIME', 
    value: '18 seconds', 
    subtext: 'Market standard: 4-6hrs' 
  },
  { 
    icon: Link, 
    label: 'SYSTEM INTEGRATION', 
    value: '12 platforms', 
    subtext: 'Unified interface' 
  },
  { 
    icon: Shield, 
    label: 'RELIABILITY', 
    value: '99.97%', 
    subtext: '24/7 monitoring' 
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.[0]) return null;
  
  const tooltipContent: Record<number, { label: string; desc: string }> = {
    5: {
      label: "MANUAL",
      desc: "Everything done by hand, reactive operations"
    },
    18: {
      label: "BASIC TOOLS",
      desc: "Basic software, still mostly manual"
    },
    42: {
      label: "AUTOMATED",
      desc: "Key workflows running automatically"
    },
    65: {
      label: "INTEGRATED",
      desc: "All systems connected, real-time sync"
    },
    83: {
      label: "OPTIMIZED",
      desc: "Zero bottlenecks, predictive operations"
    },
    94: {
      label: "AUTONOMOUS",
      desc: "Infrastructure handles operations, you handle strategy"
    }
  };
  
  const value = payload[0].value;
  const content = tooltipContent[value];
  
  return (
    <div className="bg-black/95 border-2 border-[#00d4aa] rounded-lg p-3 md:p-4 min-w-[220px] backdrop-blur-md">
      <div className="text-xl font-bold text-[#00d4aa] mb-1">{value}%</div>
      <div className="text-[13px] font-semibold text-white mb-1">
        {content?.label}
      </div>
      <div className="text-xs text-white/80 font-normal leading-relaxed">
        {content?.desc}
      </div>
    </div>
  );
};

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
            Build the invisible infrastructure
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

      {/* Product Peek - UPDATED DASHBOARD */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 20 }}
        whileHover={{ rotateX: 0, scale: 1.02, transition: { duration: 0.5 } }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        className="relative z-20 w-full max-w-[1000px] px-4 mt-auto mx-auto perspective-container"
      >
        <div className="relative overflow-hidden rounded-[16px] border border-[#00d4aa]/20 bg-[#141419]/95 shadow-[0_20px_60px_rgba(0,0,0,0.4)] interface-card">
          
          {/* Window bar */}
          <div className="relative flex h-10 items-center border-b border-white/[0.08] bg-white/[0.02] px-6">
            <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium text-white/60 tracking-widest uppercase">
                Operations Intelligence
                </span>
            </div>
            {/* Mac Dots */}
            <div className="absolute right-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
              <span className="h-2 w-2 rounded-full bg-green-500/80" />
            </div>
          </div>

          <div className="p-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {METRICS.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 h-[110px] flex flex-col justify-between relative group hover:border-[#00d4aa]/30 transition-colors"
                >
                  {/* Top Row: Label + Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-semibold tracking-widest text-white/50 uppercase mb-3">
                      {metric.label}
                    </span>
                    <metric.icon className="absolute top-5 right-5 w-5 h-5 text-white opacity-60" />
                  </div>

                  {/* Middle: Value */}
                  <div className="mb-1">
                    <span className="text-[32px] font-semibold text-white leading-[1.2]">
                      {metric.value}
                    </span>
                  </div>

                  {/* Bottom: Subtext */}
                  <div>
                    <span className="text-[13px] font-medium text-[#00d4aa] leading-[1.4]">
                      {metric.subtext}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Chart Area */}
            <div className="mb-4">
              <div className="text-[10px] font-semibold tracking-widest text-white/50 uppercase mb-4">
                Operational Maturity Progression
              </div>
              <div className="relative w-full h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CHART_DATA}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00d4aa" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="#00d4aa" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="stage" hide />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00d4aa" 
                      strokeWidth={2.5}
                      fill="url(#colorGradient)"
                      dot={{ fill: '#00d4aa', r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: '#00d4aa', strokeWidth: 0 }}
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-3 text-[13px] italic text-white/60">
                Most businesses operate at 5-18%. We build infrastructure to reach 94%.
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-[13px] text-white/60 italic">Infrastructure deployed in production</div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-[pulse_1.5s_infinite]"></div>
                    <span className="text-[12px] font-semibold text-white/80 uppercase">System Live</span>
                </div>
            </div>
          </div>
        </div>
        
        <div className="-mt-12 h-12 w-full bg-gradient-to-b from-transparent to-background" />
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
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}