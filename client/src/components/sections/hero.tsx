import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center pt-32 pb-20">
      
      {/* 1. Background Glows (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#19A89D] rounded-full blur-[180px] opacity-[0.12]"></div>
      </div>

      {/* 2. Main Text Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-16">
        
        {/* The "Power Statement" Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Automate your entire business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19A89D] to-teal-200">
            with Consul.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Stop patching together tools. We build the invisible infrastructure that runs your sales, operations, and finance on autopilot.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group">
                Start Automating
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
      </div>

      {/* 3. The "Centralized Dashboard" Visual */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative z-20 w-full max-w-6xl px-4 mt-auto"
      >
        <div className="relative w-full rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Fake Window Bar */}
            <div className="h-10 bg-[#111] border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-500">consul_workspace_v1.exe</div>
                <div className="w-10"></div>
            </div>

            {/* THE SCREEN CONTENT PLACEHOLDER */}
            <div className="w-full aspect-video bg-[#0c0c0c] relative flex items-center justify-center overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10" 
                     style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
                </div>

                {/* Visual Cue for "Centralized" */}
                <div className="text-center space-y-4 relative z-10">
                    <div className="inline-block p-6 rounded-full bg-[#19A89D]/10 border border-[#19A89D]/20 mb-4 animate-pulse">
                        <LayoutGrid className="w-16 h-16 text-[#19A89D]" />
                    </div>
                    <p className="text-gray-600 font-mono text-sm tracking-widest">[ CENTRALIZED DASHBOARD ]</p>
                </div>
                
                {/* Abstract UI Elements fading in background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-32 bg-white/5 rounded-lg border border-white/5 opacity-50"></div>
                    <div className="absolute top-10 right-10 w-64 h-32 bg-white/5 rounded-lg border border-white/5 opacity-50"></div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 rounded-lg border border-white/5 opacity-50"></div>
                </div>
            </div>
        </div>
      </motion.div>

    </section>
  );
}
