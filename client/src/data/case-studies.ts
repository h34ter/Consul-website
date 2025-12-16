export type Checkpoint = {
  title: string;
  content: string;
};

export type CaseStudy = {
  id: string;
  emoji: string;
  category: string;
  painHook: string; // Used as headline
  subtext?: string; // Used as description
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
  headline: string; // Keeping for compatibility, but might be redundant with painHook in new design
  checkpoints?: { 
    hiddenConstraint: string;
    discovery: string;
    blueprint: string;
    results: string;
  };
  footerSection?: {
    title: string;
    content: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'competitive-infrastructure',
    emoji: '⚡',
    category: 'FULL STACK PRODUCT MATCHING SYSTEM',
    painHook: 'Autonomous Deal-Flow System',
    headline: 'Autonomous Deal-Flow System',
    subtext: '18-second alerts on new inventory. Before your competitors even know it exists.',
    visualFlow: {
      before: 'Listing detected',
      process: 'Matched & scored',
      after: 'Alert in 18s'
    },
    industries: ['Real Estate', 'Luxury Watches', 'Exotic Cars', 'Art', 'Assets'],
    metrics: {
      stat1: '87% capture before market',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  },
  {
    id: 'operational-systems',
    emoji: '🎯',
    category: 'OPERATIONAL SYSTEMS',
    painHook: 'Self-Managing Operations Engine',
    headline: 'Self-Managing Operations Engine',
    subtext: '1,000+ active users. Zero management overhead. AI resolves 94% without human intervention.',
    visualFlow: {
      before: 'User joins',
      process: 'Auto-onboarded',
      after: 'AI handles everything'
    },
    industries: ['Client Success', 'Staff Ops', 'Franchisees', 'Communities', 'Platforms'],
    metrics: {
      stat1: '94% autonomous resolution',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  },
  {
    id: 'content-infrastructure',
    emoji: '📡',
    category: 'CONTENT INFRASTRUCTURE',
    painHook: 'Omnichannel Distribution Engine',
    headline: 'Omnichannel Distribution Engine',
    subtext: 'One source asset becomes 100+ platform-optimized variants. Scheduled automatically.',
    visualFlow: {
      before: 'Source content',
      process: 'AI multiplies',
      after: '100+ deployed'
    },
    industries: ['Brands', 'Agencies', 'Creators', 'DTC', 'Media'],
    metrics: {
      stat1: '10x output, same team',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  },
  {
    id: 'revenue-infrastructure',
    emoji: '🔐',
    category: 'REVENUE INFRASTRUCTURE',
    painHook: 'Real-Time Access Control',
    headline: 'Real-Time Access Control',
    subtext: 'Instant verification. 5-minute revocation. Complete usage visibility. $2.3M secured.',
    visualFlow: {
      before: 'Access requested',
      process: 'Verified real-time',
      after: 'Usage tracked'
    },
    industries: ['Digital Products', 'SaaS', 'Trading', 'Courses', 'APIs'],
    metrics: {
      stat1: '99.9% uptime, full audit',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  },
  {
    id: 'decision-infrastructure',
    emoji: '⚡',
    category: 'DECISION INFRASTRUCTURE',
    painHook: 'Parallel Approval System',
    headline: 'Parallel Approval System',
    subtext: '4-hour approvals (was 5 days). Parallel routing. Auto-escalation. Zero bottlenecks.',
    visualFlow: {
      before: 'Request submitted',
      process: 'Routed parallel',
      after: 'Approved 4 hours'
    },
    industries: ['Retail', 'Franchises', 'Dealerships', 'Enterprise'],
    metrics: {
      stat1: '92% faster, 12% lift',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  },
  {
    id: 'logistics-infrastructure',
    emoji: '📊',
    category: 'LOGISTICS INFRASTRUCTURE',
    painHook: 'Predictive Supply Intelligence',
    headline: 'Predictive Supply Intelligence',
    subtext: '$1.2M capital freed. Zero stockouts (6 months). Automated forecasting across all locations.',
    visualFlow: {
      before: 'Demand predicted',
      process: 'Stock optimized',
      after: 'Reorders automated'
    },
    industries: ['Import/Export', 'Distribution', 'Dealerships', 'Wholesale'],
    metrics: {
      stat1: 'Real-time visibility',
      stat2: 'View system →'
    },
    checkpoints: {
        hiddenConstraint: "Constraint", discovery: "Discovery", blueprint: "Blueprint", results: "Results"
    }
  }
];
