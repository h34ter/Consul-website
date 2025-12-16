import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-border bg-background relative overflow-hidden">
      {/* Floor Light Effect - Electric Teal - Subtler */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(0,196,180,0.1)_0%,transparent_70%)] pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Giant CTA */}
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-12"
          >
            TOTAL AUTOMATION. <br /> ENGINEERED IN STAGES.
          </motion.h2>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-foreground text-background text-lg md:text-xl font-medium tracking-wide overflow-hidden rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Discovery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border">
          <div className="text-muted-foreground text-sm font-mono">
            © 2025 CONSUL. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
