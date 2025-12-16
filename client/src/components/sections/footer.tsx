import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-0 pb-12 px-4 border-t-0 bg-transparent relative overflow-hidden">
      {/* Floor Light Effect - Electric Teal */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-[radial-gradient(ellipse_at_bottom,#00C4B4_0%,transparent_60%)] opacity-[0.15] pointer-events-none z-0 mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12">
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
