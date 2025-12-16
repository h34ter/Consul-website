import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, Link, Activity, LineChart } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'MARKET MONOPOLY',
    items: ['Category domination', 'Competitor displacement', 'Unfair advantage']
  },
  {
    icon: TrendingUp, 
    title: 'ZERO-TOUCH SCALE',
    items: ['Unlimited leverage', 'Zero headcount growth', 'Infinite capacity']
  },
  {
    icon: Zap,
    title: 'INSTANT EXECUTION',
    items: ['Real-time everything', 'First-mover advantage', 'Zero latency']
  },
  {
    icon: Link,
    title: 'TOTAL INTEGRATION',
    items: ['Unified command', 'Silo destruction', 'Complete visibility']
  },
  {
    icon: Activity, 
    title: 'ANTI-FRAGILE',
    items: ['Self-healing systems', 'Zero downtime', 'Crisis-proof']
  },
  {
    icon: LineChart,
    title: 'STRATEGIC INTELLIGENCE',
    items: ['Predatory insights', 'Market foresight', 'Perfect clarity']
  }
];

const scrollingTags = [
  "Market Capture", "Zero Headcount Growth", "Competitor Displacement", "Revenue Protection",
  "Instant Audits", "24/7 Execution", "Profit Maximization", "Asset Leverage",
  "Crisis Proofing", "Legacy Destruction", "Speed Supremacy", "Total Control"
];

export function Capabilities() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 1 or 2 random indices to highlight
      const count = Math.random() > 0.7 ? 2 : 1;
      const newIndices = [];
      for (let i = 0; i < count; i++) {
        newIndices.push(Math.floor(Math.random() * scrollingTags.length));
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
    <section className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Irreplaceable Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground font-light tracking-wide">
                The only competitive advantage you can buy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-32">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#00C4B4]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <cap.icon className="w-8 h-8 text-[#00C4B4] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-sm font-bold tracking-[0.1em] text-foreground/90 mb-6 uppercase">
                {cap.title}
              </h3>
              
              <ul className="space-y-3">
                {cap.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground/80 font-normal leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Tags */}
        <div className="relative flex flex-col gap-6 w-full overflow-hidden mask-gradient-x border-t border-white/5 pt-16">
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
              {[...scrollingTags, ...scrollingTags, ...scrollingTags, ...scrollingTags].map((cap, i) => {
                const originalIndex = i % scrollingTags.length;
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
              {[...scrollingTags, ...scrollingTags, ...scrollingTags, ...scrollingTags].reverse().map((cap, i) => {
                const originalIndex = i % scrollingTags.length;
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
      </div>
    </section>
  );
}

function CapabilityTag({ text, isActive }: { text: string; isActive: boolean }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      animate={{
        borderColor: isActive ? "#00C4B4" : "rgba(128,128,128,0.3)",
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
