import { motion } from "framer-motion";

// Import logos
import logoUnlimited from "@assets/stock_images/logo_for_unlimited_l_8bafaac6.jpg";
import logoAlgo from "@assets/stock_images/logo_for_algotrading_fb69295e.jpg";
import logoNinja from "@assets/stock_images/logo_for_ninjatrader_58995363.jpg";
import logoAmbassador from "@assets/stock_images/logo_for_ambassador__114b2b91.jpg";
import logoPickajet from "@assets/stock_images/logo_for_pickajet_pr_3985b169.jpg";
import logoOpenAI from "@assets/stock_images/openai_logo_black_an_e1145af1.jpg";
import logoStripe from "@assets/stock_images/stripe_logo_purple_3d411d9f.jpg";
import logoSalesforce from "@assets/stock_images/salesforce_cloud_log_89bef63a.jpg";

type Company = {
  name: string;
  logo: string;
};

const companies: Company[] = [
  { name: 'Unlimited Leverage', logo: logoUnlimited },
  { name: 'AlgoTrading Accelerator', logo: logoAlgo },
  { name: 'NinjaTrader', logo: logoNinja },
  { name: 'Ambassador Immobilien', logo: logoAmbassador },
  { name: 'Pickajet', logo: logoPickajet },
  { name: 'OpenAI', logo: logoOpenAI },
  { name: 'Stripe', logo: logoStripe },
  { name: 'Salesforce', logo: logoSalesforce }
];

export function Marquee() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-sm uppercase tracking-[0.05em] text-muted-foreground font-medium">
          Trusted Infrastructure
        </span>
      </div>

      {/* Marquee Container */}
      {/* Using arbitrary values for mask-image as standard tailwind utility might need config */}
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* Render twice for seamless loop */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 mr-[40px] md:mr-[60px] lg:mr-[80px] group cursor-default"
            >
              {/* Logo */}
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-[28px] md:h-[32px] lg:h-[36px] w-auto grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 dark:invert dark:grayscale dark:opacity-60 dark:group-hover:grayscale-0 dark:group-hover:opacity-100"
              />
              {/* Name */}
              <span className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* NDA Disclaimer */}
      <div className="mt-5 text-center px-4">
        <p className="text-[11px] font-normal text-muted-foreground/80 italic max-w-[700px] mx-auto">
          Many clients prefer confidentiality due to the depth of automation deployed. Public references available upon request.
        </p>
      </div>
    </section>
  );
}
