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
  footerSection?: {
    title: string;
    content: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'estatesync',
    emoji: '⚡',
    category: 'Real Estate Automation',
    painHook: 'EstateSync Agent OS',
    headline: 'Properties matched, clients reached, deals closed — without the manual work.',
    subtext: '18 seconds alerts on new inventory. Before competitors even know it exists.',
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
      hiddenConstraint: 'Agents lost deals due to slow manual matching (2-4 hours/listing). Outreach was impersonal (8% response). The real cost: missed commissions, lost market share, and agents working 60+ hour weeks just to stay competitive.',
      discovery: 'The bottleneck wasn\'t complexity, it was speed. Agents needed real-time matching while keeping their personal voice. We mapped the entire workflow and found 60% of time was spent on automatable tasks.',
      blueprint: '• Property Matching Engine (Real-time listing vs. client prefs)\n• Personal Outreach Gen (AI emails in agent\'s voice)\n• Agent Dashboard (Actionable leads only)\n• Auto-Follow-up (Templated nurturing)\n• CRM Integration (Syncs with existing tools)',
      results: '2-min matching (was 4 hours), 23% response rate, 38% close rate on matched leads. Agents freed up 20+ hours per week.'
    }
  },
  {
    id: 'client-command-center',
    emoji: '🎯',
    category: 'Customer Experience Automation',
    painHook: 'Client Command Center',
    headline: 'Onboarding, support, updates — all in one place.',
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
      hiddenConstraint: 'Onboarding was chaos across 5 platforms. 40% drop-off rate. Admins spent 3h/week chasing clients. Resources were scattered across Slack, email, Notion, Loom, and Google Drive.',
      discovery: 'Clients needed ONE place (Slack), ONE checklist, and ONE bot. Content wasn\'t the issue, delivery was. Clients felt "lost" with 15+ touchpoints before understanding what to do.',
      blueprint: '• Private Client Channel (Slack)\n• Auto-Checklist (Visual progress)\n• Support Bot (Instant FAQs)\n• Admin Dashboard (Real-time status)\n• Milestone Tracking (Lifecycle management)',
      results: '94% completion rate, 15-min support resolution (was 8h), 20 min/week admin time. Real-time visibility into every client\'s progress.'
    }
  },
  {
    id: 'enterprise-licensing',
    emoji: '🔐',
    category: 'Security & Access Control',
    painHook: 'Enterprise Licensing',
    headline: 'Zero manual overhead license management.',
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
      hiddenConstraint: '30% revenue leakage via sharing. Manual keys = errors. Revocation took 48h. There was no compliance trail and no real-time usage monitoring.',
      discovery: 'Needed session-level verification and instant revocation, not just static keys. We analyzed 200 license issuances and found a 15% error rate.',
      blueprint: '• Auto-Gen Keys (On-demand)\n• Real-Time Session Verify (Launch check)\n• Fraud Detection (Anomaly flagging)\n• Instant Revocation (Payment fail = lockout)\n• Compliance Audit Trail (Immutable logging)',
      results: '<5 min revocation, <3% leakage, Audit trail complete. Recovered significant annual revenue from stopping license sharing.'
    }
  },
  {
    id: 'approval-engine',
    emoji: '⚡',
    category: 'Operations & Process Automation',
    painHook: 'Approval Engine',
    headline: 'No more bottlenecks.',
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
      hiddenConstraint: 'Decisions stuck in inboxes. 5 days for discount approval. 15% lost requests. Routing rules were inconsistent and manual.',
      discovery: 'Visibility was the problem. Needed parallel routing and real-time queues. Average approval time was 8 days, mostly "waiting in queue."',
      blueprint: '• Smart Intake Forms\n• Parallel Routing (Finance + Legal same time)\n• Auto-Escalation (24h delays)\n• Audit Trail\n• Real-Time Queue Visibility',
      results: '4-hour approvals (was 5 days), 0% lost requests. Increased conversion by 12% due to faster decisions.'
    }
  },
  {
    id: 'content-infrastructure',
    emoji: '📡',
    category: 'CONTENT INFRASTRUCTURE',
    painHook: 'Omnichannel Engine',
    headline: '10x output, same team.',
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
      hiddenConstraint: 'Manual editing bottleneck. Team burned out posting 10x/week vs competitors\' 100x. Editors spent 80% of time on mechanical resizing and captioning.',
      discovery: 'Repurposing logic is repetitive. AI can handle the formatting/cutting, humans handle the strategy. Creative decision-making only accounted for 20% of production time.',
      blueprint: '• Ingestion (Drive/Dropbox)\n• AI Clip Gen (FFmpeg + GPT)\n• Caption Optimization (Platform specific)\n• Auto-Schedule\n• Brand Template Enforcement',
      results: '100 posts/week, 92% time saved. Consistent 10x output with the same headcount.'
    }
  },
  {
    id: 'logistics-infrastructure',
    emoji: '📊',
    category: 'LOGISTICS INFRASTRUCTURE',
    painHook: 'Predictive Supply Chain',
    headline: 'Capital freed, stockouts zeroed.',
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
      hiddenConstraint: 'Manual forecasting led to overstock in A and stockout in B. Capital tied up. Purchasing decisions were made on "gut feel" or outdated spreadsheets.',
      discovery: 'Historical data + velocity trends could predict stockouts 2 weeks out. The problem was data latency, not inventory levels.',
      blueprint: '• ERP Data Sync\n• Velocity Modeling (AI Forecast)\n• Rebalance Logic (Move A to B)\n• Auto-PO Gen\n• Supplier Portal Automation',
      results: '$1.2M capital freed, 0 stockouts in 6 months. Shipping costs reduced by 18%.'
    }
  }
];
