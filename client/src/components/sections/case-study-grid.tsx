import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Box, Circle, Triangle, Hexagon, Component, Layers, Zap, Target, Video, Briefcase, DollarSign, Activity } from "lucide-react";
import { useState } from "react";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { CaseStudyModal } from "../case-study-modal";
import { AuditModal } from "../audit-modal";

// --- Sub-components ---

const VisualFlow = ({ flow }: { flow: CaseStudy['visualFlow'] }) => {
  return (
    <div className="flex items-center justify-between w-full my-8 gap-2">
      {/* Step 1 */}
      <div className="flex-1 h-[64px] rounded-md border border-white/10 bg-white/5 flex items-center justify-center px-3">
        <span className="text-[10px] text-muted-foreground/70 leading-tight text-center font-medium">{flow.before}</span>
      </div>
      
      {/* Arrow */}
      <div className="text-muted-foreground/20 text-[10px]">→</div>
      
      {/* Step 2 (AI) */}
      <div className="flex-1 h-[64px] rounded-md border border-[#00C4B4]/30 bg-[#00C4B4]/5 flex items-center justify-center px-3 relative shadow-[0_0_15px_-5px_rgba(0,196,180,0.1)]">
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase text-[#00C4B4] tracking-wider bg-[#0A0A0A] px-1.5 border border-[#00C4B4]/20 rounded-full">AI</div>
        <span className="text-[10px] text-white font-medium leading-tight text-center">{flow.process}</span>
      </div>

      {/* Arrow */}
      <div className="text-muted-foreground/20 text-[10px]">→</div>

      {/* Step 3 */}
      <div className="flex-1 h-[64px] rounded-md border border-white/10 bg-white/5 flex items-center justify-center px-3">
        <span className="text-[10px] text-muted-foreground/70 leading-tight text-center font-medium">{flow.after}</span>
      </div>
    </div>
  );
};

const getCaseStudyIcon = (id: string) => {
  switch (id) {
    case 'marketplace-ops':
      return <Zap className="w-3 h-3 text-white" />;
    case 'customer-ops':
      return <Target className="w-3 h-3 text-white" />;
    case 'content-ops':
      return <Video className="w-3 h-3 text-white" />;
    case 'sales-ops':
      return <Briefcase className="w-3 h-3 text-white" />;
    case 'revenue-infra':
      return <DollarSign className="w-3 h-3 text-white" />;
    case 'healthcare-ops':
      return <Activity className="w-3 h-3 text-white" />;
    default:
      return <Box className="w-3 h-3 text-white" />;
  }
};

const CaseStudyCard = ({ study, onClick }: { study: CaseStudy; onClick: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className="
        group relative h-[380px] w-full bg-[#0A0A0A] rounded-xl border border-white/10 p-6 
        cursor-pointer overflow-hidden transition-all duration-300 ease-out
        hover:border-[#00C4B4]/40 hover:translate-y-[-2px]
      "
    >
      {/* 1. Category Badge */}
      <div className="flex items-center gap-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
         {getCaseStudyIcon(study.id)}
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
          {study.category}
        </span>
      </div>

      {/* 2. Hook Question */}
      <div className="mb-6 min-h-[80px] flex items-end">
        <h3 className="text-[20px] font-bold leading-[1.3] text-white/90 group-hover:text-white transition-colors">
          {study.painHook}
        </h3>
      </div>

      {/* 3. Visual Flow (Text Based) */}
      <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
        <VisualFlow flow={study.visualFlow} />
      </div>

      {/* 4. Industry Tags */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 text-[11px] text-muted-foreground/50 group-hover:text-muted-foreground/70 transition-colors">
        {study.industries.map((industry, i) => (
          <span key={i} className="flex items-center">
             {i > 0 && <span className="mr-3 opacity-30">•</span>}
            {industry}
          </span>
        ))}
      </div>

      {/* 5. Metrics (Bottom) */}
      <div className="absolute bottom-6 left-6 right-6 pt-4 border-t border-white/5 flex items-center justify-between text-[12px] font-medium">
        <div className="flex items-center gap-2 text-white/80">
          <Sparkles className="w-3 h-3 text-[#00C4B4]" />
          <span>{study.metrics.stat1}</span>
          <span className="text-muted-foreground/40">-</span>
          <span>{study.metrics.stat2}</span>
        </div>
      </div>
      
       {/* Hover Glow Effect */}
       <div className="absolute inset-0 bg-gradient-to-t from-[#00C4B4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
      <section id="work" className="py-24 px-4 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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
