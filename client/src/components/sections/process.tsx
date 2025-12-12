import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Free Audit",
    description: "We dive deep into your existing infrastructure to identify bottlenecks, inefficiencies, and automation opportunities.",
  },
  {
    number: "02",
    title: "Solution Design",
    subtitle: "The Blueprint",
    description: "We architect a bespoke automation ecosystem tailored to your specific operational needs and scalability goals.",
  },
  {
    number: "03",
    title: "Build & Launch",
    subtitle: "Execution",
    description: "Rapid development and deployment of production-grade systems with rigorous testing and seamless integration.",
  },
];

export function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
            How We Work
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto">
            A systematic approach to building invisible infrastructure.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4 relative">
                   <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-background border border-white/40 z-20 ${
                      index % 2 === 0 ? "-right-[41px]" : "-left-[41px]"
                   }`} />
                  
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Number/Visual */}
                <div className="flex-1 flex justify-center md:justify-start">
                   <div className={`
                      w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex items-center justify-center
                      bg-white/[0.02] backdrop-blur-sm relative group
                      ${index % 2 !== 0 && "md:ml-auto"}
                      ${index % 2 === 0 && "md:mr-auto"}
                   `}>
                      <span className="text-4xl md:text-5xl font-mono text-white/20 group-hover:text-white/50 transition-colors duration-500">
                        {step.number}
                      </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
