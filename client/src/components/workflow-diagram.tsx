import { motion } from "framer-motion";
import { 
  Database, 
  Globe, 
  Mail, 
  FileText, 
  ArrowDown, 
  ArrowRight, 
  Zap, 
  CheckCircle,
  Server,
  Filter
} from "lucide-react";

export function WorkflowDiagram({ type }: { type?: string }) {
  // Default to the Autonomous Deal-Flow System if no type specified or for now as it's the main example
  return (
    <div className="w-full bg-black/20 rounded-xl border border-white/5 p-6 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00C4B4] mb-2">Automated Operations Flow</div>
          <div className="text-lg font-medium text-white/90">Real-time inventory intelligence across 50+ sources</div>
        </div>

        {/* DATA INGESTION LAYER */}
        <div className="w-full max-w-3xl mb-12 relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono uppercase text-white/30 tracking-widest origin-center">
            Data Ingestion
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <SourceBox icon={<Globe className="w-4 h-4" />} label="Source 1" sub="API" delay={0.1} />
            <SourceBox icon={<Database className="w-4 h-4" />} label="Source 2" sub="Scraper" delay={0.2} />
            <SourceBox icon={<Mail className="w-4 h-4" />} label="Source 3" sub="Email" delay={0.3} />
            <SourceBox icon={<Server className="w-4 h-4" />} label="..." sub="" delay={0.4} />
            <SourceBox icon={<Filter className="w-4 h-4" />} label="50+" sub="Total" delay={0.5} highlight />
          </div>

          {/* Connecting Lines */}
          <div className="h-8 w-full flex justify-center relative mt-2">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-px bg-white/10 absolute top-0"
            />
          </div>
        </div>

        {/* NORMALIZATION ENGINE */}
        <div className="mb-12 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.7 }}
             className="w-[200px] h-[70px] bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center relative z-10 backdrop-blur-sm"
           >
             <div className="text-xs font-bold text-white mb-1">NORMALIZATION</div>
             <div className="text-[10px] text-white/60">ENGINE</div>
           </motion.div>
           
           <div className="absolute top-1/2 left-full ml-4 w-32 hidden md:block">
             <div className="text-[10px] italic text-white/40">← Standardizes formats</div>
           </div>

           <div className="h-8 w-full flex justify-center relative mt-2">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-px bg-white/10 absolute top-0"
            />
          </div>
        </div>

        {/* FILTERING LOGIC */}
        <div className="mb-12 relative">
           <motion.div
             initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
             animate={{ opacity: 1, rotate: 0, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.9 }}
             className="w-[100px] h-[100px] bg-[#00C4B4]/10 border border-[#00C4B4]/30 rotate-45 flex items-center justify-center relative z-10"
           >
             <div className="-rotate-45 text-center">
               <div className="text-[10px] font-bold text-[#00C4B4]">MATCH</div>
               <div className="text-[9px] text-[#00C4B4]/70">CRITERIA?</div>
             </div>
           </motion.div>

           <div className="absolute top-1/2 left-full ml-8 w-32 hidden md:block">
             <div className="text-[10px] italic text-white/40">← &lt; 50ms latency</div>
           </div>
           
           <div className="h-8 w-full flex justify-center relative mt-8">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="w-px bg-[#00C4B4]/50 absolute top-0"
            />
            <div className="absolute top-2 right-[-20px] text-[10px] text-[#00C4B4] font-bold">YES</div>
          </div>
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 1.1 }}
             className="w-[240px] bg-gradient-to-br from-[#00C4B4]/20 to-[#00C4B4]/5 border border-[#00C4B4]/50 rounded-xl p-4 flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,196,180,0.15)]"
           >
             <Zap className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />
             <div className="text-sm font-bold text-white mb-1">INSTANT ALERT</div>
             <div className="text-xs text-white/60">Deal captured in 18s</div>
           </motion.div>
        </div>

      </div>
    </div>
  );
}

function SourceBox({ icon, label, sub, delay, highlight }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`
        flex flex-col items-center justify-center p-3 rounded-lg border
        ${highlight 
          ? 'bg-[#00C4B4]/10 border-[#00C4B4]/30' 
          : 'bg-white/5 border-white/10'
        }
      `}
    >
      <div className={`mb-1 ${highlight ? 'text-[#00C4B4]' : 'text-white/60'}`}>{icon}</div>
      <div className="text-[10px] font-medium text-white/90">{label}</div>
      {sub && <div className="text-[9px] text-white/40">{sub}</div>}
    </motion.div>
  );
}
