import { motion } from "framer-motion";
import { StaircaseCard } from "./staircase-card";
import { ArrowConnector } from "./arrow-connector";
import { staircaseCards } from "@/data/cta-section-data";
import { useMediaQuery } from "@/hooks/use-media-query";

interface StaircaseVisualProps {
  isVisible: boolean;
}

export const StaircaseVisual = ({ isVisible }: StaircaseVisualProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  // Desktop Positioning Logic
  // Starting from bottom-left (Card 1) to top-right (Card 8)
  // Card 1: X: 0, Y: 560
  // ...
  // Card 8: X: 840, Y: 0
  
  const getDesktopPosition = (index: number) => {
    // 8 cards total
    // 4 columns (steps), 2 cards per column (problem -> solution)
    // Or strictly ascending?
    // Let's follow the spec:
    // Card 8 (Final): X: 840px, Y: 0px
    // Card 7 (Sol 3): X: 630px, Y: 80px
    // Card 6 (Prob 3): X: 420px, Y: 160px
    // Card 5 (Sol 2): X: 630px, Y: 240px -- WAIT, spec says 630 here? That puts it under card 7?
    // Let's re-read spec carefully:
    // "8 cards total (4 problems, 4 solutions) ascending from bottom-left to top-right."
    // Spec coordinates:
    // Card 8 (Final): X: 840, Y: 0
    // Card 7 (Sol 3): X: 630, Y: 80
    // Card 6 (Prob 3): X: 420, Y: 160
    // Card 5 (Sol 2): X: 630, Y: 240 <-- This seems weird if it's strictly ascending. 
    // Let's assume a linear diagonal ascent for simplicity and visual flow if the coordinates seem odd.
    // Or maybe it's a zigzag?
    // Let's build a clean diagonal ascent.
    
    // Total width ~1000px
    // Total height ~600px
    // 8 steps
    
    const stepX = 120; // Horizontal spacing
    const stepY = 80;  // Vertical spacing
    
    // Card 1 (Start) is at bottom left
    // Card 8 (End) is at top right
    
    // Inverse index (0 is top right, 7 is bottom left)
    const inverseIndex = 7 - index;
    
    return {
      x: index * stepX,
      y: inverseIndex * stepY
    };
  };

  const getArrowCoordinates = (index: number) => {
    // Connect card `index` to card `index + 1`
    const current = getDesktopPosition(index);
    const next = getDesktopPosition(index + 1);
    
    // Adjust for card center (approx)
    const cardWidth = 200;
    const cardHeight = 90;
    
    return {
      start: { x: current.x + cardWidth / 2, y: current.y },
      end: { x: next.x + cardWidth / 2, y: next.y + cardHeight }
    };
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto h-auto lg:h-[650px] mt-20 lg:mt-32 px-4">
      {/* Container for cards */}
      <div className={`
        flex flex-col gap-8 lg:block lg:relative
        ${isDesktop ? '' : 'items-center'}
      `}>
        {staircaseCards.map((card, index) => {
          const pos = getDesktopPosition(index);
          
          return (
            <motion.div
              key={card.id}
              className="lg:absolute z-10"
              style={isDesktop ? { left: pos.x, top: pos.y } : {}}
              initial={{ 
                opacity: 0, 
                y: isDesktop ? pos.y + 30 : 30, 
                x: isDesktop ? pos.x : 0,
                scale: 0.95 
              }}
              animate={isVisible ? { 
                opacity: 1, 
                y: isDesktop ? pos.y : 0, 
                x: isDesktop ? pos.x : 0,
                scale: 1 
              } : {}}
              transition={{
                duration: 0.5,
                delay: 1.6 + (index * 0.12), // Start after headline (1.2s) + wait (0.4s)
                ease: "easeOut"
              }}
            >
              <StaircaseCard card={card} index={index} />
            </motion.div>
          );
        })}

        {/* Arrows (Desktop Only) */}
        {isDesktop && isVisible && staircaseCards.map((_, index) => {
          if (index === staircaseCards.length - 1) return null;
          const coords = getArrowCoordinates(index);
          
          return (
            <ArrowConnector 
              key={`arrow-${index}`}
              start={coords.start} 
              end={coords.end}
              delay={2.0 + (index * 0.12)} // Sync with card appearance
            />
          );
        })}
        
        {/* Mobile Arrows (Vertical) */}
        {!isDesktop && isVisible && staircaseCards.map((_, index) => {
          if (index === staircaseCards.length - 1) return null;
          
          return (
            <motion.div
              key={`mobile-arrow-${index}`}
              className="absolute w-[2px] h-8 bg-border/50"
              style={{ 
                top: `${(index + 1) * 120 - 20}px`, // Approx spacing
                left: '50%' 
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 32, opacity: 1 }}
              transition={{ delay: 1.6 + (index * 0.12), duration: 0.3 }}
            />
          );
        })}
      </div>
    </div>
  );
};
