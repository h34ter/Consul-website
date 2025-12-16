export type Checkpoint = {
  title: string;
  content: string;
};

export type CaseStudy = {
  id: string;
  emoji: string;
  category: string;
  painHook?: string; // Optional now as new data uses headline
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
  headline: string;
  checkpoints?: { // Optional as new data doesn't explicitly list them in the snippet, but I should probably keep them or adapt
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
    id: 'first-mover-automation',
    emoji: '🔍',
    category: 'COMPETITIVE INTELLIGENCE',
    headline: 'First-Mover Automation',
    painHook: '"Still hunting inventory manually?"', // Keeping for compatibility with card component
    subtext: 'Capture high-value inventory 18 seconds after it\'s listed. Before anyone else knows it exists.',
    visualFlow: {
      before: 'New listing appears',
      process: 'Scored & matched',
      after: 'Client gets alert in 18s'
    },
    industries: ['Luxury Watches', 'Real Estate', 'Exotic Cars', 'Art', 'Yachts'],
    metrics: {
      stat1: '18 second response time',
      stat2: '87% capture rate before market'
    },
    // Retaining detailed checkpoints from previous 'marketplace' entry as it matches the theme, but adapted slightly
    checkpoints: {
      hiddenConstraint: "A high-volume business was losing opportunities because matching records manually was slow and error-prone. New data would come in, someone would manually search existing records, spend hours filtering, and by then the opportunity was gone. The real cost: missed revenue, lost market share, and teams working insane hours just to stay competitive.",
      discovery: "During the audit, we mapped the entire workflow: data intake → manual search → decision → outreach → follow-up → conversion. We discovered that the team was spending 60% of their time on activities that could be automated.",
      blueprint: "System architecture:\n\nIntelligent Matching Engine\n- Learns from your existing data.\n- Real-time matching of new records against stored profiles/criteria.\n\nPersonalized Outreach Generator\n- AI-generates contextual messages based on match quality.\n- Messages are customizable by humans before sending.",
      results: "Before:\n- Average time to match a record: 2–4 hours.\n\nAfter:\n- Average time to match a record: 18 seconds.\n- Records lost: 0%.\n- Outreach response rate: 23%+."
    }
  },
  {
    id: 'client-lifecycle-monopoly',
    emoji: '🎯',
    category: 'RETENTION INFRASTRUCTURE',
    headline: 'Zero-Touch Client Success',
    painHook: '"Clients falling through the cracks?"',
    subtext: 'Onboard 1,000 clients with zero support staff. 24/7 AI support that never sleeps, never quits.',
    visualFlow: {
      before: 'Client signs',
      process: 'Auto onboard + RAG agent',
      after: 'AI resolves 94% tickets'
    },
    industries: ['SaaS', 'Education', 'Finance', 'Healthcare', 'B2B Services'],
    metrics: {
      stat1: '94% self-service rate',
      stat2: 'Zero support staff needed'
    },
    checkpoints: {
      hiddenConstraint: "Client onboarding was chaos. New clients were invited to Slack, sent links to resources scattered across emails, Notion pages, and videos. Result: 40% of new clients fell off before completing onboarding.",
      discovery: "We tracked 20 new client onboardings and found they averaged 15+ touchpoints before they understood what to do. Clients reported feeling 'lost'.",
      blueprint: "System architecture:\n\nPrivate Client Channel\n- Auto-created for each new client.\n\nAutomated Onboarding Checklist\n- Step-by-step guides with timestamps.\n\nSupport Bot\n- Responds to client questions in real-time.",
      results: "Before:\n- New client onboarding completion rate: 60%.\n\nAfter:\n- New client onboarding completion rate: 94%.\n- Average time to resolve a support question: Instant."
    }
  },
  {
    id: 'content-multiplication',
    emoji: '🎬',
    category: 'DISTRIBUTION DOMINANCE',
    headline: 'Omnipresence Infrastructure',
    painHook: '"Burning out trying to post daily?"',
    subtext: 'Transform 1 video into 100 platform-optimized assets. Flood every channel while competitors post once a week.',
    visualFlow: {
      before: '1 raw video',
      process: 'AI repurpose + schedule',
      after: '100 assets across 7 platforms'
    },
    industries: ['DTC Brands', 'Personal Brands', 'Agencies', 'SaaS', 'Media'],
    metrics: {
      stat1: '10x content output',
      stat2: '400% engagement increase'
    },
    checkpoints: {
      hiddenConstraint: "The creative team was burning out. Producing one high-quality video took days. Then came the manual grind: resizing for TikTok/Shorts/Reels, writing captions, scheduling posts.",
      discovery: "We audited the content workflow and found 85% of time was spent on format conversion and administrative tasks, not creativity.",
      blueprint: "System architecture:\n\nIngestion & Transcription Engine\n- Auto-upload raw video.\n\nIntelligent Repurposing Core\n- AI identifies viral hooks and key moments.\n- Auto-crops vertical clips.",
      results: "Before:\n- Output: 1 video + 2 posts per week.\n\nAfter:\n- Output: 100+ pieces of content daily."
    }
  },
  {
    id: 'revenue-protection',
    emoji: '🔐',
    category: 'IP PROTECTION INFRASTRUCTURE',
    headline: 'Anti-Piracy Defense System',
    painHook: '"Revenue leaking through sharing?"',
    subtext: 'Real-time session control. Instant revocation. Complete usage visibility. Protect every dollar of digital revenue.',
    visualFlow: {
      before: 'Strategy uploaded',
      process: 'Protected + obfuscated',
      after: 'Tracked every trade'
    },
    industries: ['Trading Strategies', 'Courses', 'Plugins', 'APIs', 'SaaS'],
    metrics: {
      stat1: '$2.3M revenue protected',
      stat2: '99.9% uptime'
    },
    checkpoints: {
      hiddenConstraint: "Paid software users were sharing licenses, reselling access, or running instances they weren't entitled to. The real cost: 20–30% revenue leakage.",
      discovery: "We analyzed 200 license issuances and found 15% had errors. We traced 30+ instances of license sharing.",
      blueprint: "System architecture:\n\nAutomated License Generation\n- Keys generated on demand.\n\nReal-Time Session Verification\n- Every app launch checks: is this license valid?\n\nUsage Monitoring\n- Tracks sessions, detects anomalies.",
      results: "Before:\n- Revenue leakage: 25–30%.\n\nAfter:\n- Revenue leakage: < 3%."
    }
  },
  {
    id: 'approval-velocity',
    emoji: '📋',
    category: 'DECISION ACCELERATION',
    headline: 'Instant Authority Routing',
    painHook: '"Losing bids because too slow?"',
    subtext: 'Discount approvals in 4 hours, not 5 days. Parallel workflows. Zero bottlenecks. Speed is competitive advantage.',
    visualFlow: {
      before: 'Request submitted',
      process: 'Auto-route parallel',
      after: 'Approved in 4 hours'
    },
    industries: ['Finance', 'Construction', 'Consulting', 'Enterprise', 'Healthcare'],
    metrics: {
      stat1: '92% faster approvals',
      stat2: '12% conversion lift'
    },
    checkpoints: {
      hiddenConstraint: "Every decision required manual routing: discounts needed manager approval, refunds needed accounting. Requests got stuck in inboxes.",
      discovery: "We tracked 100 approval requests over a month and found: Average approval time: 8 days.",
      blueprint: "System architecture:\n\nSmart Request Intake\n- Forms capture all required info upfront.\n\nAutomatic Routing\n- Rules-based routing.\n\nParallel Approvals\n- Approvers work simultaneously.",
      results: "Before:\n- Average approval time (discount): 5–7 days.\n\nAfter:\n- Average approval time (discount): 4 hours."
    }
  },
  {
    id: 'clinical-automation',
    emoji: '🏥',
    category: 'HIPAA-COMPLIANT OPERATIONS',
    headline: 'Zero-Friction Patient Flow',
    painHook: '"Staff drowning in paperwork?"',
    subtext: '2-minute check-ins. Real-time insurance verification. Zero data entry. HIPAA-compliant. Staff focus on care, not paperwork.',
    visualFlow: {
      before: 'Digital intake',
      process: 'Auto-verify insurance',
      after: 'Patient sees doctor in 2min'
    },
    industries: ['Clinics', 'Specialty Practices', 'Dental', 'Urgent Care', 'Mental Health'],
    metrics: {
      stat1: '2min check-in',
      stat2: '40% satisfaction lift'
    },
    checkpoints: {
      hiddenConstraint: "Medical staff were spending 40% of their day entering data from paper forms into EMR systems. Errors were common.",
      discovery: "We observed the front desk workflow and found that for every 1 hour of patient care, there was 45 minutes of administrative overhead.",
      blueprint: "System architecture:\n\nDigital Intake Portal\n- Mobile-friendly forms sent before appointment.\n\nAutomated Verification Agent\n- Bots check insurance eligibility in real-time.",
      results: "Before:\n- Check-in time: 15 minutes.\n\nAfter:\n- Check-in time: 2 minutes."
    }
  }
];
