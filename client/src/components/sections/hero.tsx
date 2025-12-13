import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import dashboardImage from "@assets/generated_images/visual_workflow_automation_builder_dark_mode_ui.png";

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
        <div className="relative w-full rounded-t-xl bg-[#0a0a0a] border border-white/10 border-b-0 shadow-2xl interface-card">
            
            {/* Fake Window Controls */}
            <div className="h-8 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                <div className="ml-auto text-[10px] text-neutral-600 font-mono">consul-dashboard-v1.tsx</div>
            </div>

            {/* Dashboard Content Image */}
            <div className="w-full h-[300px] md:h-[500px] bg-[#0c0c0c] relative overflow-hidden group">
                <img 
                  src={dashboardImage} 
                  alt="Consul Dashboard Interface" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50" />
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
