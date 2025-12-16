import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const scrollingPills = [
  "Real-Time Processing", "Parallel Workflows", "Automated Routing", "Usage Analytics",
  "HIPAA Compliance", "API Integration", "Session Management", "Audit Logging",
  "Custom Connectors", "Role-Based Access", "Webhook Support", "Data Export",
  "Predictive Intelligence", "Multi-Region Deployment", "Auto-Scaling Infrastructure",
  "Zero-Downtime Updates", "Complete Visibility", "Instant Revocation", "Fraud Detection",
  "Custom Dashboards"
];

export function Capabilities() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 1 or 2 random indices to highlight across all pills
      // We'll highlight them by index in the flattened list (though rows are separate)
      // For simplicity, we'll just pick random indices and apply logic in the row components
      
      // Let's just pass active indices down. We need a way to uniquely identify them.
      // Since we repeat the list, let's just pick random words from the source list to highlight.
      const count = Math.random() > 0.7 ? 2 : 1;
      const newIndices = [];
      for (let i = 0; i < count; i++) {
        newIndices.push(Math.floor(Math.random() * scrollingPills.length));
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
    <section className="py-24 bg-background relative overflow-hidden border-y border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Enterprise Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground font-light tracking-wide">
                Built for scale. Proven in production.
            </p>
        </div>

        <div className="relative flex flex-col gap-4 w-full overflow-hidden mask-gradient-x py-8">
          {/* Row 1: Left to Right */}
          <ScrollingRow items={scrollingPills} direction="left" duration={30} activeIndices={activeIndices} />
          
          {/* Row 2: Right to Left */}
          <ScrollingRow items={scrollingPills} direction="right" duration={35} activeIndices={activeIndices} />
          
          {/* Row 3: Left to Right */}
          <ScrollingRow items={scrollingPills} direction="left" duration={40} activeIndices={activeIndices} />
          
          {/* Row 4: Right to Left */}
          <ScrollingRow items={scrollingPills} direction="right" duration={45} activeIndices={activeIndices} />
        </div>
      </div>
    </section>
  );
}

function ScrollingRow({ items, direction, duration, activeIndices }: { items: string[], direction: "left" | "right", duration: number, activeIndices: number[] }) {
  const { theme } = useTheme();

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-4"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {[...items, ...items].map((item, i) => {
          // Determine original index to match activeIndices
          const originalIndex = i % items.length;
          const isActive = activeIndices.includes(originalIndex);

          return (
            <motion.div 
              key={i} 
              animate={{
                borderColor: isActive ? "#00C4B4" : "rgba(255,255,255,0.1)",
                backgroundColor: isActive ? "rgba(0,196,180,0.1)" : "rgba(255,255,255,0.05)",
                boxShadow: isActive ? "0 0 15px rgba(0, 196, 180, 0.3)" : "none",
                color: isActive ? "#fff" : "rgba(255,255,255,0.9)",
              }}
              transition={{ duration: 0.5 }}
              className="px-6 py-3 rounded-full border text-sm font-medium whitespace-nowrap backdrop-blur-sm"
            >
              {item}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
