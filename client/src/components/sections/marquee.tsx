import { motion } from "framer-motion";

type Brand = {
  name: string;
  type: 'text' | 'image';
  src?: string;
};

const brands: Brand[] = [
  { name: "Unlimited Leverage", type: 'text' },
  { name: "AlgoTrading Accelerator", type: 'text' },
  { name: "NinjaTrader", type: 'image', src: "/brands/ninjatrader.png" },
  { name: "Ambassador Immobilien", type: 'text' },
  { name: "Pickajet", type: 'text' },
  { name: "OpenAI", type: 'image', src: "/brands/openai.png" },
  { name: "Stripe", type: 'text' },
  { name: "Slack", type: 'image', src: "/brands/slack.webp" }
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
              {brand.type === 'image' ? (
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  className="h-12 md:h-16 w-auto object-contain opacity-20 grayscale brightness-0 dark:invert transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:dark:invert-0 select-none"
                />
              ) : (
                <span className="text-2xl md:text-4xl font-bold tracking-tighter text-muted-foreground/20 group-hover:text-foreground transition-colors duration-500 select-none">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
