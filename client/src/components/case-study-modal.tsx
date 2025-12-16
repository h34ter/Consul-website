import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
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
    { title: "Hidden Constraint", content: caseStudy.checkpoints?.hiddenConstraint || "Content not available." },
    { title: "Discovery", content: caseStudy.checkpoints?.discovery || "Content not available." },
    { title: "Blueprint", content: caseStudy.checkpoints?.blueprint || "Content not available." },
    { title: "Results", content: caseStudy.checkpoints?.results || "Content not available." },
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Modal Content */}
            <div className="bg-[#0a0f1c] w-full max-w-[1100px] h-[90vh] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden pointer-events-auto flex flex-col">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-[#0a0f1c] sticky top-0 z-20">
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#00C4B4] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                      System Architecture
                    </span>
                 </div>
                 <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/50 hover:text-[#00C4B4]"
                  >
                    <X className="w-6 h-6" />
                  </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-8 md:p-12 space-y-12">
                  
                  {/* Header Section */}
                  <div className="space-y-6 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="text-sm">{caseStudy.emoji}</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                        {caseStudy.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white tracking-tight">
                      {caseStudy.painHook}
                    </h2>
                  </div>

                  {/* Animated Workflow Diagram */}
                  <div className="w-full max-w-5xl mx-auto my-12">
                    <WorkflowDiagram type={caseStudy.id} />
                  </div>

                  <div className="h-px w-full bg-white/5 max-w-5xl mx-auto" />

                  {/* Checkpoints Accordion */}
                  <div className="max-w-3xl mx-auto space-y-4">
                    {checkpoints.map((checkpoint, index) => (
                      <CheckpointAccordion 
                        key={index} 
                        index={index} 
                        title={checkpoint.title} 
                        content={checkpoint.content} 
                      />
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="pt-20 pb-12 text-center max-w-2xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                      See a workflow like this<br/>in your business?
                    </h3>
                    
                    <button
                      onClick={() => {
                        onClose();
                        setTimeout(onRequestAudit, 300);
                      }}
                      className="
                        group relative w-full md:w-auto min-w-[280px] h-[56px] inline-flex items-center justify-center gap-3 
                        bg-[#00C4B4] text-white text-base font-bold rounded-lg
                        shadow-[0_4px_20px_rgba(0,196,180,0.2)]
                        hover:bg-[#00b0a0] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,196,180,0.3)]
                        transition-all duration-300
                      "
                    >
                      Book Technical Review
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    
                    <p className="mt-4 text-sm text-white/40">
                      Discuss your specific operational challenge
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CheckpointAccordion({ index, title, content }: { index: number, title: string, content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`
        rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden
        ${isOpen 
          ? 'bg-white/[0.03] border-[#00C4B4]/50 shadow-[0_0_20px_rgba(0,196,180,0.05)]' 
          : 'bg-white/[0.03] border-white/10 hover:border-[#00C4B4]/30'
        }
      `}
    >
      <div className="flex items-center justify-between p-5 md:px-8 md:py-6">
        <div className="flex items-center gap-4 md:gap-6">
          <span className={`text-lg font-mono font-bold ${isOpen ? 'text-[#00C4B4]' : 'text-white/30'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
              Checkpoint
            </span>
            <span className="text-base font-bold text-white tracking-wide uppercase">
              {title}
            </span>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00C4B4]' : ''}`} 
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0 pl-[calc(20px+1rem+2ch)] md:pl-[calc(32px+1.5rem+2ch)]">
              <div className="prose prose-sm md:prose-base prose-invert max-w-none text-white/70 leading-relaxed whitespace-pre-line">
                {content}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
