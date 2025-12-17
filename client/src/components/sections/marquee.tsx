import { motion } from "framer-motion";
import ninjaTraderLogo from "@/assets/brands/ninjatrader.png";
import openaiLogo from "@/assets/brands/openai.png";
import slackLogo from "@/assets/brands/slack.webp";
import stripeLogo from "@/assets/brands/stripe.png";
import eswLogo from "@/assets/brands/esw.png";
import chrono24Logo from "@/assets/brands/chrono24.png";
import zillowLogo from "@/assets/brands/zillow.png";

type Brand = {
  name: string;
  type: 'text' | 'image';
  src?: string;
  isWhiteLogo?: boolean;
  className?: string;
};

const brands: Brand[] = [
  { name: "OpenAI", type: 'image', src: openaiLogo, isWhiteLogo: true },
  { name: "Slack", type: 'image', src: slackLogo, isWhiteLogo: false, className: "h-[108px]" },
  { name: "Zillow", type: 'image', src: zillowLogo, isWhiteLogo: false, className: "h-[108px]" },
  { name: "Stripe", type: 'image', src: stripeLogo, isWhiteLogo: true, className: "h-[72px]" },
  { name: "Chrono24", type: 'image', src: chrono24Logo, isWhiteLogo: true, className: "h-[108px]" },
  { name: "AlgoTrading Accelerator", type: 'text', className: "font-bold text-muted-foreground/50 hover:text-muted-foreground" },
  { name: "Unlimited Leverage", type: 'text', className: "font-bold text-muted-foreground/50 hover:text-muted-foreground" },
  { name: "NinjaTrader", type: 'image', src: ninjaTraderLogo, isWhiteLogo: false },
  { name: "ESW", type: 'image', src: eswLogo, isWhiteLogo: true, className: "h-[90px]" },
  { name: "Ambassador Immobilien", type: 'text' },
  { name: "PickaJet", type: 'text' }
];

export function Marquee() {
  return (
    <section className="py-10 md:py-20 bg-background border-y border-white/[0.06] overflow-hidden">
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80,
          }}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center min-w-fit"
            >
              {brand.type === 'image' && brand.src ? (
                <img 
                  src={brand.src} 
                  alt={brand.name}
                  className={`${brand.className || "h-9"} w-auto object-contain opacity-35 grayscale brightness-0 invert hover:opacity-75 hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all duration-300`}
                />
              ) : (
                <span className={`text-xl md:text-3xl tracking-tight transition-colors duration-300 ${brand.className || "font-semibold text-muted-foreground/30 hover:text-muted-foreground/60"}`}>
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
