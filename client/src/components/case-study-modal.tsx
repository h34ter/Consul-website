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
    { title: "Hidden Constraint", content: caseStudy.checkpoints.hiddenConstraint },
    { title: "Discovery", content: caseStudy.checkpoints.discovery },
    { title: "Blueprint", content: caseStudy.checkpoints.blueprint },
    { title: "Results", content: caseStudy.checkpoints.results },
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="bg-background w-full max-w-[900px] max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto pointer-events-auto border border-border relative flex flex-col">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors z-10 text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12 space-y-12">
                {/* Header */}
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">
                      {caseStudy.category}
                    </span>
                    <div className="h-px w-8 bg-border" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                    {caseStudy.headline}
                  </h2>
                </div>

                {/* Checkpoints */}
                <div className="space-y-12 relative">
                  {/* Vertical line connecting checkpoints */}
                  <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border hidden md:block" />

                  {checkpoints.map((checkpoint, index) => (
                    <div key={index} className="relative md:pl-12">
                      {/* Number Badge */}
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-mono text-muted-foreground hidden md:flex">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            Checkpoint {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">
                            {checkpoint.title}
                          </h3>
                        </div>
                        
                        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                          {checkpoint.content}
                        </div>
                      </div>
                      
                      {index < checkpoints.length - 1 && (
                         <div className="h-px w-full bg-border mt-12 md:hidden" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Footer Section */}
                {caseStudy.footerSection && (
                  <div className="space-y-8 mt-16 pt-8 border-t border-border">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {caseStudy.footerSection.title}
                    </h3>
                    <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                      {caseStudy.footerSection.content}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="sticky bottom-0 p-6 md:p-8 bg-background/95 backdrop-blur border-t border-border flex justify-between items-center">
                <div className="hidden md:block text-sm text-muted-foreground">
                  Ready to deploy similar infrastructure?
                </div>
                <button
                  onClick={() => {
                    // onRequestAudit will be handled by parent to switch modals
                    onRequestAudit();
                  }}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Request Audit
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
