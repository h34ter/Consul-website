import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Clock, DollarSign, Target, Settings, Link, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import mountains from "@assets/mountains.png";

const CHART_DATA = [
  { 
    x: 0, 
    y: 5, 
    insight: 'MANUAL - Everything done by hand, reactive operations',
    label: 'Manual'
  },
  { 
    x: 1, 
    y: 18, 
    insight: 'BASIC TOOLS - Basic software, still mostly manual',
    label: 'Basic Tools'
  },
  { 
    x: 2, 
    y: 42, 
    insight: 'AUTOMATED - Key workflows running automatically',
    label: 'Automated'
  },
  { 
    x: 3, 
    y: 65, 
    insight: 'INTEGRATED - All systems connected, real-time sync',
    label: 'Integrated'
  },
  { 
    x: 4, 
    y: 83, 
    insight: 'OPTIMIZED - Zero bottlenecks, predictive operations',
    label: 'Optimized'
  },
  { 
    x: 5, 
    y: 94, 
    insight: 'AUTONOMOUS - Infrastructure handles operations, you handle strategy',
    label: 'Autonomous'
  }
];

const METRICS = [
  { icon: Settings, value: '∞ workflows', label: 'Operational Scale', subtext: 'Zero bottlenecks', color: 'text-yellow-400' },
  { icon: Clock, value: '18 seconds', label: 'Response Time', subtext: 'Market standard: 4-6hrs', color: 'text-foreground' },
  { icon: Link, value: 'No limits', label: 'Integration Capability', subtext: 'Unified interface', color: 'text-emerald-400' },
  { icon: Shield, value: '99.97%', label: 'Reliability', subtext: '24/7 monitoring', color: 'text-red-400' }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover/95 border border-[#19A89D]/50 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[280px] backdrop-blur-md">
        <div className="text-2xl font-bold text-[#19A89D] mb-1">{data.y}%</div>
        <div className="text-[13px] text-muted-foreground leading-relaxed font-medium">
          {data.insight}
        </div>
        <div className="text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase mt-2">
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
    <section className="relative overflow-hidden bg-background text-foreground transition-colors duration-300 pt-24">
      {/* Background Image - Mountains */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <img 
            src={mountains} 
            alt="" 
            className="w-full h-full object-cover object-bottom opacity-20 mix-blend-overlay dark:mix-blend-normal dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
      </div>

      {/* subtle “paper / mist” gradient */}
      <div className="pointer-events-none absolute inset-0 z-10">
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
            href="https://cal.com/consul.ong/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
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
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#19A89D]">Outcome</div>
              <div className="mt-2">Less admin. Fewer handoffs. Faster decisions.</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#19A89D]">Deliverables</div>
              <div className="mt-2">Internal tools, integrations, bespoke automations.</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#19A89D]">Positioning</div>
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
        <div className="relative overflow-hidden rounded-[16px] border border-border bg-card shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] interface-card">
          
          {/* Window bar */}
          <div className="relative flex h-10 items-center justify-between border-b border-border bg-muted/20 px-4">
            {/* Mac Dots - Muted for professional look */}
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            
            <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-muted-foreground tracking-widest uppercase">
                Operational Intelligence
                </span>
            </div>
          </div>

          <div className="p-6">
            {/* Compact Metrics Row - Polished */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {METRICS.map((metric, i) => (
                <div key={i} className="bg-card/50 border border-border/40 rounded-xl p-4 h-[88px] flex flex-col justify-center relative group hover:border-[#19A89D]/40 hover:bg-[#19A89D]/5 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[26px] font-bold text-foreground leading-none tracking-tight">{metric.value}</span>
                    <metric.icon className={`w-4 h-4 ${metric.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold tracking-widest text-[#19A89D] uppercase transition-colors">{metric.label}</span>
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
                  </defs>
                  <XAxis dataKey="label" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ stroke: '#19A89D', strokeWidth: 1, strokeDasharray: '4 4', fill: 'transparent' }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="y" 
                    stroke="url(#lineGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#19A89D', strokeWidth: 2, r: 4, stroke: '#050505' }}
                    activeDot={{ r: 6, fill: '#19A89D', stroke: '#19A89D', strokeWidth: 8, strokeOpacity: 0.2 }}
                    animationDuration={2000}
                  />
                </LineChart>
              </ResponsiveContainer>
              
              {/* Chart Grid Lines (Visual only) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full border-b border-l border-border/20" />
                <div className="absolute bottom-1/3 w-full border-t border-border/20 border-dashed" />
                <div className="absolute bottom-2/3 w-full border-t border-border/20 border-dashed" />
              </div>
            </div>
            
            {/* Bottom Footer */}
            <div className="mt-6 flex items-center justify-center pt-4 border-t border-border/40">
                <span className="text-[14px] text-muted-foreground">Live production system</span>
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