import { motion } from "framer-motion";
import consulLogo from "@assets/consul_white_text_black_bg_(1)_1765557881293.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Watermark - Fixed & Massive */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[120vw] h-[120vw] md:w-[120vw] md:h-auto opacity-[0.03] mix-blend-overlay rotate-[-10deg] translate-x-10 translate-y-10">
           <img 
            src={consulLogo} 
            alt="CONSUL Watermark" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <h1 
            className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter select-none text-white pb-4"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
          >
            CONSUL
          </h1>
          {/* Subtle glow behind text - reduced opacity */}
          <div className="absolute inset-0 bg-white/5 blur-[120px] -z-10 rounded-full opacity-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 text-xs md:text-sm text-neutral-400 font-mono tracking-[0.2em] uppercase max-w-md text-center"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
        >
          Building the invisible infrastructure of success.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
