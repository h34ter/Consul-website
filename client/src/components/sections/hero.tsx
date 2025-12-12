import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_abstract_mesh_gradient_background.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Removed opaque background layers to let global watermark show through */}
        <div className="absolute inset-0 bg-transparent z-10" /> 
        <img 
          src={heroBg} 
          alt="Abstract Mesh" 
          className="w-full h-full object-cover opacity-40 blur-[1px]" 
        />
        {/* Subtle dark fade at bottom only */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20" />
      </div>

      <div className="z-30 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold tracking-tighter select-none text-white pb-4">
            CONSUL
          </h1>
          {/* Subtle glow behind text - reduced opacity */}
          <div className="absolute inset-0 bg-white/5 blur-[120px] -z-10 rounded-full opacity-30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 text-xs md:text-sm text-[#888] font-mono tracking-[0.2em] uppercase max-w-md text-center"
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
