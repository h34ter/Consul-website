import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import consulLogo from "@assets/consul_white_text_black_bg_(1)_1765557881293.png";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-6 py-4 border-b border-border/5 bg-background/50 backdrop-blur-xl"
    >
      <div /> {/* Spacer for left side */}
      
      <div className="flex justify-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={consulLogo} 
              alt="CONSUL" 
              className="h-[84px] w-auto object-contain dark:filter-none filter invert hue-rotate-180"
            />
        </Link>
      </div>

      <div className="flex justify-end">
        <nav className="flex items-center gap-6">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-xs font-bold font-mono uppercase tracking-widest rounded-full hover:bg-[var(--color-electric-teal)] transition-colors"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Call
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
