# CONSUL Website Redesign - Full Replit Prompt

## OVERVIEW
Redesign the Consul website to feel like an exclusive, premium service for wealthy business owners. The aesthetic should be "Bloomberg Terminal meets private equity deck" - data-rich, sophisticated, and makes visitors feel like they're accessing insider intelligence.

Target audience: Business owners paying $5-10k+/month for automation consulting. They're rich, busy, and need to immediately see "this is for serious operators like me."

---

## SECTION 1: HERO DASHBOARD REDESIGN

### Current Problem:
The Operations Dashboard with 4 large metric cards takes up too much space and doesn't tell a compelling story.

### New Design: Compact Metrics + Interactive Intelligence Chart

#### Layout Structure:
```
┌─────────────────────────────────────────────────────────────────┐
│  OPERATIONS INTELLIGENCE                          ● ● ● (dots) │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ ⚡ 94%   │ │ ⏱ 2.3min │ │ 💰 $847K │ │ 🎯 LIVE  │          │
│  │ Auto Rate│ │ Response │ │ Pipeline │ │ Status   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │              📈 INTERACTIVE LINE CHART                  │   │
│  │                                                         │   │
│  │         *                                              │   │
│  │                    *                                   │   │
│  │              *           *                             │   │
│  │        *                       *                       │   │
│  │   *                                  *                 │   │
│  │ ●────●────●────●────●────●────●────●                  │   │
│  │                                                         │   │
│  │  [Hover points reveal exclusive insights]              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  "The infrastructure satisfying clients." • Live               │
└─────────────────────────────────────────────────────────────────┘
```

#### Top Metrics Row (Compact):
```typescript
const metrics = [
  { icon: '⚡', value: '94%', label: 'Automation Rate', subtext: '↑86% from manual' },
  { icon: '⏱', value: '2.3min', label: 'Avg Response', subtext: 'was 24hr' },
  { icon: '💰', value: '$847K', label: 'Pipeline Value', subtext: '+$340K/mo' },
  { icon: '🎯', value: 'LIVE', label: 'System Status', subtext: '24/7 • 0 downtime' }
];
```

**Styling for compact metrics:**
- Height: 80px (much smaller than current)
- Width: Equal 4-column grid
- Background: rgba(255, 255, 255, 0.03)
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Border radius: 8px
- Value font: 28px, bold 700
- Label font: 11px, uppercase, muted
- Padding: 16px

#### Interactive Line Chart (Main Feature):

