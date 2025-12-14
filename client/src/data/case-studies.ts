
export type Checkpoint = {
  title: string;
  content: string;
};

export type CaseStudy = {
  id: string;
  category: string;
  headline: string;
  checkpoints: {
    hiddenConstraint: string;
    discovery: string;
    blueprint: string;
    results: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "estatesync",
    category: "Real Estate Automation",
    headline: "Properties matched, clients reached, deals closed — without the manual work.",
    checkpoints: {
      hiddenConstraint: "Agents were losing deals because property matching was manual and slow. A listing would come in, an agent would manually search their database, spend hours on emails, and by then the lead was already working with someone else. The real cost: missed commissions, lost market share, and agents working 60+ hour weeks just to stay competitive.\n\nWhat was actually broken:\n- Property matching took 2–4 hours per new listing (manual database search + filtering).\n- Agents hesitated to send \"generic\" blasts, so they sent nothing at all.\n- Follow-ups were mental notes, not automated triggers.",
      discovery: "During the audit, we mapped the entire agent workflow: lead intake → property search → outreach → follow-up → deal close. We discovered that agents were spending 60% of their time on activities that could be automated, and their biggest fear was losing personal touch (we solved that by keeping the agent's voice in every message).\n\nKey insight:\nThe bottleneck wasn't complexity—it was speed. Agents needed to match clients to properties in minutes, not hours, and outreach needed to feel 100% human.",
      blueprint: "System architecture:\n1) Property Matching Engine: Real-time matching of new listings against stored client preferences (location, price, property type, timeline).\n2) Personalized Outreach Generator: AI-powered emails customized to each client's saved preferences and communication history.\n3) Agent Dashboard: One central place to see matched leads, outreach status, follow-up reminders, and deal stage.\n4) Automated Follow-up System: Reminders for agents to follow up, or auto-emails if no response after X days.",
      results: "Before:\n- Average time to match a lead: 2–4 hours.\n- Manual outreach response rate: ~8%.\n- Agents worked 60+ hour weeks.\n- Deal close rate: ~15% of matched leads.\n\nAfter:\n- Average time to match a lead: 2 minutes (system-generated).\n- Automated outreach response rate: 23% (personalized messages converted better).\n- Agents freed up 20+ hours per week to focus on closing and client relationships.\n- Deal close rate: 38% of matched leads (agents could nurture more leads effectively)."
    }
  },
  {
    id: "client-lifecycle",
    category: "Customer Experience Automation",
    headline: "Onboarding, support, updates — all in one place. No confusion, no delays.",
    checkpoints: {
      hiddenConstraint: "Client onboarding was chaos. New clients were invited to Slack, sent links to resources scattered across emails, Notion pages, and videos, asked to fill out forms in multiple places, and then didn't know what to do next. Support issues got lost in DMs. Admins didn't know who needed help or what stage clients were at. Result: 40% of new clients fell off before completing onboarding, and admins spent 3+ hours per week chasing people down.\n\nWhat was actually broken:\n- 15+ disparate touchpoints for one onboarding process.\n- No central \"truth\" for client status.\n- Reactive support instead of proactive guidance.",
      discovery: "We tracked 20 new client onboardings and found they averaged 15+ touchpoints (emails, DMs, form fills, video links) before they understood what to do. Clients reported feeling \"lost\" and \"not knowing what's expected.\" Admins were reactive (answering the same questions 5+ times) instead of proactive.\n\nKey insight:\nThe problem wasn't the content—it was the delivery. Clients needed ONE place (a private channel), ONE checklist, ONE bot to answer questions, and clear progress indicators.",
      blueprint: "System architecture:\n1) Private Client Channel: Auto-created for each new client (client + admins + bot only).\n2) Automated Onboarding Checklist: Step-by-step guides with timestamps and clear \"done\" indicators.\n3) Support Bot: Responds to client questions in real-time (trained on FAQs, previous conversations).\n4) Admin Dashboard: Real-time visibility into each client's progress, pending issues, and action items.\n5) Auto-Archiving & Export: All conversations logged and searchable.",
      results: "Before:\n- New client onboarding completion rate: 60% (40% dropped off).\n- Average time to resolve a support question: 8 hours (async DM delays).\n- Admin time spent on onboarding per week: 3+ hours.\n- Zero visibility into client progress or blockers.\n\nAfter:\n- New client onboarding completion rate: 94% (only 6% drop-off, mostly for fit reasons).\n- Average time to resolve a support question: 15 minutes (bot responds instantly).\n- Admin time spent on onboarding per week: < 30 minutes (monitoring only).\n- 100% visibility into every client's status."
    }
  },
  {
    id: "license-control",
    category: "Security & Access Control",
    headline: "License management, entitlements, fraud prevention — enterprise-grade, zero manual overhead.",
    checkpoints: {
      hiddenConstraint: "Paid software users were sharing licenses, reselling access, or running instances they weren't entitled to. There was no way to detect it. License keys were issued manually (error-prone), revocation took days (people could still use after cancellation), and audits were nightmares. The real cost: 20–30% revenue leakage through unlicensed usage, no compliance trail, and constant manual support overhead.\n\nWhat was actually broken:\n- License keys were issued manually via email.\n- No technical enforcement of seat limits.\n- Revocation was a manual database update that didn't kill active sessions.",
      discovery: "We analyzed 200 license issuances and found 15% had errors (wrong tier, wrong user, issued to wrong email). We traced 30+ instances of license sharing (one key being used from 5+ locations simultaneously). We also found that the revocation process (manual, email-based) had a 3–5 day lag, during which users could still access paid features.\n\nKey insight:\nThe problem wasn't the licensing model—it was the infrastructure. You needed real-time issuance, session-level validation, and automated fraud detection hooks.",
      blueprint: "System architecture:\n1) Automated License Generation: Keys generated on demand (tied to customer account, subscription tier, expiry date).\n2) Real-Time Session Verification: Every app launch checks: is this license valid? Has it been revoked? Is it within usage limits?\n3) Usage Monitoring & Fraud Detection: Tracks sessions, detects anomalies (license used from 10 locations in 1 hour = fraud flag).\n4) Instant Revocation: The moment a subscription cancels, all sessions are killed via WebSocket/API push.",
      results: "Before:\n- License issuance time: 4–8 hours (manual, error-prone).\n- Revocation enforcement time: 48–72 hours (users could still access after cancel).\n- Revenue leakage (unlicensed usage): 25–30%.\n- Support tickets per week (license issues): 12–15.\n- Audit trail: nonexistent (compliance risk).\n\nAfter:\n- License issuance time: 2 minutes (automated).\n- Revocation enforcement time: < 5 minutes (instant session termination).\n- Revenue leakage: < 3% (fraud detection blocks sharing).\n- Support tickets: < 1 per week.\n- Full audit trail for every key generation and check."
    }
  },
  {
    id: "approval-engine",
    category: "Operations & Process Automation",
    headline: "Approvals, routing, handoffs — no more bottlenecks, no more lost requests.",
    checkpoints: {
      hiddenConstraint: "Every decision required manual routing: discounts needed manager approval, refunds needed accounting, hiring needed HR + finance, marketing campaigns needed legal review. Requests got stuck in inboxes, bounced between teams, or fell through the cracks entirely. The real cost: a discount request took 5 days to approve, a refund took 3 weeks, and hiring took 2+ months because approvals were sequential instead of parallel.\n\nWhat was actually broken:\n- Approval requests were just emails/Slacks (unstructured).\n- No clear ownership of \"next step\".\n- Sequential processing meant one person on vacation blocked everything.",
      discovery: "We tracked 100 approval requests over a month and found:\n- Average approval time: 8 days (most time was \"waiting in queue\").\n- 15% of requests were stuck indefinitely (no one knew who should approve).\n- Only 40% of approvers saw their queue within 24 hours.\n- Urgent requests had no way to jump the line.\n- Zero record of approval decisions (can't audit, can't defend, can't comply).\n\nKey insight:\nThe problem wasn't decision-making—it was visibility and routing. We needed a system that pushed requests to the right people, allowed parallel approvals, and escalated delays automatically.",
      blueprint: "System architecture:\n1) Smart Request Intake: Forms capture all required info upfront (no back-and-forth).\n2) Automatic Routing: Rules-based (discount > $500 needs VP approval; hiring needs HR + finance).\n3) Parallel Approvals: When possible, approvers work simultaneously (not sequential).\n4) Real-Time Queue Visibility: Each approver sees their pending requests, priority level, and deadline.\n5) Escalation Logic: If not approved in 24 hours, bump to manager. If not acted on, re-route.",
      results: "Before:\n- Average approval time (discount): 5–7 days (mostly waiting).\n- Average approval time (refund): 3+ weeks (bounced between teams).\n- Approval requests lost or forgotten: ~12% per month.\n- Approvers' visibility into queue: none (relied on email inbox).\n- Audit trail: nonexistent (can't defend decisions).\n\nAfter:\n- Average approval time (discount): 4 hours (parallel approvals).\n- Average approval time (refund): 1 day (automatic routing).\n- Approval requests lost: 0% (system tracks everything).\n- Approvers have a dedicated dashboard.\n- Full audit trail of who approved what and when."
    }
  }
];
