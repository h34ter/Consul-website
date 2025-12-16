import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { CaseStudyModal } from "../case-study-modal";
import { AuditModal } from "../audit-modal";

// --- Sub-components ---

const VisualFlow = ({ flow }: { flow: CaseStudy['visualFlow'] }) => {
  return (
    <div className="flex items-center justify-between w-full my-6">
      <FlowBox text={flow.before} />
      <FlowArrow />
      <FlowBox text={flow.process} highlight />
      <FlowArrow />
      <FlowBox text={flow.after} />
    </div>
  );
};

const FlowBox = ({ text, highlight = false }: { text: string; highlight?: boolean }) => (
  <div className={`
    w-[28%] h-[72px] rounded-lg border flex items-center justify-center p-3 text-center
    ${highlight 
      ? 'bg-[#00C4B4]/5 border-[#00C4B4]/20 shadow-[0_0_15px_-5px_rgba(0,196,180,0.15)]' 
      : 'bg-white/10 dark:bg-black/20 border-black/5 dark:border-white/10'
    }
  `}>
    <span className={`text-[11px] font-medium leading-tight ${highlight ? 'text-foreground' : 'text-muted-foreground'}`}>
      {text}
    </span>
  </div>
);

const FlowArrow = () => (
  <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground/40">
    <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">AI</span>
    <ArrowRight className="w-3 h-3" />
  </div>
);

const CaseStudyCard = ({ study, onClick }: { study: CaseStudy; onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className="
        group relative h-[440px] w-full bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-xl border border-black/5 dark:border-white/5 p-6 
        cursor-pointer overflow-hidden transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-[#00C4B4]/30
        hover:shadow-[#00C4B4]/5
      "
    >
      {/* 1. Category Badge - Stylized Shape */}
      <div className="flex items-center gap-3 mb-5 opacity-70 group-hover:opacity-100 transition-opacity">
        <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-inner overflow-hidden">
            <div className="absolute inset-0 bg-[#00C4B4]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm relative z-10">{study.emoji}</span>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          {study.category}
        </span>
      </div>

      {/* 2. Headline & Subtext */}
      <div className="mb-5">
        <h3 className="text-[22px] font-bold leading-[1.2] text-foreground/90 group-hover:text-foreground transition-colors mb-3">
          {study.painHook}
        </h3>
        {study.subtext && (
          <p className="text-[15px] leading-relaxed text-muted-foreground/80 font-normal">
            {study.subtext}
          </p>
        )}
      </div>

      {/* 3. Visual Flow */}
      <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <VisualFlow flow={study.visualFlow} />
      </div>

      {/* 4. Industry Tags */}
      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-5 mb-4 text-[12px] text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors">
        {study.industries.map((industry, i) => (
          <span key={i} className="flex items-center">
            {i > 0 && <span className="mr-2 opacity-30">•</span>}
            {industry}
          </span>
        ))}
      </div>

      {/* 5. Metrics */}
      <div className="flex items-center gap-3 text-[13px] font-medium text-muted-foreground group-hover:text-[#00C4B4]/90 transition-colors mt-auto">
        <Sparkles className="w-3 h-3 text-[#00C4B4]" />
        <span>{study.metrics.stat1}</span>
        <span className="opacity-30">•</span>
        <span>{study.metrics.stat2}</span>
      </div>

      {/* 6. Hover CTA */}
      <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#00C4B4]">
          See how it works
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B4]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

// --- Main Grid Component ---

export function CaseStudyGrid() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setIsModalOpen(true);
  };

  const handleRequestAudit = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsAuditModalOpen(true), 100);
  };

  return (
    <>
      <section id="work" className="py-32 px-4 max-w-[1240px] mx-auto">
        <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4"
          >
            Deployed Infrastructure
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-light"
          >
            Built for scale. Proven in production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CaseStudyCard 
                study={study} 
                onClick={() => handleOpenModal(study)} 
              />
            </motion.div>
          ))}
        </div>
      </section>

      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        caseStudy={selectedCaseStudy} 
        onRequestAudit={handleRequestAudit}
      />
      
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        caseStudy={selectedCaseStudy}
      />
    </>
  );
}
