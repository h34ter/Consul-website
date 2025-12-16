import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Zap, Clock, DollarSign, Target } from "lucide-react";
import { useState, useEffect } from "react";

const CHART_POINTS = [
  { id: 1, x: 50, y: 255, value: "15%", label: "Market Average", desc: "Only 15% of businesses have real automation infrastructure." },
  { id: 2, x: 300, y: 230, value: "28%", label: "Day 60", desc: "28% reduction in operational overhead within 60 days." },
  { id: 3, x: 550, y: 160, value: "47%", label: "Audit Complete", desc: "47% of business operations identified as fully automatable." },
  { id: 4, x: 700, y: 120, value: "52%", label: "System Live", desc: "52% faster client response times post-deployment." },
  { id: 5, x: 950, y: 60, value: "78%", label: "Month 3", desc: "78% of decisions now handled without human intervention." },
  { id: 6, x: 1150, y: 30, value: "94%", label: "Optimized", desc: "94% automation rate achieved. Business runs itself." },
];

export function Hero() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activePoint, setActivePoint] = useState(CHART_POINTS[3]); // Default to System Live

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
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Operations Intelligence
            </span>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
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

                  <div className="relative h-full p-10 flex flex-col">
                    {/* Header Title inside card - as seen in screenshot */}
                    <div className="mb-6">
                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/80 uppercase">Operations Intelligence</h3>
                    </div>

                    {/* Top Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {/* Card 1 */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg hover:border-[#00d4aa]/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-3.5 h-3.5 text-yellow-400" />
                          <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">Automation Coverage</span>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">94%</div>
                          <div className="text-[10px] text-[#00d4aa] font-medium mt-1">Previously: Manual</div>
                        </div>
                      </div>
                       {/* Card 2 */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg hover:border-[#00d4aa]/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-3.5 h-3.5 text-white/70" />
                          <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">Response Time</span>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">2.3m</div>
                          <div className="text-[10px] text-[#00d4aa] font-medium mt-1">Avg: 4-6 hours</div>
                        </div>
                      </div>
                      {/* Card 3 */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg hover:border-[#00d4aa]/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <DollarSign className="w-3.5 h-3.5 text-yellow-400" />
                          <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">Active Pipeline</span>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">$847K</div>
                          <div className="text-[10px] text-[#00d4aa] font-medium mt-1">MoM: +$340K</div>
                        </div>
                      </div>
                      {/* Card 4 */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between shadow-lg hover:border-[#00d4aa]/30 transition-colors">
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-3.5 h-3.5 text-red-400" />
                          <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase">System Status</span>
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">LIVE</div>
                          <div className="text-[10px] text-[#00d4aa] font-medium mt-1">99.97% uptime</div>
                        </div>
                      </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col shadow-2xl group/chart hover:border-[#00d4aa]/20 transition-colors">
                      <div className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase mb-4">Live Efficiency Trend</div>
                      
                      <div className="relative flex-1 w-full min-h-[200px]">
                         {/* Grid Lines */}
                         <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20 pointer-events-none">
                           {[...Array(24)].map((_, i) => (
                             <div key={i} className="border-[0.5px] border-white/[0.1] border-dashed" />
                           ))}
                         </div>

                         {/* Chart SVG */}
                         <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 300" preserveAspectRatio="none">
                           <defs>
                             <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                               <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.5" />
                               <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
                             </linearGradient>
                           </defs>
                           {/* Area */}
                           <path 
                             d="M0,280 C300,260 500,200 700,120 S 1000,40 1200,30 L 1200,300 L 0,300 Z" 
                             fill="url(#chartGradient)" 
                           />
                           {/* Line */}
                           <path 
                             d="M0,280 C300,260 500,200 700,120 S 1000,40 1200,30" 
                             fill="none" 
                             stroke="#00d4aa" 
                             strokeWidth="4"
                             strokeLinecap="round"
                             style={{ filter: "drop-shadow(0 0 10px rgba(0, 212, 170, 0.6))" }}
                           />
                           
                           {/* Interactive Points */}
                           {CHART_POINTS.map((point) => (
                             <g key={point.id} onClick={() => setActivePoint(point)} className="cursor-pointer group/point">
                               <circle 
                                 cx={point.x} 
                                 cy={point.y} 
                                 r="20" 
                                 fill="transparent" 
                                 className="outline-none"
                               />
                               <circle 
                                 cx={point.x} 
                                 cy={point.y} 
                                 r={activePoint.id === point.id ? 8 : 5} 
                                 fill={activePoint.id === point.id ? "#00d4aa" : "#0A0A0A"} 
                                 stroke="#00d4aa" 
                                 strokeWidth="2"
                                 className="transition-all duration-300" 
                               />
                               {activePoint.id === point.id && (
                                  <circle 
                                    cx={point.x} 
                                    cy={point.y} 
                                    r="12" 
                                    fill="none"
                                    stroke="#00d4aa" 
                                    strokeWidth="1"
                                    opacity="0.5"
                                    className="animate-ping" 
                                  />
                               )}
                             </g>
                           ))}
                           
                           {/* Dashed Vertical Line for Active Point */}
                           <line 
                             x1={activePoint.x} 
                             y1={activePoint.y} 
                             x2={activePoint.x} 
                             y2={activePoint.y + 60} 
                             stroke="white" 
                             strokeWidth="1" 
                             strokeDasharray="4 4" 
                             opacity="0.3" 
                             className="transition-all duration-500 ease-out"
                           />
                         </svg>

                         {/* Floating Card */}
                         <AnimatePresence mode="wait">
                           <motion.div 
                             key={activePoint.id}
                             initial={{ opacity: 0, y: 10, x: -10 }}
                             animate={{ opacity: 1, y: 0, x: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             transition={{ duration: 0.3 }}
                             style={{ 
                               left: `${(activePoint.x / 1200) * 100}%`,
                               top: `${(activePoint.y / 300) * 100}%`
                             }}
                             className="absolute z-10 -translate-x-1/2 translate-y-4"
                           >
                             <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 rounded-lg p-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] w-[260px]">
                                <div className="text-3xl font-bold text-[#00d4aa] mb-1">{activePoint.value}</div>
                                <div className="text-[11px] text-gray-300 leading-relaxed mb-3 font-medium">
                                  {activePoint.desc}
                                </div>
                                <div className="text-[9px] font-bold tracking-widest text-white/40 uppercase">
                                  {activePoint.label}
                                </div>
                             </div>
                           </motion.div>
                         </AnimatePresence>
                      </div>
                      
                      {/* Bottom Footer */}
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="text-[10px] font-mono text-white/60 tracking-tight">"The infrastructure satisfying clients."</div>
                          <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] shadow-[0_0_8px_#00d4aa] animate-pulse"></div>
                              <span className="text-[10px] font-bold text-[#00d4aa] tracking-wider uppercase">Live</span>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/10" />
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
