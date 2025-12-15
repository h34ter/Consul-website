import { motion } from "framer-motion";

type ArrowConnectorProps = {
  start: { x: number; y: number };
  end: { x: number; y: number };
  delay?: number;
};

export const ArrowConnector = ({ start, end, delay = 0 }: ArrowConnectorProps) => {
  // Calculate control points for a smooth curve
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  // Create a curved path
  const path = `M ${start.x} ${start.y} Q ${midX} ${start.y}, ${midX} ${midY} T ${end.x} ${end.y}`;

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-0"
      style={{ opacity: 0.6 }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(16, 185, 129, 0.3)"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};
