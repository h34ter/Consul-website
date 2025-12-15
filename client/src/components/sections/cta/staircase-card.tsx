import { motion } from "framer-motion";
import { StaircaseCardType } from "@/data/cta-section-data";
import { AlertTriangle, Check, Target } from "lucide-react";

interface StaircaseCardProps {
  card: StaircaseCardType;
  index: number;
}

export const StaircaseCard = ({ card, index }: StaircaseCardProps) => {
  const isProblem = card.type === 'problem';
  const isSolution = card.type === 'solution';
  const isFinal = card.type === 'final';

  let icon = null;
  if (isProblem) icon = <AlertTriangle className="w-4 h-4 text-destructive/90" />;
  if (isSolution) icon = <Check className="w-4 h-4 text-primary/90" />;
  if (isFinal) icon = <Target className="w-5 h-5 text-primary-foreground" />;

  const baseStyles = "relative flex items-center gap-3 p-5 rounded-xl border backdrop-blur-sm transition-all duration-300";
  
  const typeStyles = {
    problem: "bg-destructive/5 border-destructive/30 text-destructive/90 shadow-[0_4px_12px_rgba(239,68,68,0.1)]",
    solution: "bg-primary/5 border-primary/30 text-primary/90 shadow-[0_4px_12px_rgba(16,185,129,0.1)]",
    final: "bg-gradient-to-br from-primary/20 to-cyan-500/20 border-primary/50 text-foreground shadow-[0_0_40px_rgba(16,185,129,0.2)]"
  };

  const finalCardAnimation = isFinal ? {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  } : {};

  return (
    <motion.div
      className={`
        ${baseStyles}
        ${isProblem ? typeStyles.problem : ''}
        ${isSolution ? typeStyles.solution : ''}
        ${isFinal ? typeStyles.final : ''}
        ${isFinal ? 'w-[240px]' : 'w-[200px]'}
        ${!isFinal ? 'h-auto min-h-[80px]' : 'h-auto min-h-[90px]'}
      `}
      animate={finalCardAnimation}
    >
      <div className={`
        flex items-center justify-center rounded-full 
        ${isFinal ? 'p-2 bg-primary text-primary-foreground' : 'w-6 h-6'}
      `}>
        {icon}
      </div>
      
      <span className={`
        font-medium leading-tight
        ${isFinal ? 'text-lg font-bold' : 'text-sm'}
      `}>
        {card.text}
      </span>

      {/* Glow effect for final card */}
      {isFinal && (
        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10" />
      )}
    </motion.div>
  );
};
