import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaseStudy } from "@/data/case-studies";

// Define form schema
const auditSchema = z.object({
  workflow: z.string().min(10, "Please describe your workflow in more detail."),
  email: z.string().email("Please enter a valid email address."),
});

type AuditFormValues = z.infer<typeof auditSchema>;

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

export function AuditModal({ isOpen, onClose, caseStudy }: AuditModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormValues>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Submitting audit request:", {
      caseStudyId: caseStudy?.id,
      caseStudyTitle: caseStudy?.headline,
      ...data
    });

    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Close modal after showing success message for a bit
    setTimeout(() => {
      onClose();
      // Reset state after modal closes transition
      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 500);
    }, 2500);
  };

  if (!caseStudy) return null;

  const getQuestion = (id: string) => {
    switch (id) {
      case 'estatesync':
        return 'How do you currently match properties to clients? (Manual search, email outreach, spreadsheets, etc.)';
      case 'client-lifecycle':
        return 'How do you currently onboard new clients? (Email links, Slack messages, forms scattered across tools, etc.)';
      case 'license-control':
        return 'How do you currently manage licenses and access? (Manual keys, email revocation, spreadsheets, etc.)';
      case 'approval-engine':
        return 'How do you currently handle approvals and routing? (Email, DMs, manual tracking, etc.)';
      default:
        return 'How do you currently handle this workflow?';
    }
  };

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-background w-full max-w-[600px] rounded-2xl shadow-2xl p-8 md:p-12 pointer-events-auto border border-border relative overflow-hidden">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Audit Request Received</h3>
                    <p className="text-muted-foreground max-w-sm">
                      We've received your details. We'll review your current workflow and send a custom report to your email within 48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-2 mb-8">
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        Audit Request
                      </div>
                      <h2 className="text-2xl md:text-[28px] font-bold text-foreground">
                        Get Your {caseStudy.category} Audit
                      </h2>
                      <p className="text-base text-muted-foreground">
                        Tell us how you currently handle this. We'll review and send a custom recommendation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground block">
                          {getQuestion(caseStudy.id)}
                        </label>
                        <textarea
                          {...register("workflow")}
                          placeholder="Describe your current process in detail. The more specific, the better we can tailor the audit."
                          className="w-full h-[150px] p-3 text-sm rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-y transition-all placeholder:text-muted-foreground/50"
                        />
                        {errors.workflow && (
                          <span className="text-xs text-red-500">{errors.workflow.message}</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground block">
                          Email (we'll send the audit report here)
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className="w-full h-11 p-3 text-sm rounded-lg border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-500">{errors.email.message}</span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-11 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-6 shadow-lg shadow-primary/20"
                      >
                        {isSubmitting ? "Sending Request..." : "Request Audit"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
