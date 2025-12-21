import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-border bg-background relative overflow-hidden">
      {/* Floor Light Effect - Electric Teal - Subtler */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(0,196,180,0.1)_0%,transparent_70%)] pointer-events-none z-0 dark:mix-blend-screen mix-blend-normal" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Giant CTA */}
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-12"
          >
            Total automation. <br /> Engineered in stages.
          </motion.h2>
          
          <div className="flex flex-col items-center gap-4">
            <motion.a
                href="https://cal.com/consul.ong/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-foreground text-background text-lg font-medium tracking-wide overflow-hidden rounded-full"
            >
                <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <p className="text-sm text-muted-foreground/60 mt-2">
                We'll map your workflow and show you what's possible.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border">
          <div className="text-muted-foreground text-sm font-mono">
            © 2025 CONSUL. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <a href="mailto:info@consul.ong" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <span className="text-sm font-medium">Send us an email</span>
              <Mail className="w-5 h-5 group-hover:text-[#19A89D] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
