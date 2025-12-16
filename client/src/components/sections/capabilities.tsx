import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const capabilities = [
  "One-click OAuth", "Vector Search", "Refund Automation", "Inventory Sync",
  "Webhook Integration", "RAG Knowledge Base", "Sentiment Analysis", "90% Automation Rate",
  "Real-time ETL", "GDPR Compliance", "Multi-Region", "Zero-Latency API"
];

export function Capabilities() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 1 or 2 random indices to highlight
      const count = Math.random() > 0.7 ? 2 : 1;
      const newIndices = [];
      for (let i = 0; i < count; i++) {
        newIndices.push(Math.floor(Math.random() * capabilities.length));
      }
      setActiveIndices(newIndices);

      // Clear highlight after a short duration
      setTimeout(() => {
        setActiveIndices([]);
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-sm text-muted-foreground font-mono uppercase tracking-widest mb-2">
          Platform Capabilities
        </h2>
        <h3 className="text-3xl font-bold text-foreground">
          Infinite Scalability
        </h3>
      </div>

      <div className="relative flex flex-col gap-6 w-full overflow-hidden mask-gradient-x">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-hidden">
           <motion.div
            className="flex whitespace-nowrap gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {[...capabilities, ...capabilities, ...capabilities, ...capabilities].map((cap, i) => {
              const originalIndex = i % capabilities.length;
              const isActive = activeIndices.includes(originalIndex);
              
              return (
                <CapabilityTag 
                  key={i} 
                  text={cap} 
                  isActive={isActive} 
                />
              );
            })}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
         <div className="relative flex overflow-hidden">
           <motion.div
            className="flex whitespace-nowrap gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 45,
            }}
          >
            {[...capabilities, ...capabilities, ...capabilities, ...capabilities].reverse().map((cap, i) => {
              const originalIndex = i % capabilities.length;
              const isActive = activeIndices.includes(originalIndex);

              return (
                <CapabilityTag 
                  key={`r2-${i}`} 
                  text={cap} 
                  isActive={isActive} 
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CapabilityTag({ text, isActive }: { text: string; isActive: boolean }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      animate={{
        borderColor: isActive ? "var(--color-electric-teal)" : "rgba(128,128,128,0.3)",
        boxShadow: isActive ? "0 0 20px rgba(0, 196, 180, 0.4)" : "none",
        color: isActive ? (theme === 'dark' ? "white" : "black") : "hsl(var(--muted-foreground))",
      }}
      transition={{ duration: 0.5 }}
      className="px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm text-sm font-mono uppercase tracking-wide whitespace-nowrap"
    >
      {text}
    </motion.div>
  );
}
