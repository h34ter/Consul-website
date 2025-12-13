import { motion } from "framer-motion";
import { Activity, ArrowRight, BarChart3, Cpu, Database, FileText, Globe, Layers, Server, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col items-center pt-32 pb-0">
      
      {/* 1. Background Gradient Glow (The "Horizon") */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Top light source */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#00C4B4] rounded-full blur-[150px] opacity-[0.15]"></div>
          
          {/* Bottom horizon glow behind the dashboard */}
          <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-gradient-to-t from-[#00C4B4]/20 to-transparent blur-[80px]"></div>
      </div>

      {/* 2. Main Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mb-12 md:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
            <span className="w-2 h-2 rounded-full bg-[#00C4B4] animate-pulse"></span>
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
        <DashboardPreview />
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

const DashboardPreview = () => {
  return (
    <div className="w-full bg-[#0a0a0a] rounded-t-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col interface-card">
      
      {/* 1. Top Bar - The "OS" Header */}
      <div className="h-8 bg-[#111] border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
        </div>
        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden md:block">consul_system_monitor_v2.4</div>
        <div className="flex gap-3 text-[10px] text-gray-500 font-mono ml-auto md:ml-0">
            <span>CPU: 12%</span>
            <span>MEM: 4.2GB</span>
            <span className="text-[#00C4B4]">ONLINE</span>
        </div>
      </div>

      {/* 2. Main Content Area - Grid Layout */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#050505]">
        
        {/* Card 1: Revenue / High Value Metric */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-4 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-blue-500/10 rounded-md">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-xs font-mono text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+24.5%</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">$14,250</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Daily Processing Vol</div>
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 opacity-10">
                 <svg width="100" height="40" viewBox="0 0 100 40"><path d="M0 40 L10 30 L30 35 L50 20 L70 25 L100 5" fill="none" stroke="white" strokeWidth="2"/></svg>
            </div>
        </div>

        {/* Card 2: Automation Velocity */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-4 relative overflow-hidden group hover:border-white/10 transition-colors">
             <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-purple-500/10 rounded-md">
                    <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">HIGH LOAD</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">842</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Active Workflows</div>
             {/* Simple progress bars to look busy */}
             <div className="mt-3 space-y-1">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[70%]"></div></div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[45%]"></div></div>
             </div>
        </div>

        {/* Card 3: System Health (The "Teal" Brand Card) */}
        <div className="bg-[#0f0f0f] border border-[#00C4B4]/20 rounded-lg p-4 relative overflow-hidden group hover:border-[#00C4B4]/40 transition-colors shadow-[0_0_20px_rgba(0,196,180,0.05)]">
             <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-[#00C4B4]/10 rounded-md">
                     <Activity className="w-4 h-4 text-[#00C4B4]" />
                </div>
                <div className="h-2 w-2 rounded-full bg-[#00C4B4] animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Uptime (30d)</div>
             <div className="mt-3 flex gap-1">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-6 w-1 rounded-sm bg-[#00C4B4]/40 hover:bg-[#00C4B4] transition-colors"></div>
                ))}
             </div>
        </div>

        {/* Bottom Section - The "Live Log" & Complex Chart */}
        <div className="col-span-1 md:col-span-3 h-48 bg-[#0f0f0f] border border-white/5 rounded-lg relative overflow-hidden flex">
            
            {/* Left: The Terminal Log (Shows "Things Happening") */}
            <div className="w-full md:w-1/3 border-r border-white/5 p-4 font-mono text-[10px] text-gray-400 space-y-2 overflow-hidden hidden md:block">
                <div className="text-gray-600 mb-2 uppercase tracking-widest">System Log</div>
                <div className="flex gap-2"><span className="text-[#00C4B4]">[10:42:01]</span> <span>Connection established: UBS_RFQ_GATEWAY</span></div>
                <div className="flex gap-2"><span className="text-[#00C4B4]">[10:42:05]</span> <span>Parsing incoming payload (24kb)...</span></div>
                <div className="flex gap-2"><span className="text-blue-400">[10:42:08]</span> <span>Lead_9921 qualified - CRM Update</span></div>
                <div className="flex gap-2"><span className="text-[#00C4B4]">[10:42:12]</span> <span>Executing Order: NQ 18450.25 LIMIT</span></div>
                <div className="flex gap-2 opacity-50"><span className="text-gray-500">[10:42:15]</span> <span>Syncing generic nodes...</span></div>
            </div>

            {/* Right: The Complex Chart Area */}
            <div className="flex-1 relative hidden sm:block">
                 {/* Grid Lines */}
                 <div className="absolute inset-0 z-0" 
                      style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.3}}>
                 </div>
                 
                 {/* The Chart Path (Simulated CSS) */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end px-4 gap-1">
                    {[40, 65, 45, 70, 55, 85, 60, 75, 50, 90, 80, 95, 70, 60, 85, 100, 75, 60, 85, 45, 65, 55, 70, 60, 80, 90, 75, 60, 50, 40].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[#00C4B4]/20 to-[#00C4B4] opacity-80 rounded-t-sm hover:opacity-100 transition-opacity" style={{height: `${h}%`}}></div>
                    ))}
                 </div>
                 
                 <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-500 bg-black/50 px-2 py-1 rounded border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Latency: 12ms
                 </div>
            </div>
        </div>

      </div>
      
      {/* Reflection Overlay for Glass effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
    </div>
  );
};
