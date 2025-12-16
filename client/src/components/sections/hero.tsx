import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Clock, DollarSign, Target } from "lucide-react";
import { useState, useEffect } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, Dot } from "recharts";

const CHART_DATA = [
  { name: "Market Average", value: 15, desc: "Only 15% of businesses have real automation infrastructure." },
  { name: "Day 60", value: 28, desc: "28% reduction in operational overhead within 60 days." },
  { name: "Audit Complete", value: 47, desc: "47% of business operations identified as fully automatable." },
  { name: "System Live", value: 52, desc: "52% faster client response times post-deployment." },
  { name: "Month 3", value: 78, desc: "78% of decisions now handled without human intervention." },
  { name: "Optimized", value: 94, desc: "94% automation rate achieved. Business runs itself." },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/95 border border-[#00d4aa] rounded-lg p-4 shadow-2xl max-w-[260px]">
        <div className="text-3xl font-bold text-white mb-1">{data.value}%</div>
        <div className="text-[13px] text-gray-300 leading-relaxed mb-2 font-medium">
          {data.desc}
        </div>
        <div className="text-[11px] font-bold tracking-widest text-[#00d4aa] uppercase">
          {data.name}
        </div>
      </div>
    );
  }
  return null;
};

// Custom dot to match the design
const CustomDot = (props: any) => {
  const { cx, cy, stroke, payload } = props;
  
  return (
    <svg x={cx - 6} y={cy - 6} width={12} height={12} fill="none" viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="4" fill="#2a2d35" stroke="#00d4aa" strokeWidth="2" />
    </svg>
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
        className="relative z-20 w-full max-w-[1200px] px-4 mt-auto mx-auto perspective-container"
      >
        <div className="relative overflow-hidden rounded-[16px] border-2 border-[#00d4aa] bg-[#2a2d35] shadow-[0_20px_60px_rgba(0,0,0,0.5)] interface-card">
          
          {/* Window bar */}
          <div className="relative flex h-12 items-center justify-center border-b border-white/10 bg-white/5 px-6">
            <span className="text-sm font-bold text-white tracking-wide uppercase">
              System Monitor
            </span>
            {/* Mac Dots */}
            <div className="absolute right-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
          </div>

          <div className="p-8">
            {/* Header Title inside card */}
            <div className="mb-8">
                <h3 className="text-[18px] font-bold text-white uppercase tracking-wide">Operations Intelligence</h3>
            </div>

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {/* Card 1 */}
              <div className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-6 h-[140px] flex flex-col justify-between hover:border-[#00d4aa]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">Automation Coverage</span>
                </div>
                <div>
                  <div className="text-[48px] font-bold text-white tracking-tight leading-none">94%</div>
                  <div className="text-[13px] text-[#00d4aa] font-medium mt-2">Previously: Manual</div>
                </div>
              </div>
               {/* Card 2 */}
              <div className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-6 h-[140px] flex flex-col justify-between hover:border-[#00d4aa]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">Response Time</span>
                </div>
                <div>
                  <div className="text-[48px] font-bold text-white tracking-tight leading-none">2.3m</div>
                  <div className="text-[13px] text-[#00d4aa] font-medium mt-2">Avg: 4-6 hours</div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-6 h-[140px] flex flex-col justify-between hover:border-[#00d4aa]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-400" />
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">Active Pipeline</span>
                </div>
                <div>
                  <div className="text-[48px] font-bold text-white tracking-tight leading-none">$847K</div>
                  <div className="text-[13px] text-[#00d4aa] font-medium mt-2">MoM: +$340K</div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white/[0.08] border border-white/[0.15] rounded-xl p-6 h-[140px] flex flex-col justify-between hover:border-[#00d4aa]/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-red-400" />
                  <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">System Status</span>
                </div>
                <div>
                  <div className="text-[48px] font-bold text-white tracking-tight leading-none">LIVE</div>
                  <div className="text-[13px] text-[#00d4aa] font-medium mt-2">99.97% uptime</div>
                </div>
              </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex flex-col">
              <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6">Live Efficiency Trend</div>
              
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={CHART_DATA}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d4aa" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00d4aa" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'white', strokeWidth: 1, strokeDasharray: '4 4' }} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00d4aa" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      dot={<CustomDot />}
                      activeDot={{ r: 6, strokeWidth: 0, fill: "#00d4aa" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Bottom Footer */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="text-[14px] italic text-muted-foreground/60 tracking-tight">"The infrastructure satisfying clients."</div>
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00d4aa] shadow-[0_0_8px_#00d4aa] animate-pulse"></div>
                      <span className="text-[13px] font-medium text-white tracking-wide">Live</span>
                  </div>
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
