import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { CaseStudy } from "@/data/case-studies";
import { WorkflowDiagram } from "./workflow-diagram";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
  onRequestAudit: () => void;
}

export function CaseStudyModal({ isOpen, onClose, caseStudy, onRequestAudit }: CaseStudyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!caseStudy) return null;

  const checkpoints = [
    { title: "Hidden Constraint", content: caseStudy.checkpoints?.hiddenConstraint },
    { title: "Discovery", content: caseStudy.checkpoints?.discovery },
    { title: "Blueprint", content: caseStudy.checkpoints?.blueprint },
    { title: "Results", content: caseStudy.checkpoints?.results },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[9990]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            className="fixed inset-0 z-[9999] flex justify-center overflow-y-auto custom-scrollbar p-0 sm:p-4"
          >
            {/* Modal Content - Centered Single Column */}
            <div className="relative w-full max-w-[800px] min-h-screen sm:min-h-0 sm:h-auto sm:my-10 bg-black rounded-none sm:rounded-2xl border-x sm:border border-white/10 shadow-2xl pointer-events-auto flex flex-col">
              
              {/* Close Button - Sticky/Fixed */}
              <button
                onClick={onClose}
                className="fixed sm:absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-12 pb-32">
                
                {/* 1. Header */}
                <div className="mb-12 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                      {caseStudy.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                    {caseStudy.painHook}
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
                    {caseStudy.headline}
                  </p>
                </div>

                {/* 2. Optional Workflow Diagram */}
                <div className="mb-16">
                   <WorkflowDiagram type={caseStudy.id} />
                </div>

                {/* 3. Checkpoints Timeline */}
                <div className="relative space-y-16 pl-4 sm:pl-8 border-l border-white/10 ml-3 sm:ml-4">
                  {checkpoints.map((checkpoint, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[21px] sm:-left-[37px] top-1 h-3 w-3 rounded-full bg-black border border-[#00C4B4] shadow-[0_0_10px_rgba(0,196,180,0.5)]" />
                      
                      <div className="space-y-3">
                        <div className="text-xs font-mono text-[#00C4B4] tracking-widest uppercase mb-1">
                          Checkpoint // {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                          {checkpoint.title}
                        </h3>
                        <div className="prose prose-invert max-w-none text-white/70 leading-relaxed whitespace-pre-line">
                          {checkpoint.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4. Footer */}
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Ready to deploy this system?
                  </h3>
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(onRequestAudit, 300);
                    }}
                    className="
                      group relative px-8 py-4 bg-[#00C4B4] text-black text-sm font-bold uppercase tracking-widest rounded-sm
                      hover:bg-[#00E0CE] transition-all duration-200
                      flex items-center gap-3
                    "
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
