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

            <div className="w-full h-[500px] md:h-[600px] bg-[#0c0c0c] relative overflow-hidden group">
                <div className="relative h-full w-full bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-8">
                  {/* Subtle animated grid */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(25,168,157,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,168,157,0.4) 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Glow effect */}
                  <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-[#19A89D] rounded-full blur-[120px] opacity-[0.08]" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                          Your Operations
                        </div>
                        <div className="text-2xl font-bold text-white">Running on Autopilot</div>
                      </div>
                      <div className="flex items-center gap-2 bg-[#19A89D]/10 border border-[#19A89D]/20 rounded-full px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-[#19A89D] animate-pulse" />
                        <span className="text-xs font-medium text-[#19A89D]">All systems active</span>
                      </div>
                    </div>

                    {/* Main grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Card 1 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 backdrop-blur">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-xs text-gray-400">Client Inquiries</div>
                          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300">Routed automatically</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 w-[100%]" />
                          </div>
                          <span className="text-[10px] text-gray-500">100%</span>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 backdrop-blur">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-xs text-gray-400">Follow-ups</div>
                          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300">Sent on schedule</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-400 w-[100%]" />
                          </div>
                          <span className="text-[10px] text-gray-500">100%</span>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 backdrop-blur">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-xs text-gray-400">Proposals</div>
                          <div className="w-8 h-8 rounded-lg bg-[#19A89D]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[#19A89D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300">Generated & sent</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#19A89D] w-[100%]" />
                          </div>
                          <span className="text-[10px] text-gray-500">100%</span>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 backdrop-blur">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-xs text-gray-400">Invoicing</div>
                          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300">Paid & reconciled</div>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 w-[100%]" />
                          </div>
                          <span className="text-[10px] text-gray-500">100%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom status bar */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 backdrop-blur">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-xs text-gray-400">System Status:</div>
                          <div className="flex gap-4 text-xs">
                            <span className="text-gray-300">Handling repetitive work</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-300">Zero manual intervention</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-[#19A89D]">You focus on growth</span>
                          </div>
                        </div>
                      </div>
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
