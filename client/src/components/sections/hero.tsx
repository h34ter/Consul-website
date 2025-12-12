import { motion } from "framer-motion";
import consulLogo from "@assets/consul_white_text_black_bg_(1)_1765557881293.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Optional: Very subtle noise or gradient to prevent banding, but keeping it deep black as requested */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Apple-esque ease
          className="relative w-full flex justify-center"
        >
          {/* Main Logo */}
          <img 
            src={consulLogo} 
            alt="CONSUL" 
            className="w-[80vw] md:w-[50vw] max-w-3xl h-auto object-contain drop-shadow-2xl"
          />
          
          {/* Subtle Ambient Glow behind the logo to lift it off the void */}
          <div className="absolute inset-0 bg-white/5 blur-[80px] -z-10 rounded-full opacity-20 scale-75" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8 md:mt-12 text-xs md:text-sm text-neutral-400 font-mono tracking-[0.3em] uppercase max-w-md text-center"
        >
          Building the invisible infrastructure of success.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
