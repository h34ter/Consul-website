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
                <div className="relative h-full w-full overflow-hidden bg-[#0a0a0a]">
                  {/* base grid */}
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.28) 1px, transparent 1px)",
                      backgroundSize: "44px 44px",
                    }}
                  />

                  {/* subtle teal fog */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19A89D] blur-[140px] opacity-[0.10]" />

                  {/* BLURRED dashboard content */}
                  <div className="absolute inset-0 p-8 opacity-60 blur-[10px]">
                    <div className="grid h-full grid-cols-12 gap-4">
                      {/* row 1: small bento cards */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={`top-${i}`}
                          className="col-span-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <div className="mb-3 flex items-center gap-3">
                            <div className="h-6 w-6 rounded-lg bg-white/10" />
                            <div className="h-3 w-28 rounded bg-white/10" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-[85%] rounded bg-white/10" />
                            <div className="h-2 w-[70%] rounded bg-white/10" />
                            <div className="h-2 w-[60%] rounded bg-white/10" />
                          </div>
                        </div>
                      ))}

                      {/* row 2: medium panels */}
                      <div className="col-span-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="mb-3 h-3 w-44 rounded bg-white/10" />
                        <div className="grid grid-cols-2 gap-3">
                          {Array.from({ length: 4 }).map((_, j) => (
                            <div key={`m1-${j}`} className="rounded-xl border border-white/10 bg-black/20 p-3">
                              <div className="h-2 w-20 rounded bg-white/10" />
                              <div className="mt-2 h-2 w-28 rounded bg-white/10" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-span-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="mb-3 h-3 w-52 rounded bg-white/10" />
                        <div className="space-y-3">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <div key={`m2-${k}`} className="rounded-xl border border-white/10 bg-black/20 p-3">
                              <div className="flex items-center justify-between">
                                <div className="h-2 w-40 rounded bg-white/10" />
                                <div className="h-2 w-16 rounded bg-white/10" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* row 3: big chart block */}
                      <div className="col-span-12 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="h-3 w-40 rounded bg-white/10" />
                          <div className="h-3 w-24 rounded bg-white/10" />
                        </div>
                        <div className="h-[55%] rounded-xl border border-white/10 bg-black/20" />
                      </div>
                    </div>
                  </div>

                  {/* SHARP overlays: corner “green” indicators */}
                  <div className="pointer-events-none absolute inset-0 p-8">
                    {/* match same grid so dots sit “inside” boxes */}
                    <div className="grid h-full grid-cols-12 gap-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={`dot-top-${i}`} className="col-span-4 relative">
                          <div className="absolute bottom-4 right-4 h-2.5 w-2.5 rounded-full bg-[#19A89D] opacity-70 shadow-[0_0_12px_rgba(25,168,157,0.75)]" />
                        </div>
                      ))}

                      <div className="col-span-5 relative">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={`dot-m1-${i}`}
                            className="absolute"
                            style={{
                              right: 18,
                              bottom: 18 + i * 18,
                            }}
                          >
                            <div className="h-2.5 w-2.5 rounded-full bg-[#19A89D] opacity-55 shadow-[0_0_12px_rgba(25,168,157,0.6)]" />
                          </div>
                        ))}
                      </div>

                      <div className="col-span-7 relative">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={`dot-m2-${i}`}
                            className="absolute"
                            style={{
                              right: 18,
                              bottom: 18 + i * 18,
                            }}
                          >
                            <div className="h-2.5 w-2.5 rounded-full bg-[#19A89D] opacity-45 shadow-[0_0_12px_rgba(25,168,157,0.55)]" />
                          </div>
                        ))}
                      </div>

                      {/* big chart: only the line is sharp */}
                      <div className="col-span-12 relative overflow-hidden rounded-2xl">
                        {/* chart frame hint */}
                        <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-40" />

                        {/* the sharp “upward” line */}
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 1200 380"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id="consulLine" x1="0" x2="1" y1="0" y2="0">
                              <stop offset="0%" stopColor="#19A89D" stopOpacity="0.35" />
                              <stop offset="55%" stopColor="#19A89D" stopOpacity="0.75" />
                              <stop offset="100%" stopColor="#19A89D" stopOpacity="0.95" />
                            </linearGradient>

                            <linearGradient id="consulFill" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#19A89D" stopOpacity="0.20" />
                              <stop offset="100%" stopColor="#19A89D" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* faint grid lines */}
                          {Array.from({ length: 6 }).map((_, i) => (
                            <line
                              key={`hl-${i}`}
                              x1="0"
                              x2="1200"
                              y1={(i + 1) * 55}
                              y2={(i + 1) * 55}
                              stroke="rgba(255,255,255,0.04)"
                              strokeWidth="1"
                            />
                          ))}

                          {/* fill under line */}
                          <path
                            d="M 0 310
                               C 120 300, 210 285, 300 270
                               S 480 235, 600 210
                               S 780 170, 900 145
                               S 1080 105, 1200 85
                               L 1200 380 L 0 380 Z"
                            fill="url(#consulFill)"
                          />

                          {/* line */}
                          <path
                            d="M 0 310
                               C 120 300, 210 285, 300 270
                               S 480 235, 600 210
                               S 780 170, 900 145
                               S 1080 105, 1200 85"
                            fill="none"
                            stroke="url(#consulLine)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            style={{
                              filter: "drop-shadow(0 0 10px rgba(25,168,157,0.65))",
                            }}
                          />
                        </svg>

                        {/* “increasing” hint - optional, keep tiny */}
                        <div className="absolute right-6 top-6 text-[11px] font-mono text-[#19A89D] opacity-70">
                          ↗ increasing
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
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
