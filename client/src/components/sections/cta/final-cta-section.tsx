import { useRef, useState, useEffect } from "react";
import { AnimatedHeadline } from "./animated-headline";

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
      className="relative min-h-[60vh] w-full bg-gradient-to-b from-background to-black overflow-hidden py-24 lg:py-32 flex flex-col items-center justify-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <AnimatedHeadline isVisible={isVisible} />
      </div>
    </section>
  );
}
