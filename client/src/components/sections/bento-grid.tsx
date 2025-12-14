import { motion } from "framer-motion";
import { useState } from "react";
import { CaseStudyModal } from "../case-study-modal";
import { caseStudies, CaseStudy } from "@/data/case-studies";

// New Data Structure based on requirements
type CaseStudyCard = {
  id: string;
  label: string;           // Level 1
  name: string;            // Level 2
  subtitle: string;        // Level 3
};

const caseStudyCards: CaseStudyCard[] = [
  {
    id: 'estatesync',
    label: 'Real Estate Automation',
    name: 'EstateSync',
    subtitle: 'Match properties to clients in minutes. 23% higher conversion on outreach.'
  },
  {
    id: 'client-lifecycle',
    label: 'Customer Experience',
    name: 'Client Lifecycle Management',
    subtitle: 'Onboarding to retention. 94% completion. Cut admin time by 85%.'
  },
  {
    id: 'license-control',
    label: 'Security & Compliance',
    name: 'License & Access Control',
    subtitle: 'Stop license fraud. Instant revocation. Recovered €80k in year one.'
  },
  {
    id: 'approval-engine',
    label: 'Workflow Management',
    name: 'Approval & Escalation Engine',
    subtitle: 'Approvals in hours, not weeks. Zero lost requests. Automatic escalation.'
  }
];

export function BentoGrid() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (id: string) => {
    const study = caseStudies.find(s => s.id === id);
    if (study) {
      setSelectedCaseStudy(study);
      setIsModalOpen(true);
    } else {
        console.warn(`Case study with id ${id} not found.`);
    }
  };

  return (
    <>
      <section id="work" className="py-32 px-4 max-w-[1200px] mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6"
          >
            Deployed Systems
          </motion.h2>
          <div className="w-full h-[1px] bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudyCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleOpenModal(card.id)}
              className="
                group cursor-pointer
                bg-card border border-border rounded-xl
                p-6 md:p-8
                shadow-sm hover:shadow-md
                hover:-translate-y-[2px]
                transition-all duration-250 ease-out
                flex flex-col
              "
            >
              {/* Level 1: Label */}
              <div className="text-[11px] font-medium tracking-[0.05em] text-muted-foreground uppercase mb-2">
                {card.label}
              </div>

              {/* Level 2: Main Name */}
              <h3 className="text-2xl md:text-[32px] font-bold text-foreground tracking-[-0.02em] leading-[1.2] mb-3 group-hover:text-primary/90 transition-colors">
                {card.name}
              </h3>

              {/* Level 3: Subtitle */}
              <p className="text-[13px] md:text-[16px] font-normal text-muted-foreground leading-[1.5] m-0">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        caseStudy={selectedCaseStudy} 
      />
    </>
  );
}
