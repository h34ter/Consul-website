import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Users, Share2, FileCheck, Key } from "lucide-react";
import { useState } from "react";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { CaseStudyModal } from "../case-study-modal";
import { AuditModal } from "../audit-modal";

// --- Sub-components ---

const VisualFlow = ({ flow }: { flow: CaseStudy['visualFlow'] }) => {
  return (
    <div className="flex items-center justify-between w-full my-6 px-1">
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
    w-[120px] h-[60px] rounded-lg border flex items-center justify-center p-2 text-center transition-all duration-300
    ${highlight
      ? 'bg-primary/5 border-primary/20 shadow-[0_0_15px_-5px_rgba(0,196,180,0.15)]'
      : 'bg-muted/30 border-border'
    }
  `}>
    <span className={`text-[12px] font-medium leading-tight ${highlight ? 'text-foreground' : 'text-foreground/90'}`}>
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
  const lines = study.headline.split('\n');

  const IconComponent = {
    'Zap': Zap,
    'Users': Users,
    'Share2': Share2,
    'FileCheck': FileCheck,
    'Key': Key
  }[study.iconName] || Zap;

  return (
    <motion.div
      onClick={onClick}
      className="
        group relative h-auto md:h-[480px] w-full bg-card border border-border rounded-2xl p-[24px]
        cursor-pointer overflow-hidden transition-all duration-500 ease-out
        md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:border-[#19A89D]/40
        flex flex-col
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* 1. Category Badge (Icon) */}
      <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted border border-border group-hover:bg-[#19A89D]/10 group-hover:border-[#19A89D]/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-[#19A89D] transition-colors" />
      </div>

      {/* 2. Main Headline */}
      <div className="mb-2 relative z-10">
        <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.2] text-foreground tracking-tight group-hover:text-foreground transition-colors">
          {study.painHook}
        </h3>
      </div>

      {/* 3. Subheadlines & Description */}
      <div className="mb-4 max-w-[95%] space-y-1.5 relative z-10">
        {lines.map((line, i) => (
             <p key={i} className={`
                leading-relaxed
                ${i === 0 ? 'text-[15px] text-foreground font-medium' : ''}
                ${i === 1 && lines.length > 2 ? 'text-[13px] text-muted-foreground italic font-normal' : ''}
                ${i === 1 && lines.length === 2 ? 'text-[15px] text-[#19A89D] font-medium' : ''}
                ${i === 2 ? 'text-[15px] text-muted-foreground font-normal leading-[1.6] mt-2' : ''}
             `}>
                {line}
            </p>
        ))}
      </div>

      {/* 4. Visual Flow */}
      <div className="opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-6 md:mb-4 -mx-2 scale-[0.95] origin-left w-[110%] relative z-10 grayscale group-hover:grayscale-0">
        <VisualFlow flow={study.visualFlow} />
      </div>

      <div className="mt-auto pt-2 md:pt-4 flex flex-col gap-4 relative z-10">
        {/* 5. Industry Tags */}
        <div className="flex flex-wrap gap-2">
            {study.industries.map((industry, i) => (
            <span key={i} className="inline-block px-3 py-1.5 rounded-full bg-muted/50 border border-border text-[12px] font-medium text-muted-foreground tracking-wide">
                {industry}
            </span>
            ))}
        </div>

        {/* 6. Metrics & CTA */}
        <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-foreground">
                <Sparkles className="w-4 h-4 text-[#19A89D]" />
                <span>{study.metrics.stat1}</span>
                <span className="opacity-100 mx-1 text-muted-foreground">•</span>
                <span>{study.metrics.stat2}</span>
            </div>

            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#19A89D] opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
            Read full case study
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
            className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto md:mx-0"
          >
            Custom systems deployed across 6+ verticals
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-10 tracking-tight"
          >
            Built for scale. <span className="text-[#19A89D]">Proven in production.</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-muted-foreground/80 flex items-center justify-center md:justify-start"
          >
             Each system below is custom-built. Click to see the full implementation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] px-4">
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
