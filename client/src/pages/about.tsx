import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";

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

          {/* Section 3: Team Cards */}
          <div className="flex flex-col md:flex-row gap-12 justify-center mt-20">
             
             {/* Card 1 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="premium-card group"
             >
                <div className="card-content">
                    <div className="flex flex-col">
                        <h3 className="text-[28px] font-bold text-white mb-2 drop-shadow-md">Hithin Phadarthi</h3>
                        <p className="text-[15px] font-medium text-white/70 uppercase tracking-widest">Founder</p>
                    </div>
                    <div>
                        <a href="mailto:hithin@consul.com" className="premium-email-link">
                            hithin@consul.com
                        </a>
                    </div>
                </div>
             </motion.div>

             {/* Card 2 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="premium-card group"
             >
                <div className="card-content">
                    <div className="flex flex-col">
                        <h3 className="text-[28px] font-bold text-white mb-2 drop-shadow-md">Sajad Sabah</h3>
                        <p className="text-[15px] font-medium text-white/70 uppercase tracking-widest">Executive Partner</p>
                    </div>
                    <div>
                         <a href="mailto:sajad@consul.com" className="premium-email-link">
                            sajad@consul.com
                        </a>
                    </div>
                </div>
             </motion.div>

          </div>

        </div>
      </main>

      <Footer />
      
      <style>{`
        .premium-card {
            width: 100%;
            max-width: 380px;
            height: 240px;
            position: relative;
            overflow: hidden;
            border-radius: 16px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        
        .premium-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                135deg,
                transparent 0%,
                rgba(0, 212, 170, 0.1) 25%,
                rgba(0, 212, 170, 0.2) 50%,
                rgba(0, 212, 170, 0.1) 75%,
                transparent 100%
            );
            animation: shimmer 3s ease-in-out infinite;
            pointer-events: none;
        }

        .premium-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0, 212, 170, 0.3);
            border-color: rgba(0, 212, 170, 0.3);
        }

        .premium-card:hover::before {
            animation-duration: 2s;
        }

        .premium-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%);
            pointer-events: none;
        }

        .card-content {
            position: relative;
            z-index: 1;
            padding: 40px 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        .premium-email-link {
            font-size: 15px;
            font-weight: 500;
            color: #00d4aa;
            text-decoration: none;
            padding: 12px 20px;
            background: rgba(0, 212, 170, 0.1);
            border: 1px solid rgba(0, 212, 170, 0.3);
            border-radius: 8px;
            display: inline-block;
            transition: all 0.3s ease;
        }

        .premium-email-link:hover {
            background: rgba(0, 212, 170, 0.15);
            border: 1px solid rgba(0, 212, 170, 0.5);
            transform: translateY(-2px);
        }

        @keyframes shimmer {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
