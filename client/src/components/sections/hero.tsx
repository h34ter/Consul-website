import { motion } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    // Load Unicorn Studio Script
    const scriptId = "unicorn-studio-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
      script.onload = () => {
        // @ts-ignore
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          // @ts-ignore
          window.UnicornStudio.init();
          // @ts-ignore
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already there, trigger init just in case
      // @ts-ignore
      if (window.UnicornStudio) {
        // @ts-ignore
        window.UnicornStudio.init();
      }
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Unicorn Studio Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div 
          data-us-project="5eE8B0bJ3asdccGl0cz9" 
          style={{ width: "1080px", height: "1080px" }}
        ></div>
      </div>
      
      {/* Optional: Very subtle noise or gradient to prevent banding */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-0" />

      <div className="z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center w-full mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Apple-esque ease
          className="relative w-full flex flex-col items-center justify-center"
        >
          {/* Main Headline Text instead of Logo */}
           <h1 className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter select-none text-white pb-4 mix-blend-difference">
            CONSUL
          </h1>
          
          {/* Subtle Ambient Glow behind the text to lift it off the void */}
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
