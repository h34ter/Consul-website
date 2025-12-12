import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#050505]/50 backdrop-blur-xl"
    >
      <Link href="/">
        <a className="text-xl font-bold tracking-tighter text-white/90 hover:text-white transition-colors select-none">
          CONSUL
        </a>
      </Link>

      <nav className="flex items-center gap-6">
        <a 
          href="#contact" 
          className="group relative inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
        >
          <span className="relative">
            Book Call
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}
