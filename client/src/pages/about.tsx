import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white/20">
      <Header />
      
      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          
          {/* Section 1: Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[48px] md:text-[72px] font-bold text-white mb-20 text-left tracking-tight"
          >
            About
          </motion.h1>

          {/* Section 2: Story */}
          <div className="space-y-16 mb-24">
            
            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-semibold text-white mb-5">
                The Problem We Saw
              </h2>
              <p className="text-[16px] md:text-[17px] font-normal leading-[1.8] text-white/85">
                Two years ago, the automation market was a graveyard of broken promises. Companies were buying subscriptions to twenty different SaaS platforms, connecting them with fragile Zapier workflows, and deploying chatbots that collapsed the moment a process required actual logic. The pitch was always the same: "automate your business." The reality was duct tape and manual workarounds.
                <br /><br />
                Businesses weren't getting automation. They were getting complexity with a dashboard.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-semibold text-white mb-5">
                What We Built Instead
              </h2>
              <p className="text-[16px] md:text-[17px] font-normal leading-[1.8] text-white/85">
                We came from algorithmic trading and systems architecture—environments where milliseconds matter and failure isn't an option. When we turned that lens toward standard business operations, the gap was obvious. Most companies don't need another tool. They need infrastructure that thinks.
                <br /><br />
                Real automation isn't about saving five minutes on an email. It's about eliminating the human bottleneck entirely. It's about systems that can ingest data, make decisions, route workflows, and execute actions without supervision. Systems that run while you sleep.
              </p>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-[20px] md:text-[24px] font-semibold text-white mb-5">
                How We Work Now
              </h2>
              <p className="text-[16px] md:text-[17px] font-normal leading-[1.8] text-white/85">
                We don't sell templates. We don't deploy pre-built solutions. Every system we build is custom-engineered for a specific operation—designed to handle the complexity that off-the-shelf software can't touch.
                <br /><br />
                We work with operators in real estate, trading, and high-volume businesses who understand that speed is leverage. The companies we partner with don't want to manage software. They want infrastructure that disappears into the background and makes their business unreachable.
                <br /><br />
                That's what we build. The invisible machines that power growth.
              </p>
            </motion.div>

          </div>

          {/* Section 3: Team List (Rich Layout) */}
          <div className="flex flex-col gap-8 mt-32 border-t border-white/10 pt-10">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">Leadership</h2>
            
             {/* Member 1 */}
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="group relative pb-8 border-b border-white/10 hover:border-[#19A89D]/50 transition-colors duration-500"
             >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-3 group-hover:text-[#19A89D] transition-colors duration-500">Hithin Phadarthi</h3>
                        <p className="text-sm font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Founder</p>
                    </div>
                    <div className="mb-1">
                        <a href="mailto:hithin@consul.ong" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group/link text-lg">
                            hithin@consul.ong
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-y-1 translate-x-1 text-[#19A89D]" />
                        </a>
                    </div>
                </div>
             </motion.div>

             {/* Member 2 */}
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group relative pb-8 border-b border-white/10 hover:border-[#19A89D]/50 transition-colors duration-500"
             >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-3 group-hover:text-[#19A89D] transition-colors duration-500">Sajad Sabah</h3>
                        <p className="text-sm font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80 transition-colors">Executive Partner</p>
                    </div>
                    <div className="mb-1">
                         <a href="mailto:sajad@consul.ong" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group/link text-lg">
                            sajad@consul.ong
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-y-1 translate-x-1 text-[#19A89D]" />
                        </a>
                    </div>
                </div>
             </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
