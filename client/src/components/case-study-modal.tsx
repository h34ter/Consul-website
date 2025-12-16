import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { CaseStudy } from "@/data/case-studies";

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
    { id: "01", title: "Hidden Constraint", content: caseStudy.checkpoints?.hiddenConstraint },
    { id: "02", title: "Discovery", content: caseStudy.checkpoints?.discovery },
    { id: "03", title: "Blueprint", content: caseStudy.checkpoints?.blueprint },
    { id: "04", title: "Results", content: caseStudy.checkpoints?.results },
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9990]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="fixed inset-0 z-[9999] flex justify-center items-center p-4 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="relative w-full max-w-[800px] max-h-[90vh] bg-[#050505] rounded-xl border border-white/10 shadow-2xl pointer-events-auto flex flex-col overflow-hidden">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-1 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
                
                {/* 1. Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                      {caseStudy.category}
                    </span>
                    <div className="h-[1px] w-8 bg-white/10"></div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-8">
                    {caseStudy.headline}
                  </h2>
                </div>

                {/* 2. Checkpoints Vertical Stack */}
                <div className="space-y-12 pl-2">
                  {checkpoints.map((checkpoint, index) => (
                    <div key={index} className="relative pl-12 border-l border-white/10 last:border-0 pb-2">
                      {/* Number Bubble */}
                      <div className="absolute left-[-13px] top-0 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#050505] border border-white/20 text-[9px] font-mono text-white/50">
                        {checkpoint.id}
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                              CHECKPOINT {checkpoint.id}
                           </span>
                           <h3 className="text-lg font-bold text-white">
                            {checkpoint.title}
                           </h3>
                        </div>
                        
                        <div className="text-[15px] leading-relaxed text-white/60 font-light whitespace-pre-line">
                          {checkpoint.content}
                        </div>
                        
                        {/* Special formatting for "What was actually broken:" sections if they exist in content */}
                        {/* This is handled by whitespace-pre-line, assuming the input text has newlines */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Footer / CTA */}
                <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm text-white/40 font-light">
                    Ready to deploy similar infrastructure?
                  </span>
                  
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(onRequestAudit, 300);
                    }}
                    className="
                      px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full
                      hover:bg-[#00C4B4] hover:text-white transition-all duration-300
                      flex items-center gap-2
                    "
                  >
                    Request Audit
                    <ArrowRight className="w-3 h-3" />
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
