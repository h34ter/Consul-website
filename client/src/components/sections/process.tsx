import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Audit",
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
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A systematic approach to building invisible infrastructure.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 hidden md:block" />

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
                   <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-background border border-border z-20 ${
                      index % 2 === 0 ? "-right-[41px]" : "-left-[41px]"
                   }`} />
                  
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Number/Visual */}
                <div className="flex-1 flex justify-center md:justify-start">
                   <div className={`
                      w-32 h-32 md:w-40 md:h-40 rounded-full border border-border flex items-center justify-center
                      bg-background/50 backdrop-blur-sm relative group
                      ${index % 2 !== 0 && "md:ml-auto"}
                      ${index % 2 === 0 && "md:mr-auto"}
                   `}>
                      <span className="text-4xl md:text-5xl font-mono text-[#19A89D] transition-colors duration-500">
                        {step.number}
                      </span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: What to Expect */}
        <div className="mt-40 max-w-5xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">What to Expect</h2>
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {[
                    {
                        step: "Step 1",
                        title: "Discovery Call (30-60 minutes)",
                        desc: "We map your complete workflow and identify automation opportunities. No obligation."
                    },
                    {
                        step: "Step 2",
                        title: "Custom Proposal (1 week)",
                        desc: "Detailed breakdown of what we'll build, timeline, and investment required."
                    },
                    {
                        step: "Step 3",
                        title: "Rapid Build (2-3 weeks)",
                        desc: "First systems deployed and operational. We work fast."
                    }
                ].map((item, i) => (
                    <motion.div 
                        key={i} 
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ y: -5, borderColor: "rgba(25, 168, 157, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                        className="p-8 rounded-xl border border-border bg-muted/20 transition-all duration-300 cursor-default"
                    >
                        <div className="text-xs font-mono text-[#19A89D] mb-2 uppercase tracking-widest">{item.step}</div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>

      </div>
    </section>
  );
}
