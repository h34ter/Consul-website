import { motion } from "framer-motion";
import { Activity, ArrowRight, BarChart3, Clock, DollarSign, FileText, Globe, Layers, Server, Zap } from "lucide-react";

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
      
      {/* 1. Header - Business Status (Not Tech Status) */}
      <div className="h-10 bg-[#111] border-b border-white/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
            </div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-l border-gray-800 pl-3 ml-1 hidden sm:block">
                Business Autopilot
            </span>
        </div>
        
        {/* The "Peace of Mind" Indicator */}
        <div className="flex items-center gap-2 bg-[#00C4B4]/10 px-3 py-1 rounded-full border border-[#00C4B4]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C4B4] animate-pulse"></div>
            <span className="text-[10px] font-bold text-[#00C4B4] tracking-wide">SYSTEM ACTIVE: MONEY SAVING MODE</span>
        </div>
      </div>

      {/* 2. Main Grid */}
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#050505]">
        
        {/* Card 1: Money Made/Saved */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-gray-400 font-medium">Est. Cost Savings</span>
                <span className="text-[10px] font-mono text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded">+12% vs last mo</span>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight flex items-baseline">
                $4,250<span className="text-gray-600 text-lg">.00</span>
            </div>
            <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[65%]"></div>
            </div>
        </div>

        {/* Card 2: Time Saved (The "Golf" Metric) */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
             <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-gray-400 font-medium">Hours Reclaimed</span>
                <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white tracking-tight flex items-baseline">
                38<span className="text-gray-600 text-lg">hrs</span>
            </div>
            <p className="mt-2 text-[10px] text-gray-500">Manual tasks eliminated this week.</p>
        </div>

        {/* Card 3: Action Volume (Proof of Work) */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
             <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-gray-400 font-medium">Client Interactions</span>
                <span className="text-xs text-[#00C4B4]">Auto-Pilot</span>
            </div>
            <div className="text-3xl font-bold text-white tracking-tight">142</div>
            <div className="flex -space-x-2 mt-3">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-800 border border-[#0f0f0f] flex items-center justify-center text-[8px] text-gray-400">
                        {String.fromCharCode(64+i)}
                    </div>
                ))}
                <div className="w-6 h-6 rounded-full bg-[#00C4B4] border border-[#0f0f0f] flex items-center justify-center text-[8px] text-black font-bold">+</div>
            </div>
        </div>

        {/* Bottom: The "Activity Feed" (Readable English) */}
        <div className="col-span-1 md:col-span-3 bg-[#0f0f0f] border border-white/5 rounded-lg p-4 flex flex-col md:flex-row gap-6">
            
            {/* The List of "Done Things" */}
            <div className="flex-1 space-y-3">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Recent Automated Actions</div>
                
                <div className="flex items-center gap-3 text-xs text-gray-300 border-b border-white/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4B4]"></div>
                    <span className="font-medium">Contract Sent</span>
                    <span className="text-gray-600 ml-auto">Just now</span>
                </div>
                
                <div className="flex items-center gap-3 text-xs text-gray-300 border-b border-white/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span className="font-medium">Lead Qualified (Project Alpha)</span>
                    <span className="text-gray-600 ml-auto">2m ago</span>
                </div>
                
                <div className="flex items-center gap-3 text-xs text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="font-medium">Invoice #1024 Paid</span>
                    <span className="text-gray-600 ml-auto">15m ago</span>
                </div>
            </div>

            {/* A Simple Visual Graph (Up and to the right) */}
            <div className="w-1/3 hidden md:flex items-end gap-1 h-24 opacity-50">
                {[20, 35, 30, 50, 45, 60, 55, 80, 70, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#00C4B4]" style={{height: `${h}%`, opacity: i/10 + 0.2}}></div>
                ))}
            </div>

        </div>

      </div>
      
      {/* Reflection Overlay for Glass effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
    </div>
  );
};
