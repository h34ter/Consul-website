import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import consulLogo from "@assets/consul_white_text_black_bg_(1)_1765557881293.png";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? 'scrolled' : ''} flex items-center justify-between px-6 py-4`}
    >
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={consulLogo} 
            alt="CONSUL" 
            className="h-[73px] w-auto object-contain dark:filter-none filter invert hue-rotate-180"
          />
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="/about" className="text-xs font-bold font-mono uppercase tracking-widest text-muted-foreground hover:text-[#19A89D] transition-colors border-b border-[#19A89D]/50 hover:border-[#19A89D] pb-0.5">
          About Us
        </Link>
        <a 
          href="https://cal.com/consul.ong/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-xs font-bold font-mono uppercase tracking-widest rounded-full hover:bg-[var(--color-electric-teal)] transition-colors"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book Call
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </nav>
    </motion.header>
  );
}
