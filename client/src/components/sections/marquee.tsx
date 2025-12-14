import { motion } from "framer-motion";

const brands = [
  "Unlimited Leverage",
  "AlgoTrading Accelerator",
  "NinjaTrader",
  "Ambassador Immobilien",
  "Pickajet",
  "OpenAI",
  "Stripe",
  "Salesforce"
];

export function Marquee() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      {/* Using arbitrary values for mask-image as standard tailwind utility might need config */}
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap gap-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center group cursor-default"
            >
              <span className="text-2xl md:text-4xl font-bold tracking-tighter text-muted-foreground/20 group-hover:text-foreground transition-colors duration-500 select-none">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
