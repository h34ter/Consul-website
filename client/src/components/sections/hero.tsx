import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center pt-32 pb-0">
      
      {/* 1. Background Gradient Glow (The "Horizon") */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Top light source */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#19A89D] rounded-full blur-[150px] opacity-[0.15]"></div>
          
          {/* Bottom horizon glow behind the dashboard */}
          <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-gradient-to-t from-[#19A89D]/20 to-transparent blur-[80px]"></div>
      </div>

      {/* 2. Main Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mb-12 md:mb-16">
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl"
        >
          CONSUL
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Building the invisible infrastructure of success. <br/>
          <span className="text-gray-500 text-sm mt-2 block font-mono">Automated workflows. Algorithmic precision. Zero latency.</span>
        </motion.p>
        
      </div>

      {/* 3. The "Product Peek" Interface */}
      {/* This creates the 3D tilted screen effect at the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 20 }}
        whileHover={{ rotateX: 0, scale: 1.02, transition: { duration: 0.5 } }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        className="relative z-20 w-full max-w-6xl px-4 mt-auto perspective-container"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl interface-card">
          
          {/* Window bar */}
          <div className="flex h-10 items-center justify-between border-b border-white/5 bg-[#111] px-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Operations Dashboard
            </span>
            <div className="w-16" />
          </div>

            <div className="w-full h-[500px] md:h-[600px] bg-[#0c0c0c] relative overflow-hidden group">
                <div className="relative h-full w-full overflow-hidden bg-[#070707]">
                  {/* Background grid (cleaner + lighter spacing) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />

                  {/* Subtle teal “wash” behind content (not a blob) */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19A89D] blur-[160px] opacity-[0.08]" />

                  {/* Optional film grain (premium) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.18) 0, transparent 35%), radial-gradient(circle at 80% 40%, rgba(255,255,255,0.10) 0, transparent 40%), radial-gradient(circle at 30% 90%, rgba(255,255,255,0.08) 0, transparent 45%)",
                    }}
                  />

                  <div className="relative h-full p-8">
                    {/* Top row: more boxes (still same vibe) */}
                    <div className="grid grid-cols-12 gap-4">
                      {/* 4 cards instead of 3 (denser, better “more info”) */}
                      {[
                        { tint: "bg-[#19A89D]/20", dot: "bg-[#19A89D]" },
                        { tint: "bg-white/10", dot: "bg-white/35" },
                        { tint: "bg-white/10", dot: "bg-white/35" },
                        { tint: "bg-white/10", dot: "bg-white/35" },
                      ].map((c, i) => (
                        <div
                          key={i}
                          className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.55)]"
                        >
                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <div className={`h-7 w-7 rounded-lg ${c.tint}`} />
                              <div className="h-2 w-2 rounded-full opacity-80 shadow-[0_0_10px_rgba(25,168,157,0.55)]" style={{ backgroundColor: i === 0 ? "#19A89D" : "rgba(255,255,255,0.35)" }} />
                            </div>

                            <div className="mt-4 space-y-2">
                              <div className="h-2.5 w-24 rounded bg-white/15" />
                              <div className="h-2 w-32 rounded bg-white/10" />
                              <div className="h-2 w-20 rounded bg-white/10" />
                            </div>

                            {/* tiny “status strip” at bottom-right (your ask: green thing in corner) */}
                            <div className="mt-4 flex justify-end">
                              <div className="h-1 w-10 rounded-full bg-[#19A89D]/35" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Big chart card */}
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_22px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* inner chart grid */}
                      <div className="relative h-[260px]">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-[0.12]"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
                            backgroundSize: "56px 56px",
                          }}
                        />

                        {/* label (minimal, optional) */}
                        <div className="absolute left-6 top-5 text-[10px] font-mono uppercase tracking-[0.25em] text-white/35">
                          Output trend
                        </div>

                        {/* Clean up-trending line (crisper than before) */}
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

                          {/* fill */}
                          <path
                            d="M0,240 C120,235 220,225 320,212
                               C420,198 520,182 620,168
                               C720,154 820,140 920,118
                               C1020,96 1120,78 1200,62
                               L1200,300 L0,300 Z"
                            fill="url(#consulFill)"
                          />

                          {/* stroke */}
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

                        {/* Bottom “activity bars” faint (adds info density without text) */}
                        <div className="absolute bottom-5 left-6 right-6 flex items-end gap-2 opacity-60">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-sm bg-white/10"
                              style={{ height: `${12 + (i % 6) * 8}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Slight vignette to make it sit in hero nicely */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                  </div>
                </div>
            </div>
        </div>
        
        {/* Subtle fade at bottom */}
        <div className="-mt-10 h-10 w-full bg-gradient-to-b from-transparent to-[#050505]" />
      </motion.div>
      
      {/* CSS for 3D Perspective */}
      <style>{`
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