**Chart Specifications:**
- Height: 280px
- Width: 100% of container
- Background: Transparent (or very subtle gradient)
- Line color: Teal gradient (#10b981 to #06b6d4)
- Line width: 3px
- Glow effect: 0 0 20px rgba(16, 185, 129, 0.3)

**Data Points (6-7 points, trending upward):**
```typescript
const chartData = [
  { 
    x: 0, 
    y: 15, 
    insight: 'Only 15% of businesses have real automation infrastructure',
    label: 'Market Average'
  },
  { 
    x: 1, 
    y: 28, 
    insight: '28% reduction in operational overhead within 60 days',
    label: 'Day 60'
  },
  { 
    x: 2, 
    y: 47, 
    insight: '47% of manual processes identified as fully automatable',
    label: 'Audit Complete'
  },
  { 
    x: 3, 
    y: 52, 
    insight: '52% faster client response times post-deployment',
    label: 'System Live'
  },
  { 
    x: 4, 
    y: 78, 
    insight: '78% of decisions now handled without human intervention',
    label: 'Month 3'
  },
  { 
    x: 5, 
    y: 94, 
    insight: '94% automation rate achieved. Business runs itself.',
    label: 'Optimized'
  }
];
```

**Hover Interaction:**
- When user hovers over a data point:
  - Point enlarges slightly (scale 1.3)
  - Glow intensifies
  - Tooltip appears above/below point
  
**Tooltip Design:**
```css
.chart-tooltip {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(16, 185, 129, 0.5);
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.chart-tooltip-value {
  font-size: 24px;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 4px;
}

.chart-tooltip-insight {
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.chart-tooltip-label {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
}
```

**Chart Animation:**
- On page load: Line draws in from left to right (1.5s duration)
- Points appear sequentially with slight delay
- Use `stroke-dasharray` and `stroke-dashoffset` for draw effect

**Chart Libraries to Use:**
- Recharts (recommended for React)
- Or custom SVG with Framer Motion

**Implementation with Recharts:**
```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="chart-tooltip">
        <div className="chart-tooltip-value">{data.y}%</div>
        <div className="chart-tooltip-insight">{data.insight}</div>
        <div className="chart-tooltip-label">{data.label}</div>
      </div>
    );
  }
  return null;
};

<ResponsiveContainer width="100%" height={280}>
  <LineChart data={chartData}>
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <XAxis dataKey="label" hide />
    <YAxis hide domain={[0, 100]} />
    <Tooltip content={<CustomTooltip />} />
    <Line 
      type="monotone" 
      dataKey="y" 
      stroke="url(#lineGradient)" 
      strokeWidth={3}
      dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
      activeDot={{ r: 10, fill: '#10b981', filter: 'url(#glow)' }}
      filter="url(#glow)"
    />
  </LineChart>
</ResponsiveContainer>
```

---

## SECTION 2: DEPLOYED SYSTEMS - PAIN-POINT DRIVEN CARDS

### Current Problem:
Headlines like "Autonomous Inventory Intelligence" and "Client Lifecycle Orchestration" are too technical. Visitors don't immediately feel "this is my problem."

### New Approach:
Lead with the PAIN, then show the solution. Make it feel personal.

### Updated Card Structure:
```
┌─────────────────────────────────────────────────────────────┐
│  🔍 MARKETPLACE OPERATIONS                                   │
│                                                              │
│  "Still hunting inventory manually?"                         │  ← Pain hook (big, bold)
│                                                              │
│  AI-powered discovery across 50+ sources.                    │  ← Solution (smaller)
│  Real-time matching. Instant alerts.                         │
│                                                              │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐               │
│  │ Manual  │ AI  │ Smart   │ AI  │ Perfect │               │  ← Visual flow
│  │ Search  │ ──► │ Match   │ ──► │ Alert   │               │
│  └─────────┘     └─────────┘     └─────────┘               │
│                                                              │
│  ⌚ Watches  🚗 Cars  🏠 Real Estate  🎨 Art  🔧 Equipment   │  ← Industry pills
│                                                              │
│  ⚡ 24/7 discovery • 10x more matches                        │  ← Metrics
│                                                              │
│  See how it works →                                          │  ← Hover CTA
└─────────────────────────────────────────────────────────────┘
```

### All 6 Cards - Updated Content:

#### Card 1: Marketplace Operations
```typescript
{
  id: 'marketplace',
  emoji: '🔍',
  category: 'MARKETPLACE OPERATIONS',
  painHook: '"Still hunting inventory manually?"',
  solution: 'AI-powered discovery across 50+ sources. Real-time matching. Instant alerts when perfect inventory appears.',
  visualFlow: {
    step1: 'Manual Search',
    step2: 'Smart Match',
    step3: 'Perfect Alert'
  },
  industries: [
    { emoji: '⌚', name: 'Watches' },
    { emoji: '🚗', name: 'Cars' },
    { emoji: '🏠', name: 'Real Estate' },
    { emoji: '🎨', name: 'Art' },
    { emoji: '🔧', name: 'Equipment' }
  ],
  metrics: '24/7 discovery • 10x more matches'
}
```

#### Card 2: Customer Operations
```typescript
{
  id: 'customer',
  emoji: '🎯',
  category: 'CUSTOMER OPERATIONS',
  painHook: '"Clients falling through the cracks?"',
  solution: 'Automated pipeline from first touch to signed contract. Built in Slack. Deploys in 48 hours.',
  visualFlow: {
    step1: 'Scattered Leads',
    step2: 'Slack Hub',
    step3: 'Auto Pipeline'
  },
  industries: [
    { emoji: '💼', name: 'B2B SaaS' },
    { emoji: '🎯', name: 'Agencies' },
    { emoji: '📊', name: 'Consulting' },
    { emoji: '💰', name: 'Finance' },
    { emoji: '🛠️', name: 'Services' }
  ],
  metrics: '89% faster response • 3.2x more closed'
}
```

#### Card 3: Content Operations
```typescript
{
  id: 'content',
  emoji: '🎬',
  category: 'CONTENT OPERATIONS',
  painHook: '"Burning out trying to post daily?"',
  solution: 'Turn 1 video into 100+ pieces. Automated repurposing, scheduling, and distribution.',
  visualFlow: {
    step1: '1 Video/Week',
    step2: 'AI Repurpose',
    step3: '100 Pieces/Day'
  },
  industries: [
    { emoji: '🛍️', name: 'DTC Brands' },
    { emoji: '📱', name: 'Influencers' },
    { emoji: '🎯', name: 'Agencies' },
    { emoji: '🛒', name: 'E-commerce' },
    { emoji: '📺', name: 'Media' }
  ],
  metrics: '10x content output • 92% time saved'
}
```

#### Card 4: Sales Operations
```typescript
{
  id: 'sales',
  emoji: '📋',
  category: 'SALES OPERATIONS',
  painHook: '"Losing bids because you\'re too slow?"',
  solution: 'Semantic auto-fill for RFPs and bids. Context-aware responses. 10x proposal throughput.',
  visualFlow: {
    step1: 'Manual RFP',
    step2: 'AI Auto-Fill',
    step3: '15min Response'
  },
  industries: [
    { emoji: '📊', name: 'Consulting' },
    { emoji: '🏗️', name: 'Construction' },
    { emoji: '💻', name: 'Tech' },
    { emoji: '💰', name: 'Finance' },
    { emoji: '🏛️', name: 'Government' }
  ],
  metrics: '15 min per RFP • 10x more bids'
}
```

#### Card 5: Revenue Infrastructure
```typescript
{
  id: 'revenue',
  emoji: '🔐',
  category: 'REVENUE INFRASTRUCTURE',
  painHook: '"Revenue leaking through license sharing?"',
  solution: 'Real-time licensing, session control, fraud detection. Instant revocation. Complete audit trail.',
  visualFlow: {
    step1: 'Manual Keys',
    step2: 'Auto DRM',
    step3: 'Instant Secure'
  },
  industries: [
    { emoji: '📈', name: 'Trading' },
    { emoji: '🎓', name: 'Courses' },
    { emoji: '🔌', name: 'Plugins' },
    { emoji: '🔗', name: 'APIs' },
    { emoji: '💻', name: 'SaaS Tools' }
  ],
  metrics: '$2.3M secured • 99.9% uptime'
}
```

#### Card 6: Healthcare Operations
```typescript
{
  id: 'healthcare',
  emoji: '🏥',
  category: 'HEALTHCARE OPERATIONS',
  painHook: '"Staff drowning in paperwork?"',
  solution: 'HIPAA-compliant patient intake, scheduling, compliance tracking. Zero manual entry.',
  visualFlow: {
    step1: 'Manual Forms',
    step2: 'HIPAA AI',
    step3: 'Full Auto'
  },
  industries: [
    { emoji: '🏥', name: 'Clinics' },
    { emoji: '🩺', name: 'Practices' },
    { emoji: '🏥', name: 'Hospitals' },
    { emoji: '💊', name: 'Telehealth' },
    { emoji: '🔬', name: 'Labs' }
  ],
  metrics: '76% faster intake • 100% compliance'
}
```

### Card Styling Updates:

#### Pain Hook Styling:
```css
.pain-hook {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 12px;
  /* Add quotes styling */
  font-style: normal;
}
```

#### Solution Text:
```css
.solution-text {
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
}
```

#### Visual Flow Boxes (Larger, Clearer):
```css
.visual-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 24px 0;
}

.flow-box {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px 12px;
  text-align: center;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flow-box-text {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.flow-arrow {
  color: #10b981;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
}
```

#### Industry Pills (Brighter):
```css
.industry-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 16px;
}

.industry-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  transition: all 0.2s ease;
}

.industry-pill:hover {
  background: rgba(16, 185, 129, 0.25);
  border-color: rgba(16, 185, 129, 0.6);
  transform: translateY(-1px);
}

.industry-pill-emoji {
  font-size: 14px;
}
```

---

## SECTION 3: REPLACE "INFINITE SCALABILITY" WITH CREDIBILITY SECTION

### Current Problem:
"ZERO-LATENCY API", "VECTOR SEARCH", "RAG KNOWLEDGE BASE" - too technical. Your clients don't care about vector databases. They care about reliability and trust.

### New Section: "Enterprise-Grade Infrastructure"

**Title:** Enterprise-Grade Infrastructure
**Subtitle:** Built for scale. Trusted by operators.

### Layout: 2x3 Grid of Capability Cards
```
┌─────────────────────────────────────────────────────────────────┐
│         ENTERPRISE-GRADE INFRASTRUCTURE                         │
│         Built for scale. Trusted by operators.                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🔐 SECURITY  │  │ 📊 SCALE     │  │ ⚡ SPEED     │          │
│  │              │  │              │  │              │          │
│  │ SOC 2 Type II│  │ 10M+ req/day │  │ <200ms      │          │
│  │ HIPAA Ready  │  │ 99.9% uptime │  │ response    │          │
│  │ GDPR         │  │ Auto-scaling │  │ Real-time   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🔗 INTEGRATE │  │ 🛡️ RELIABLE │  │ 📈 INSIGHTS │          │
│  │              │  │              │  │              │          │
│  │ Any CRM      │  │ Redundant    │  │ Full audit  │          │
│  │ Any Database │  │ Auto-backup  │  │ trail       │          │
│  │ Any API      │  │ 24/7 monitor │  │ Real-time   │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Capability Cards Data:
```typescript
const capabilities = [
  {
    icon: '🔐',
    title: 'SECURITY',
    items: ['SOC 2 Type II', 'HIPAA Ready', 'GDPR Compliant']
  },
  {
    icon: '📊',
    title: 'SCALE',
    items: ['10M+ requests/day', '99.9% uptime SLA', 'Auto-scaling']
  },
  {
    icon: '⚡',
    title: 'SPEED',
    items: ['<200ms response', 'Real-time processing', 'Zero latency sync']
  },
  {
    icon: '🔗',
    title: 'INTEGRATION',
    items: ['Any CRM', 'Any database', 'Any API']
  },
  {
    icon: '🛡️',
    title: 'RELIABILITY',
    items: ['Redundant systems', 'Auto-backup', '24/7 monitoring']
  },
  {
    icon: '📈',
    title: 'INSIGHTS',
    items: ['Full audit trail', 'Real-time analytics', 'Custom reports']
  }
];
```

### Styling:
```css
.capability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.capability-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 28px;
  transition: all 0.3s ease;
}

