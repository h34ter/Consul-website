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
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-primary/5 to-transparent pointer-events-none -z-10 opacity-50" />
    </div>
  );
};
