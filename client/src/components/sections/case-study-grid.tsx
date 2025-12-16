import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { CaseStudyModal } from "../case-study-modal";
import { AuditModal } from "../audit-modal";

// --- Sub-components ---

const VisualFlow = ({ flow }: { flow: CaseStudy['visualFlow'] }) => {
  return (
    <div className="flex items-center justify-between w-full my-12 px-2">
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
    w-[140px] h-[75px] rounded-lg border flex items-center justify-center p-3 text-center transition-all duration-300
    ${highlight 
      ? 'bg-primary/5 border-primary/20 shadow-[0_0_15px_-5px_rgba(0,196,180,0.15)]' 
      : 'bg-white/[0.04] border-white/[0.15]'
    }
  `}>
    <span className={`text-[14px] font-medium leading-tight ${highlight ? 'text-white' : 'text-white'}`}>
      {text}
    </span>
  </div>
);

const FlowArrow = () => (
  <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground/40 px-2">
    <span className="text-[10px] font-mono uppercase tracking-wider opacity-60">AI</span>
    <ArrowRight className="w-3 h-3" />
  </div>
);

const CaseStudyCard = ({ study, onClick }: { study: CaseStudy; onClick: () => void }) => {
  const [headline, subheadline] = study.headline.split('\n');

  return (
    <motion.div
      onClick={onClick}
      className="
        group relative h-[420px] w-full bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 p-8
        cursor-pointer overflow-hidden transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-[#19A89D]/30
        hover:shadow-[#19A89D]/5
      "
    >
      {/* 1. Category Badge (Emoji Only) */}
      <div className="mb-3 text-2xl group-hover:scale-110 transition-transform duration-300 origin-left">
        {study.emoji}
      </div>

      {/* 2. Main Headline */}
      <div className="mb-4">
        <h3 className="text-[26px] font-bold leading-tight text-white tracking-tight group-hover:text-white transition-colors">
          {study.painHook}
        </h3>
      </div>

      {/* 3. Subheadline (2 lines) */}
      <div className="mb-6 max-w-[90%] space-y-1">
        <p className="text-[16px] text-white font-normal leading-relaxed">
            {headline}
        </p>
        {subheadline && (
            <p className="text-[16px] text-[#19A89D]/90 font-normal leading-relaxed">
                {subheadline}
            </p>
        )}
      </div>

      {/* 4. Visual Flow */}
      <div className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 mb-6 -mx-2 scale-90 origin-left w-[110%]">
        <VisualFlow flow={study.visualFlow} />
      </div>

      <div className="mt-auto pt-4 flex flex-col gap-4">
        {/* 5. Industry Tags */}
        <div className="flex flex-wrap gap-2">
            {study.industries.map((industry, i) => (
            <span key={i} className="inline-block px-3 py-1.5 rounded-full bg-white/[0.05] text-[13px] text-white/70">
                {industry}
            </span>
            ))}
        </div>

        {/* 6. Metrics & CTA */}
        <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-white/85">
                <Sparkles className="w-4 h-4 text-[#19A89D]" />
                <span>{study.metrics.stat1}</span>
                <span className="opacity-30 mx-1">•</span>
                <span>{study.metrics.stat2}</span>
            </div>
            
            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#19A89D] group-hover:brightness-125 transition-all">
            See how it works
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#19A89D]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
      <section id="work" className="py-32 px-4 max-w-[1400px] mx-auto">
        <div className="mb-20 text-center md:text-left max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-4"
          >
            Deployed Systems
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
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
