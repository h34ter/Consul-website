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
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#050505]/50 backdrop-blur-xl"
    >
      <Link href="/">
        <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={consulLogo} 
            alt="CONSUL" 
            className="h-[73px] w-auto object-contain"
          />
        </a>
      </Link>

      <nav className="flex items-center gap-6">
        <a 
          href="#contact" 
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-electric-teal)] text-black text-xs font-bold font-mono uppercase tracking-widest rounded-full hover:bg-[#2DD4BF] transition-all glow-teal"
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
