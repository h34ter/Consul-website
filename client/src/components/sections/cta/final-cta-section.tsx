import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedHeadline } from "./animated-headline";
import { StaircaseVisual } from "./staircase-visual";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px',
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-background to-black overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <AnimatedHeadline isVisible={isVisible} />
        
        <StaircaseVisual isVisible={isVisible} />
        
        {/* Final CTA Button */}
        <div className="flex justify-center mt-20 lg:mt-32">
          <motion.button
            onClick={() => document.getElementById('audit-modal')?.click()} // Or trigger modal logic
            className="
              group relative flex items-center gap-3 px-12 py-5 
              bg-primary text-primary-foreground text-lg font-semibold rounded-xl
              shadow-[0_8px_24px_rgba(16,185,129,0.3)]
              hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)]
              hover:-translate-y-1 transition-all duration-300
            "
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              delay: 3.0, // Wait for staircase to finish
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            Start Building
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
