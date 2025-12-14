import { motion } from "framer-motion";
import ninjaTraderLogo from "@/assets/brands/ninjatrader.png";
import openaiLogo from "@/assets/brands/openai.png";
import slackLogo from "@/assets/brands/slack.webp";
import stripeLogo from "@/assets/brands/stripe.png";
import eswLogo from "@/assets/brands/esw.png";
import chrono24Logo from "@/assets/brands/chrono24.png";

type Brand = {
  name: string;
  type: 'text' | 'image';
  src?: string;
  isWhiteLogo?: boolean;
  className?: string;
};

const brands: Brand[] = [
  { name: "Unlimited Leverage", type: 'text' },
  { name: "AlgoTrading Accelerator", type: 'text' },
  { name: "NinjaTrader", type: 'image', src: ninjaTraderLogo, isWhiteLogo: false },
  { name: "Ambassador Immobilien", type: 'text' },
  { name: "Pickajet", type: 'text' },
  { name: "OpenAI", type: 'image', src: openaiLogo, isWhiteLogo: true },
  { name: "Stripe", type: 'image', src: stripeLogo, isWhiteLogo: true },
  { name: "Slack", type: 'image', src: slackLogo, isWhiteLogo: false },
  { name: "ESW", type: 'image', src: eswLogo, isWhiteLogo: true, className: "h-[3.2rem] md:h-[4rem]" }, // ~60% larger than base h-8 (2rem) -> 3.2rem
  { name: "Chrono24", type: 'image', src: chrono24Logo, isWhiteLogo: true }
];

export function Marquee() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap gap-32"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center min-w-fit"
            >
              {brand.type === 'image' && brand.src ? (
                <img 
                  src={brand.src} 
                  alt={brand.name}
                  className={`${brand.className || "h-8 md:h-10"} w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${
                    brand.isWhiteLogo 
                      ? '[filter:invert(1)_grayscale(1)] dark:[filter:grayscale(1)]' // White logos: Invert on Light, Normal on Dark
                      : '[filter:grayscale(1)] dark:[filter:invert(1)_grayscale(1)]' // Dark/Color logos: Normal on Light, Invert on Dark
                  }`}
                />
              ) : (
                <span className="text-xl md:text-3xl font-semibold tracking-tight text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300">
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
