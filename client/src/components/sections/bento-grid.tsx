import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Lock, Settings2, Zap } from "lucide-react";

const projects = [
  {
    title: "EstateSync",
    category: "Real Estate Automation",
    description: "Full-stack property management synchronization engine processing $40M+ in assets daily.",
    icon: <Zap className="w-6 h-6" />,
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
    hasVisual: true,
  },
  {
    title: "NinjaTrader Licensing",
    category: "DRM Infrastructure",
    description: "Automated license verification and high-frequency trading bot protection system.",
    icon: <Lock className="w-6 h-6" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Operations Dashboard",
    category: "Agency OS",
    description: "Centralized command center for agency resource allocation and project tracking.",
    icon: <BarChart3 className="w-6 h-6" />,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

export function BentoGrid() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6"
        >
          Deployed Systems
        </motion.h2>
        <div className="w-full h-[1px] bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              ${project.colSpan} ${project.rowSpan}
              glass-card rounded-2xl p-8 relative group overflow-hidden flex flex-col justify-between
              hover:border-white/20 transition-all duration-500
            `}
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-white/80 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-white/90">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-[90%]">
                  {project.description}
                </p>
              </div>
            </div>

            {project.hasVisual && (
              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                 {/* Abstract visual placeholder */}
                 <div className="w-full h-full bg-gradient-to-tl from-white/20 to-transparent rounded-tl-[100px]" />
              </div>
            )}
            
            <div className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <span className="text-sm font-medium text-white border-b border-white pb-0.5">View Case Study</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
