import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Mail, FileSpreadsheet, Phone, Database, Globe, Server, AlertCircle, CheckCircle2 } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
          The Operational Difference
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Stop fighting your infrastructure. Start orchestrating it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Traditional Operations (The Villain) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] border border-white/5 p-8 md:p-12 flex flex-col h-[600px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-200">Traditional Operations</h3>
          </div>
          
          <div className="flex-grow relative flex items-center justify-center">
            {/* Messy Web Visual */}
            <div className="relative w-64 h-64">
              {/* Scattered Nodes */}
              <div className="absolute top-0 left-10 p-3 bg-neutral-800 rounded-lg text-neutral-500"><Mail className="w-5 h-5" /></div>
              <div className="absolute top-10 right-0 p-3 bg-neutral-800 rounded-lg text-neutral-500"><FileSpreadsheet className="w-5 h-5" /></div>
              <div className="absolute bottom-10 left-0 p-3 bg-neutral-800 rounded-lg text-neutral-500"><Phone className="w-5 h-5" /></div>
              <div className="absolute bottom-0 right-10 p-3 bg-neutral-800 rounded-lg text-neutral-500"><Database className="w-5 h-5" /></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-neutral-800 rounded-lg text-neutral-500 opacity-50"><Server className="w-5 h-5" /></div>

              {/* Broken Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M50 40 L180 50" stroke="#404040" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M50 180 L180 180" stroke="#404040" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M130 130 L180 50" stroke="#404040" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M50 40 L50 180" stroke="#404040" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                {/* Disconnected line */}
                <path d="M180 180 L150 120" stroke="#404040" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <circle cx="150" cy="120" r="2" fill="#ef4444" /> {/* Error dot */}
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-neutral-400 text-sm leading-relaxed">
              Manual data entry, fragmented tools, and human error. Systems don't talk to each other, leading to data silos and operational drag.
            </p>
          </div>
        </div>

        {/* Right Card: Consul Infrastructure (The Hero) */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-[#050505] border border-[#00C4B4]/20 p-8 md:p-12 flex flex-col h-[600px] group"
          whileHover="hover"
        >
          {/* Subtle Teal Glow Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#00C4B4]/10 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 bg-[#00C4B4]/10 rounded-lg text-[#00C4B4]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Consul Infrastructure</h3>
          </div>
          
          <div className="flex-grow relative flex items-center justify-center z-10">
            {/* Organized Hub Visual */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Central Hub */}
              <div className="absolute z-20 w-20 h-20 rounded-full bg-[#050505] border border-[#00C4B4] flex items-center justify-center shadow-[0_0_30px_rgba(0,196,180,0.2)]">
                <div className="w-12 h-12 rounded-full bg-[#00C4B4]/10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00C4B4]" />
                </div>
              </div>

              {/* Satellite Nodes */}
              <div className="absolute top-0 left-10 p-3 bg-[#00C4B4]/5 border border-[#00C4B4]/20 rounded-lg text-[#00C4B4]"><Mail className="w-5 h-5" /></div>
              <div className="absolute top-10 right-0 p-3 bg-[#00C4B4]/5 border border-[#00C4B4]/20 rounded-lg text-[#00C4B4]"><FileSpreadsheet className="w-5 h-5" /></div>
              <div className="absolute bottom-10 left-0 p-3 bg-[#00C4B4]/5 border border-[#00C4B4]/20 rounded-lg text-[#00C4B4]"><Phone className="w-5 h-5" /></div>
              <div className="absolute bottom-0 right-10 p-3 bg-[#00C4B4]/5 border border-[#00C4B4]/20 rounded-lg text-[#00C4B4]"><Database className="w-5 h-5" /></div>

              {/* Connected Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {/* Center is roughly 128, 128 */}
                {/* Node coords: TL(70, 20), TR(200, 60), BL(70, 200), BR(200, 220) approx centers */}
                <motion.line 
                  x1="128" y1="128" x2="70" y2="35" 
                  stroke="#00C4B4" strokeWidth="2" strokeOpacity="0.3"
                  variants={{ hover: { strokeOpacity: 1, strokeWidth: 3 } }}
                />
                <motion.line 
                  x1="128" y1="128" x2="210" y2="60" 
                  stroke="#00C4B4" strokeWidth="2" strokeOpacity="0.3"
                  variants={{ hover: { strokeOpacity: 1, strokeWidth: 3 } }}
                  transition={{ delay: 0.1 }}
                />
                <motion.line 
                  x1="128" y1="128" x2="70" y2="210" 
                  stroke="#00C4B4" strokeWidth="2" strokeOpacity="0.3"
                  variants={{ hover: { strokeOpacity: 1, strokeWidth: 3 } }}
                  transition={{ delay: 0.2 }}
                />
                <motion.line 
                  x1="128" y1="128" x2="210" y2="220" 
                  stroke="#00C4B4" strokeWidth="2" strokeOpacity="0.3"
                  variants={{ hover: { strokeOpacity: 1, strokeWidth: 3 } }}
                  transition={{ delay: 0.3 }}
                />

                {/* Pulsing Particles traveling along lines */}
                 <motion.circle r="3" fill="#00C4B4" opacity="0"
                    variants={{
                        hover: { 
                            opacity: [0, 1, 0],
                            cx: [128, 70],
                            cy: [128, 35],
                            transition: { repeat: Infinity, duration: 1.5, ease: "linear" }
                        }
                    }}
                 />
                 <motion.circle r="3" fill="#00C4B4" opacity="0"
                    variants={{
                        hover: { 
                            opacity: [0, 1, 0],
                            cx: [128, 210],
                            cy: [128, 60],
                            transition: { repeat: Infinity, duration: 1.5, delay: 0.5, ease: "linear" }
                        }
                    }}
                 />
                  <motion.circle r="3" fill="#00C4B4" opacity="0"
                    variants={{
                        hover: { 
                            opacity: [0, 1, 0],
                            cx: [128, 70],
                            cy: [128, 210],
                            transition: { repeat: Infinity, duration: 1.5, delay: 0.8, ease: "linear" }
                        }
                    }}
                 />
                 <motion.circle r="3" fill="#00C4B4" opacity="0"
                    variants={{
                        hover: { 
                            opacity: [0, 1, 0],
                            cx: [128, 210],
                            cy: [128, 220],
                            transition: { repeat: Infinity, duration: 1.5, delay: 0.2, ease: "linear" }
                        }
                    }}
                 />
              </svg>
            </div>
          </div>

          <div className="mt-6 relative z-10">
            <p className="text-neutral-300 text-sm leading-relaxed">
              Invisible orchestration. Zero manual work. Real-time sync. Your entire stack acts as a single, intelligent organism.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
