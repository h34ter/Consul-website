export type Checkpoint = {
  title: string;
  content: string;
};

export type CaseStudy = {
  id: string;
  emoji: string;
  category: string;
  painHook: string; // Main Title
  headline: string; // Subheadline
  subtext?: string;
  visualFlow: {
    before: string;
    process: string;
    after: string;
  };
  industries: string[];
  metrics: {
    stat1: string;
    stat2: string;
  };
  checkpoints: { 
    hiddenConstraint: string;
    discovery: string;
    blueprint: string;
    results: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'marketplace-ops',
    emoji: '⚡',
    category: 'MARKETPLACE OPERATIONS',
    painHook: '"Manually searching 50+ sites daily?"',
    headline: 'Data matching, intelligent routing, human approval — all automated. No manual work.',
    subtext: 'Manually searching 50+ sites daily?',
    visualFlow: {
      before: '50+ sources manually',
      process: 'AI matches in 2 min',
      after: 'Perfect inventory in Inbox'
    },
    industries: ['Watches', 'Cars', 'Real Estate', 'Art', 'Equipment'],
    metrics: {
      stat1: '24/7 discovery',
      stat2: '10x more matches'
    },
    checkpoints: {
      hiddenConstraint: 'A high-volume business was losing opportunities because matching records manually was slow and error-prone. New data would come in, someone would manually search existing records, spend hours filtering, and by then the opportunity was gone. The real cost: missed revenue, lost market share, and teams working insane hours just to stay competitive.',
      discovery: 'During the audit, we mapped the entire workflow: data intake → manual search → decision → outreach → follow-up → conversion. We discovered that the team was spending 60% of their time on activities that could be automated. Key insight: The bottleneck wasn\'t complexity—it was speed.',
      blueprint: 'System architecture: 1) Intelligent Matching Engine (Real-time matching against criteria). 2) Personalized Outreach Generator (AI-generated contextual messages). 3) Unified Command Dashboard (Real-time visibility). 4) Human-in-the-Loop Approval (AI suggests, humans approve).',
      results: 'Before: 2–4 hours to match a record. 70% accuracy. After: 2 minutes to match. 94% accuracy. 0% records lost. Revenue impact: Recovered €80k+ in year-one revenue.'
    }
  },
  {
    id: 'customer-ops',
    emoji: '🎯',
    category: 'CUSTOMER OPERATIONS',
    painHook: '"Clients falling through the cracks?"',
    headline: 'Clients needed ONE place, ONE checklist, ONE bot.',
    subtext: 'Clients falling through the cracks?',
    visualFlow: {
      before: 'Scattered emails & DMs',
      process: 'Slack hub + Bot',
      after: 'Automated pipeline'
    },
    industries: ['B2B SaaS', 'Agencies', 'Consulting', 'Finance', 'Services'],
    metrics: {
      stat1: '89% faster response',
      stat2: '3.2x more closed'
    },
    checkpoints: {
      hiddenConstraint: 'Client onboarding was chaos. Resources scattered across 5+ platforms. New clients had no structured path and 40% fell off. Admins spent 3+ hours per week chasing people down.',
      discovery: 'We tracked 20 new client onboardings and found they averaged 15+ touchpoints before understanding what to do. Key insight: The problem wasn\'t content—it was delivery. Clients needed ONE place, ONE checklist, ONE bot.',
      blueprint: 'System architecture: 1) Private Client Channel (Slack). 2) Automated Onboarding Checklist. 3) Support Bot (Real-time FAQs). 4) Admin Dashboard (Progress visibility).',
      results: 'Before: 60% completion rate. 8h support resolution. After: 94% completion rate. 15-min resolution. Admin time: 20 min/week.'
    }
  },
  {
    id: 'content-ops',
    emoji: '📹',
    category: 'CONTENT OPERATIONS',
    painHook: '"Can\'t keep up with posting?"',
    headline: 'One raw asset in → infinite adaptations out.',
    subtext: 'Can\'t keep up with posting?',
    visualFlow: {
      before: '1 video per week',
      process: 'AI repurposing',
      after: '100 pieces daily'
    },
    industries: ['DTC Brands', 'Influencers', 'Agencies', 'E-commerce', 'Media'],
    metrics: {
      stat1: '10x content output',
      stat2: '92% time saved'
    },
    checkpoints: {
      hiddenConstraint: 'The creative team was burning out. Producing one high-quality video took days. Then came the manual grind: resizing, captions, scheduling. By the time they finished distribution, they had no energy for creation.',
      discovery: 'We audited the workflow and found 85% of time was spent on format conversion, not creativity. Key insight: You needed a factory model. One raw asset in → infinite adaptations out.',
      blueprint: 'System architecture: 1) Ingestion & Transcription Engine. 2) Intelligent Repurposing Core (AI clips & captions). 3) Approval Workflow. 4) Unified Scheduler.',
      results: 'Before: 1 video + 2 posts/week. After: 100+ pieces of content daily. Engagement: Up 400%.'
    }
  },
  {
    id: 'sales-ops',
    emoji: '💼',
    category: 'SALES OPERATIONS',
    painHook: '"Losing bids because you\'re too slow?"',
    headline: 'The problem wasn\'t decision-making—it was visibility and routing.',
    subtext: 'Losing bids because you\'re too slow?',
    visualFlow: {
      before: 'Manual RFP writing',
      process: 'AI auto-fill',
      after: '15 min response'
    },
    industries: ['Consulting', 'Construction', 'Tech', 'Finance', 'Government'],
    metrics: {
      stat1: '15 min per RFP',
      stat2: '10x more bids'
    },
    checkpoints: {
      hiddenConstraint: 'Every decision required manual routing. Requests got stuck in inboxes. A discount request took 5 days. 15% of requests were lost indefinitely.',
      discovery: 'We tracked 100 requests and found average approval time was 8 days. Key insight: The problem wasn\'t decision-making—it was visibility and routing.',
      blueprint: 'System architecture: 1) Smart Request Intake. 2) Automatic Routing. 3) Parallel Approvals. 4) Real-Time Queue Visibility. 5) Escalation Logic.',
      results: 'Before: 5–7 days approval. 12% lost requests. After: 4 hours approval. 0% lost. Revenue impact: €120k+ annual value.'
    }
  },
  {
    id: 'revenue-infra',
    emoji: '💰',
    category: 'REVENUE INFRASTRUCTURE',
    painHook: '"Selling digital products manually?"',
    headline: 'Real-time issuance, session-level verification, and instant revocation.',
    subtext: 'Selling digital products manually?',
    visualFlow: {
      before: 'Manual key issuing',
      process: 'Automated DRM',
      after: 'Instant & secure'
    },
    industries: ['Trading', 'Courses', 'Plugins', 'APIs', 'SaaS Tools'],
    metrics: {
      stat1: '$2.3M secured',
      stat2: '99.9% uptime'
    },
    checkpoints: {
      hiddenConstraint: 'Paid software users were sharing licenses, resulting in 20–30% revenue leakage. License keys were issued manually (error-prone), revocation took days, and audits were nightmares.',
      discovery: 'We analyzed 200 issuances and found 15% errors. Revocation had a 3–5 day lag. Key insight: You needed real-time issuance, session-level verification, and instant revocation.',
      blueprint: 'System architecture: 1) Automated License Generation. 2) Real-Time Session Verification. 3) Usage Monitoring & Fraud Detection. 4) Instant Revocation.',
      results: 'Before: 4–8h issuance. 30% leakage. After: 2-min issuance. <3% leakage. Recovered €80k in annual revenue.'
    }
  },
  {
    id: 'healthcare-ops',
    emoji: '🏥',
    category: 'HEALTHCARE OPERATIONS',
    painHook: '"Staff drowning in paperwork?"',
    headline: 'Automating patient intake with 100% compliance.',
    subtext: 'Staff drowning in paperwork?',
    visualFlow: {
      before: 'Manual intake forms',
      process: 'HIPAA-compliant AI',
      after: 'Fully automated'
    },
    industries: ['Clinics', 'Practices', 'Hospitals', 'Telehealth', 'Labs'],
    metrics: {
      stat1: '76% faster intake',
      stat2: '100% compliance'
    },
    checkpoints: {
      hiddenConstraint: 'Medical staff were spending 40% of their time on data entry instead of patient care. Manual forms led to transcription errors and long wait times.',
      discovery: 'We found that 80% of intake data could be processed automatically. The challenge was ensuring HIPAA compliance while reducing manual workload.',
      blueprint: 'System architecture: 1) Secure Digital Forms. 2) HIPAA-Compliant AI Processing. 3) EMR Integration. 4) Automated Validation.',
      results: '76% faster patient intake. 100% data accuracy and compliance. Staff reclaimed 15+ hours per week for patient care.'
    }
  }
];