.capability-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-4px);
}

.capability-icon {
  font-size: 28px;
  margin-bottom: 16px;
}

.capability-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
}

.capability-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.capability-item {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  line-height: 2;
}

/* Responsive */
@media (max-width: 768px) {
  .capability-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .capability-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## SECTION 4: PREMIUM "EXCLUSIVE CLUB" AESTHETIC

### Overall Design Principles:

1. **Dark, Rich Background**
   - Primary: #0a0a0a to #111111
   - Subtle gradient overlays
   - Noise texture (very subtle, 2-3% opacity)

2. **Accent Color: Teal/Emerald**
   - Primary: #10b981
   - Secondary: #06b6d4
   - Use sparingly for emphasis

3. **Typography**
   - Headlines: Tight letter-spacing (-0.02em), heavy weight (700-800)
   - Body: Relaxed, readable (400-500 weight)
   - Mix serif + sans-serif for premium feel (optional)

4. **Spacing**
   - Generous whitespace (premium = breathing room)
   - Section padding: 120px+ vertical
   - Card padding: 32px+

5. **Micro-interactions**
   - Subtle hover lifts (4-8px)
   - Glow effects on focus
   - Smooth transitions (300ms cubic-bezier)

6. **Social Proof Styling**
   - Muted logos (grayscale or low opacity)
   - Small, confident (not desperate)
   - "Built on and around" disclaimer in fine print

### Specific Premium Touches:

#### Glowing Borders on Hover:
```css
.premium-card:hover {
  box-shadow: 
    0 0 0 1px rgba(16, 185, 129, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 60px rgba(16, 185, 129, 0.1);
}
```

#### Subtle Background Grain:
```css
.premium-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
```

#### Premium Button:
```css
.premium-button {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
}

.premium-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.4);
}
```

---

## SECTION 5: LOGO MARQUEE (Keep Current, Minor Tweaks)

### Current Logos (Good):
- OpenAI
- Stripe  
- Slack
- Chrono24
- (Add more as needed)

### Styling Tweaks:
```css
.logo-marquee {
  padding: 48px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo-item {
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.logo-item:hover {
  opacity: 0.8;
  filter: grayscale(0%);
}
```

---

## IMPLEMENTATION CHECKLIST

### Priority 1 (Do First):
- [ ] Redesign dashboard with compact metrics + interactive chart
- [ ] Update case study cards with pain-point headlines
- [ ] Make industry pills brighter and more prominent
- [ ] Replace "Infinite Scalability" with credibility section

### Priority 2 (Polish):
- [ ] Add premium hover effects throughout
- [ ] Implement chart hover tooltips
- [ ] Add subtle animations (fade-in on scroll)
- [ ] Test responsive behavior

### Priority 3 (Final Touches):
- [ ] Fine-tune spacing and typography
- [ ] Add noise texture to backgrounds
- [ ] Verify dark mode consistency
- [ ] Performance optimization (lazy load chart)

---

## FILES TO CREATE/UPDATE:

1. `components/OperationsDashboard.tsx` - New dashboard with chart
2. `components/InteractiveChart.tsx` - Recharts implementation
3. `components/CaseStudyCard.tsx` - Updated with pain hooks
4. `components/IndustryPill.tsx` - Bright pill component
5. `components/CapabilityGrid.tsx` - New credibility section
6. `data/case-studies.ts` - Updated content
7. `data/chart-data.ts` - Chart data points
8. `styles/premium.css` - Premium aesthetic styles

---

## EXPECTED OUTCOME:

After implementing these changes, visitors will:
1. See the dashboard and think "this is sophisticated, data-driven"
2. Hover over chart points and get exclusive insights (engagement)
3. See case study cards and immediately think "that's MY problem"
4. See industry tags and know "this applies to ME"
5. See credibility section and trust "these people are legit"
6. Feel like they're accessing something exclusive, not a generic SaaS landing page

The overall vibe: **"If you have to ask, you can't afford it"** energy, but approachable enough that qualified leads feel welcome to book a call.
