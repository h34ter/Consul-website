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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
            <span className="w-2 h-2 rounded-full bg-[#19A89D] animate-pulse"></span>
            <span className="text-xs text-gray-300 font-mono tracking-wider">SYSTEM V1.0 ONLINE</span>
        </motion.div>
        
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
                Start Automation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                View Documentation
            </button>
        </motion.div>
      </div>

      {/* 3. The "Product Peek" Interface */}
      {/* This creates the 3D tilted screen effect at the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 20 }}
        whileHover={{ rotateX: 0, scale: 1.02, transition: { duration: 0.5 } }}
        transition={{ duration: 1, delay: 0.8, type: "spring" }}
        className="relative z-20 w-full max-w-4xl px-4 mt-auto perspective-container"
      >
        <div className="relative w-full rounded-t-xl bg-[#0a0a0a] border border-white/10 border-b-0 shadow-2xl interface-card">
            
            {/* Fake Window Controls */}
            <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                <div className="ml-auto text-[10px] text-neutral-600 font-mono">consul-dashboard-v1.tsx</div>
            </div>

            {/* Dashboard Content - ResultScreen Component */}
            <div className="w-full h-[500px] md:h-[600px] bg-[#0c0c0c] relative overflow-hidden group">
                <div className="relative h-full w-full bg-[#0c0c0c] p-8">
                  {/* Subtle grid background */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Header */}
                  <div className="relative mb-8">
                    <div className="text-[11px] font-medium tracking-widest text-gray-500 uppercase">
                      Weekly Report
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-white">Everything handled.</div>
                    <div className="mt-1 text-sm text-gray-400">Last 7 days</div>
                  </div>

                  {/* The Checkmarks */}
                  <div className="relative space-y-4 mb-10">
                    <div className="flex items-start gap-3 text-gray-200">
                      <span className="flex-shrink-0 text-[#19A89D] text-lg">✓</span>
                      <span className="text-[15px]">Client inquiries routed automatically</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-200">
                      <span className="flex-shrink-0 text-[#19A89D] text-lg">✓</span>
                      <span className="text-[15px]">Proposals sent without you touching them</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-200">
                      <span className="flex-shrink-0 text-[#19A89D] text-lg">✓</span>
                      <span className="text-[15px]">Invoices paid, filed, reconciled</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-200">
                      <span className="flex-shrink-0 text-[#19A89D] text-lg">✓</span>
                      <span className="text-[15px]">Zero fires to put out</span>
                    </div>
                  </div>

                  {/* The Vague Chart (goes up) */}
                  <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[12px] font-medium text-gray-300">Output trend</span>
                      <span className="text-[11px] text-[#19A89D]">↑ Increasing</span>
                    </div>

                    {/* Simple bar chart (goes up smoothly) */}
                    <div className="flex items-end gap-1.5 h-20">
                      {[30, 40, 38, 50, 55, 60, 65, 70, 75, 85, 90, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                          className="flex-1 bg-gradient-to-t from-[#19A89D]/40 to-[#19A89D] rounded-t-sm opacity-90 hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>

                    <div className="mt-3 text-[10px] text-gray-500 text-center">
                      More done. Less effort.
                    </div>
                  </div>
                </div>
            </div>
            
            {/* Reflection Overlay for Glass effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
        </div>
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
