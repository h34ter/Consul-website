import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, FileText, Play, Settings } from "lucide-react";

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
        <WorkspacePreview />
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

const WorkspacePreview = () => {
  return (
    <div className="w-full bg-[#0a0a0a] rounded-t-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col interface-card h-[500px]">
      
      {/* 1. Header - Workspace Navigation */}
      <div className="h-14 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-4">
            <div className="flex gap-1.5 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            <span className="text-sm font-medium text-white tracking-wide">Consul Workspace</span>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
            <div className="px-4 py-1.5 rounded-md bg-[#00C4B4]/10 text-[#00C4B4] text-xs font-medium border border-[#00C4B4]/20 flex items-center gap-2 shadow-[0_0_10px_rgba(0,196,180,0.1)]">
                <Settings className="w-3 h-3" />
                Audit
            </div>
            <div className="px-4 py-1.5 rounded-md text-gray-400 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors">
                <FileText className="w-3 h-3" />
                Automation Plan
            </div>
            <div className="px-4 py-1.5 rounded-md text-gray-400 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors">
                <Play className="w-3 h-3" />
                Live
            </div>
        </div>
      </div>

      {/* 2. Main Content - Audit Flow */}
      <div className="flex-1 bg-[#050505] p-8 relative overflow-hidden flex items-center justify-center">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
        </div>

        {/* Process Flow Diagram */}
        <div className="relative z-10 w-full max-w-4xl flex items-center justify-between gap-4">
            
            {/* Step 1 */}
            <ProcessNode title="Lead Inquiry" status="active" />
            <Connector />
            
            {/* Step 2 */}
            <ProcessNode title="Qualification" status="warning" tag="Manual" subtext="Copying data between tools" />
            <Connector />
            
            {/* Step 3 */}
            <ProcessNode title="Proposal" status="delayed" tag="Delay" subtext="Waiting for approval" />
            <Connector />
            
            {/* Step 4 */}
            <ProcessNode title="Approval" status="default" />
            <Connector />
            
            {/* Step 5 */}
            <ProcessNode title="Invoice" status="default" />
            <Connector />
            
            {/* Step 6 */}
            <ProcessNode title="Delivery" status="default" isLast />
            
        </div>
      </div>
      
      {/* Reflection Overlay for Glass effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-t-xl"></div>
    </div>
  );
};

const ProcessNode = ({ title, status = "default", tag, subtext, isLast }: { title: string, status?: "default" | "active" | "warning" | "delayed", tag?: string, subtext?: string, isLast?: boolean }) => {
    return (
        <div className="relative group">
            <div className={`
                w-32 h-20 rounded-xl border backdrop-blur-sm flex flex-col items-center justify-center gap-1 transition-all duration-300
                ${status === "active" ? "bg-[#00C4B4]/5 border-[#00C4B4]/30 shadow-[0_0_15px_rgba(0,196,180,0.1)]" : 
                  status === "warning" || status === "delayed" ? "bg-red-500/5 border-red-500/20" : 
                  "bg-white/[0.02] border-white/10 hover:border-white/20"}
            `}>
                <span className={`text-xs font-medium ${status === "active" ? "text-[#00C4B4]" : "text-gray-300"}`}>{title}</span>
                
                {tag && (
                    <span className="px-1.5 py-0.5 rounded-[4px] bg-red-500/10 text-red-400 text-[9px] font-medium border border-red-500/20">
                        {tag}
                    </span>
                )}
            </div>

            {/* Hover Annotation */}
            {subtext && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-[10px] text-gray-500 bg-black/80 px-2 py-1 rounded border border-white/10 backdrop-blur-md">
                        {subtext}
                    </div>
                </div>
            )}
        </div>
    )
}

const Connector = () => (
    <div className="flex-1 h-[1px] bg-white/10 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/20"></div>
    </div>
)
