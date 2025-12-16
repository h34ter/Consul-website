import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Settings, Timer, Link, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CHART_DATA = [
  { 
    x: 0, 
    y: 15, 
    insight: 'Only 15% of businesses have real automation infrastructure',
    label: 'Market Average'
  },
  { 
    x: 1, 
    y: 28, 
    insight: '28% reduction in operational overhead within 60 days',
    label: 'Day 60'
  },
  { 
    x: 2, 
    y: 47, 
    insight: '47% of manual processes identified as fully automatable',
    label: 'Audit Complete'
  },
  { 
    x: 3, 
    y: 52, 
    insight: '52% faster client response times post-deployment',
    label: 'System Live'
  },
  { 
    x: 4, 
    y: 78, 
    insight: '78% of decisions now handled without human intervention',
    label: 'Month 3'
  },
  { 
    x: 5, 
    y: 94, 
    insight: '94% automation rate achieved. Business runs itself.',
    label: 'Optimized'
  }
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
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/95 border border-[#19A89D]/50 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[280px] backdrop-blur-md">
        <div className="text-2xl font-bold text-[#19A89D] mb-1">{data.y}%</div>
        <div className="text-[13px] text-gray-300 leading-relaxed font-medium">
          {data.insight}
        </div>
        <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mt-2">
          {data.label}
        </div>
      </div>
    );
  }
  return null;
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
        <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#050505] shadow-[0_20px_60px_rgba(0,0,0,0.5)] interface-card">
          
          {/* Window bar */}
          <div className="relative flex h-10 items-center border-b border-white/10 bg-white/[0.03] px-4">
            <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-white/40 tracking-widest uppercase">
                Operations Intelligence
                </span>
            </div>
            {/* Mac Dots */}
            <div className="absolute right-4 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="p-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {METRICS.map((metric, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-xl p-6 h-[140px] flex flex-col justify-between relative group hover:border-[#19A89D]/30 transition-colors"
                >
                  {/* Top Row: Label + Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                      {metric.label}
                    </span>
                    <metric.icon className="absolute top-4 right-4 w-6 h-6 text-white opacity-100" />
                  </div>

                  {/* Middle: Value */}
                  <div className="mt-2">
                    <span className="text-4xl md:text-[48px] font-bold text-white leading-none tracking-tight">
                      {metric.value}
                    </span>
                  </div>

                  {/* Bottom: Subtext */}
                  <div className="mt-auto">
                    <span className="text-[13px] font-medium text-[#19A89D]">
                      {metric.subtext}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Chart Area */}
            <div className="relative w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <XAxis dataKey="label" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                  <Line 
                    type="monotone" 
                    dataKey="y" 
                    stroke="url(#lineGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#19A89D', strokeWidth: 2, r: 4, stroke: '#050505' }}
                    activeDot={{ r: 8, fill: '#19A89D', filter: 'url(#glow)' }}
                    filter="url(#glow)"
                    animationDuration={2000}
                  />
                </LineChart>
              </ResponsiveContainer>
              
              {/* Chart Grid Lines (Visual only) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-b border-l border-white/5" />
                <div className="absolute bottom-1/3 w-full border-t border-white/5 border-dashed" />
                <div className="absolute bottom-2/3 w-full border-t border-white/5 border-dashed" />
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-[13px] text-muted-foreground/60 tracking-tight font-mono">"The infrastructure satisfying clients."</div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#19A89D] shadow-[0_0_8px_#19A89D] animate-pulse"></div>
                    <span className="text-[11px] font-bold text-white/80 tracking-widest uppercase">System Live</span>
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
      `}</style>
    </section>
  );
}