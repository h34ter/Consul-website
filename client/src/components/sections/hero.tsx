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

          {/* The Dashboard Content (Blurred with selective clarity) */}
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0a0a0a] to-[#050505] overflow-hidden">
            
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* The Blurred Dashboard Layer */}
            <div className="absolute inset-0 blur-[8px] opacity-40 p-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Bento boxes (blurred) */}
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="h-3 w-24 bg-white/20 rounded mb-2" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* The Clear Elements (on top) */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Central Chart Area with Upward Line */}
              <div className="relative w-[70%] h-[60%]">
                
                {/* The Rising Line Chart (Clear) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid lines (subtle) */}
                  <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* The upward trending line (teal, glowing) */}
                  <path
                    d="M 0 180 Q 100 160, 150 140 T 250 100 T 350 60 L 400 40"
                    fill="none"
                    stroke="#19A89D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.9"
                    filter="drop-shadow(0 0 8px rgba(25, 168, 157, 0.6))"
                  />
                  
                  {/* Gradient fill under the line (subtle) */}
                  <path
                    d="M 0 180 Q 100 160, 150 140 T 250 100 T 350 60 L 400 40 L 400 200 L 0 200 Z"
                    fill="url(#lineGradient)"
                    opacity="0.15"
                  />
                  
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#19A89D" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#19A89D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                
              </div>
            </div>

            {/* Green Status Indicators (Bottom corners of bento boxes) */}
            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 pointer-events-none">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="relative">
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#19A89D] shadow-[0_0_8px_rgba(25,168,157,0.8)]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Vignette overlay (darkens edges) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            
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
