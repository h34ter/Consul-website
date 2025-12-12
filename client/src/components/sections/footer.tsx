import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-white/5 relative">
       {/* Ensure transparent bg so watermark shows through */}
      <div className="max-w-7xl mx-auto">
        {/* Giant CTA */}
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12"
          >
            Your infrastructure <br /> is waiting.
          </motion.h2>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black text-lg md:text-xl font-medium tracking-wide overflow-hidden rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Discovery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="text-neutral-500 text-sm font-mono">
            © 2025 CONSUL. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
