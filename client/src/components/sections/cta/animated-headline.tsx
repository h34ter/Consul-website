import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AnimatedHeadlineProps {
  isVisible: boolean;
}

export const AnimatedHeadline = ({ isVisible }: AnimatedHeadlineProps) => {
  const line1 = ["Total", "automation."];
  const line2 = ["Engineered", "in", "stages."];

  const wordAnimation = {
    hidden: { 
      y: 60, 
      opacity: 0, 
      filter: "blur(8px)", 
      scale: 0.9 
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <div className="relative z-20 text-center max-w-[1200px] mx-auto mb-12 lg:mb-24 px-4 flex flex-col items-center">
      
      {/* Scarcity Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C4B4]/30 bg-[#00C4B4]/10 text-[#00C4B4] text-xs font-mono uppercase tracking-widest"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C4B4] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C4B4]"></span>
        </span>
        1 slot remaining for Q1
      </motion.div>

      {/* Line 1 */}
      <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-6 mb-2 lg:mb-4 overflow-hidden">
        {line1.map((word, i) => (
          <motion.span
            key={`l1-${i}`}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold text-foreground tracking-tight leading-[1.1]"
            custom={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={wordAnimation}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Line 2 */}
      <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-6 mb-12 overflow-hidden">
        {line2.map((word, i) => (
          <motion.span
            key={`l2-${i}`}
            className="text-4xl md:text-6xl lg:text-[72px] font-bold text-primary tracking-tight leading-[1.1]"
            custom={i + line1.length} // Continue delay index
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={wordAnimation}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Button with same animation style */}
      <motion.button
        onClick={() => document.getElementById('audit-modal')?.click()}
        className="
            group relative flex items-center gap-3 px-8 py-4 
            bg-primary text-primary-foreground text-lg font-semibold rounded-full
            shadow-[0_8px_24px_rgba(16,185,129,0.3)]
            hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)]
            hover:-translate-y-1 transition-all duration-300
        "
        custom={line1.length + line2.length} // Delay after all words
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={wordAnimation}
      >
        Claim Discovery Call
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-primary/5 to-transparent pointer-events-none -z-10 opacity-50" />
    </div>
  );
};
