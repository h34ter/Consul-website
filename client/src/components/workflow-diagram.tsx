import { motion } from "framer-motion";
import { 
  Database, 
  Globe, 
  Mail, 
  FileText, 
  ArrowDown, 
  ArrowRight, 
  Zap, 
  CheckCircle,
  Server,
  Filter,
  Users,
  MessageSquare,
  Bot,
  FileCheck,
  AlertTriangle,
  Upload,
  Cpu,
  Smartphone,
  Video,
  Linkedin,
  Key,
  ShieldCheck,
  Lock,
  Eye,
  FileSearch,
  Timer,
  GitPullRequest,
  CheckSquare,
  BarChart3,
  Truck,
  Package,
  TrendingUp,
  DollarSign
} from "lucide-react";

export function WorkflowDiagram({ type }: { type?: string }) {
  // Render different diagrams based on the type
  if (type === 'operational-systems' || type === 'client-command-center') {
    return <SelfManagingOperationsDiagram />;
  }
  
  if (type === 'content-infrastructure') {
    return <OmnichannelDistributionDiagram />;
  }

  if (type === 'revenue-infrastructure' || type === 'enterprise-licensing') {
    return <RevenueInfrastructureDiagram />;
  }

  if (type === 'decision-infrastructure' || type === 'approval-engine') {
    return <ParallelApprovalDiagram />;
  }

  if (type === 'logistics-infrastructure') {
    return <LogisticsDiagram />;
  }

  // Default: Autonomous Deal-Flow System (estatesync/competitive-infrastructure)
  return <AutonomousDealFlowDiagram />;
}

// --- DIAGRAM IMPLEMENTATIONS ---

function AutonomousDealFlowDiagram() {
  return (
    <DiagramContainer title="AUTOMATED OPERATIONS FLOW" subtitle="Real-time inventory intelligence across 50+ sources">
      <div className="relative z-10 flex flex-col items-center">
        {/* DATA INGESTION LAYER */}
        <div className="w-full max-w-3xl mb-12 relative">
          <LabelLeft text="Data Ingestion" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <SourceBox icon={<Globe className="w-4 h-4" />} label="Source 1" sub="API" delay={0.1} />
            <SourceBox icon={<Database className="w-4 h-4" />} label="Source 2" sub="Scraper" delay={0.2} />
            <SourceBox icon={<Mail className="w-4 h-4" />} label="Source 3" sub="Email" delay={0.3} />
            <SourceBox icon={<Server className="w-4 h-4" />} label="..." sub="" delay={0.4} />
            <SourceBox icon={<Filter className="w-4 h-4" />} label="50+" sub="Total" delay={0.5} highlight />
          </div>

          <ConnectingLine delay={0.6} />
        </div>

        {/* NORMALIZATION ENGINE */}
        <div className="mb-12 relative">
           <ProcessBox title="NORMALIZATION" subtitle="ENGINE" delay={0.7} />
           <AnnotationRight text="← Standardizes formats" />
           <ConnectingLine delay={0.8} />
           <TimeIndicator text="< 2s" position="bottom" />
        </div>

        {/* MATCHING ALGORITHM */}
        <div className="mb-12 relative">
           <ProcessBox title="MATCHING" subtitle="ALGORITHM" delay={0.9} />
           <AnnotationRight text="← Client criteria (budget, location)" />
           <ConnectingLine delay={1.0} />
        </div>

        {/* FILTERING LOGIC */}
        <div className="mb-12 relative">
           <DiamondBox text="Score > 85?" delay={1.1} />
           
           <div className="absolute top-1/2 left-full ml-8 w-32 hidden md:block">
             <div className="text-[10px] italic text-white/40">← High precision</div>
           </div>
           
           <div className="h-16 w-full flex justify-center relative mt-8">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-px bg-[#00C4B4]/50 absolute top-0"
            />
            <div className="absolute top-2 right-[-20px] text-[10px] text-[#00C4B4] font-bold">YES</div>
          </div>
          <TimeIndicator text="Real-time" position="bottom" />
        </div>

        {/* ALERT DISPATCH */}
        <div className="mb-12 relative">
           <ProcessBox title="ALERT DISPATCH" subtitle="Multi-channel" delay={1.3} />
           <AnnotationRight text="← SMS + Email + Slack" />
           <ConnectingLine delay={1.4} />
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative">
           <FinalOutputBox 
             icon={<Zap className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="CLIENT RECEIVES"
             subtitle="Alert with full property data"
             delay={1.5}
           />
        </div>

        <SummaryFooter 
          line1="⚡ TOTAL TIME: 18 SECONDS"
          line2="🔄 RUNS: 24/7 • NEVER STOPS • NEVER MISSES"
        />
      </div>
    </DiagramContainer>
  );
}

function SelfManagingOperationsDiagram() {
  return (
    <DiagramContainer title="ZERO-MANAGEMENT INFRASTRUCTURE" subtitle="Autonomous client/staff lifecycle from join to resolution">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* ENTRY POINT */}
        <div className="w-full max-w-3xl mb-12 relative flex flex-col items-center">
          <LabelLeft text="Entry Point" />
          <ProcessBox title="USER JOINS" subtitle="(Client/Staff)" delay={0.1} />
          <ConnectingLine delay={0.2} />
          <TimeIndicator text="Instant" position="bottom" />
        </div>

        {/* AUTO-ONBOARDING */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="AUTO-ONBOARDING" subtitle="SEQUENCE" delay={0.3} />
           <AnnotationRight text="← Welcome email, Slack channel, Resources" />
           <ConnectingLine delay={0.4} />
        </div>

        {/* AI AGENT DEPLOYED */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="AI AGENT" subtitle="DEPLOYED" delay={0.5} />
           <AnnotationRight text="← Trained on docs, 24/7 monitoring" />
           
           {/* Split path */}
           <div className="h-8 w-64 border-x border-white/10 border-t mt-4 relative rounded-t-lg"></div>
           <div className="flex justify-between w-64">
             <div className="w-px h-4 bg-white/10"></div>
             <div className="w-px h-4 bg-white/10"></div>
           </div>
        </div>

        {/* EVENTS */}
        <div className="mb-12 relative w-64 flex justify-between">
           <SourceBox icon={<MessageSquare className="w-4 h-4" />} label="Question" sub="Asked" delay={0.6} />
           <SourceBox icon={<AlertTriangle className="w-4 h-4" />} label="Issue" sub="Reported" delay={0.7} />
        </div>

        {/* AI ANALYZES */}
        <div className="mb-12 relative flex flex-col items-center">
           {/* Merge paths */}
           <div className="flex justify-between w-64 mb-2">
             <div className="w-px h-4 bg-white/10"></div>
             <div className="w-px h-4 bg-white/10"></div>
           </div>
           <div className="h-4 w-64 border-x border-white/10 border-b mb-4 relative rounded-b-lg flex justify-center">
              <div className="w-px h-4 bg-white/10 absolute top-full"></div>
           </div>

           <ProcessBox title="AI ANALYZES" subtitle="Context + History" delay={0.8} />
           <AnnotationRight text="← RAG knowledge base" />
           <ConnectingLine delay={0.9} />
        </div>

        {/* DECISION */}
        <div className="mb-12 relative flex flex-col items-center">
           <DiamondBox text="Can resolve?" delay={1.0} />
           
           <div className="flex justify-between w-80 mt-8 relative">
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: 40 }} 
                transition={{ delay: 1.1 }}
                className="w-px bg-[#00C4B4]/50 absolute left-[25%]"
              />
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: 40 }} 
                transition={{ delay: 1.1 }}
                className="w-px bg-white/10 absolute right-[25%]"
              />
              <div className="absolute top-2 left-[15%] text-[10px] text-[#00C4B4] font-bold">YES</div>
              <div className="absolute top-2 right-[15%] text-[10px] text-white/40 font-bold">NO</div>
           </div>
        </div>

        {/* RESOLUTION PATHS */}
        <div className="mb-12 relative w-96 flex justify-between">
           <ProcessBox title="AUTO-RESOLVE" subtitle="(94%)" delay={1.2} highlight />
           <ProcessBox title="ESCALATE" subtitle="TO HUMAN" delay={1.2} />
           <div className="absolute -right-24 top-4 hidden md:block">
              <div className="text-[10px] italic text-white/40">← Only 6% of cases</div>
           </div>
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative flex flex-col items-center">
           <div className="h-8 w-px bg-white/10 mb-4"></div>
           <TimeIndicator text="Avg 2min" position="top" />
           <FinalOutputBox 
             icon={<CheckCircle className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="ISSUE RESOLVED"
             subtitle="Logged & tracked"
             delay={1.4}
           />
        </div>

        <SummaryFooter 
          line1="⚡ 94% AUTONOMOUS RESOLUTION"
          line2="👥 1,000+ USERS • ZERO MANAGEMENT OVERHEAD"
        />
      </div>
    </DiagramContainer>
  );
}

function OmnichannelDistributionDiagram() {
  return (
    <DiagramContainer title="CONTENT MULTIPLICATION SYSTEM" subtitle="One source asset → 100+ platform-optimized variants">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* INPUT */}
        <div className="w-full max-w-3xl mb-12 relative flex flex-col items-center">
          <LabelLeft text="Input" />
          <ProcessBox title="SOURCE VIDEO" subtitle="Uploaded (1)" delay={0.1} />
          <ConnectingLine delay={0.2} />
          <TimeIndicator text="< 5min processing" position="bottom" />
        </div>

        {/* AI ANALYSIS */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="AI ANALYSIS" subtitle="Transcript • Hooks • Scenes" delay={0.3} />
           <AnnotationRight text="← Speech-to-text, Engagement analysis" />
           <ConnectingLine delay={0.4} />
        </div>

        {/* PARALLEL PROCESSING */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="PARALLEL PROCESSING" subtitle="Automated" delay={0.5} />
           
           {/* Branching to 4 */}
           <div className="h-8 w-full max-w-md border-x border-white/10 border-t mt-4 relative rounded-t-lg flex justify-evenly">
             <div className="w-px h-8 bg-white/10 absolute left-1/4"></div>
             <div className="w-px h-8 bg-white/10 absolute right-1/4"></div>
           </div>
        </div>

        {/* FORMATS */}
        <div className="mb-12 relative w-full max-w-md grid grid-cols-4 gap-2">
           <SourceBox icon={<Smartphone className="w-3 h-3" />} label="TikTok" sub="9:16" delay={0.6} />
           <SourceBox icon={<Video className="w-3 h-3" />} label="Reels" sub="9:16" delay={0.7} />
           <SourceBox icon={<Smartphone className="w-3 h-3" />} label="Shorts" sub="9:16" delay={0.8} />
           <SourceBox icon={<Linkedin className="w-3 h-3" />} label="LinkedIn" sub="1:1" delay={0.9} />
        </div>

        {/* SCHEDULING */}
        <div className="mb-12 relative flex flex-col items-center">
           {/* Merge paths */}
           <div className="h-4 w-full max-w-md border-x border-white/10 border-b mb-4 relative rounded-b-lg flex justify-center">
              <div className="w-px h-4 bg-white/10 absolute top-full"></div>
           </div>

           <ProcessBox title="SMART SCHEDULING" subtitle="Optimization" delay={1.0} />
           <AnnotationRight text="← Best times per platform" />
           <ConnectingLine delay={1.1} />
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative">
           <FinalOutputBox 
             icon={<Globe className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="100+ ASSETS LIVE"
             subtitle="Across all channels"
             delay={1.2}
           />
        </div>

        <SummaryFooter 
          line1="⚡ 10x OUTPUT WITH SAME TEAM"
          line2="📈 CONSISTENT BRANDING • AUTOMATED GROWTH"
        />
      </div>
    </DiagramContainer>
  );
}

function RevenueInfrastructureDiagram() {
  return (
    <DiagramContainer title="SECURE REVENUE GUARD" subtitle="Real-time license enforcement & fraud prevention">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* TRIGGER */}
        <div className="w-full max-w-3xl mb-12 relative flex flex-col items-center">
          <LabelLeft text="Trigger" />
          <ProcessBox title="APP LAUNCH" subtitle="User opens software" delay={0.1} />
          <ConnectingLine delay={0.2} />
        </div>

        {/* SESSION VERIFICATION */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="SESSION VERIFICATION" subtitle="Check active sessions" delay={0.3} />
           <AnnotationRight text="← Prevents concurrent usage" />
           <ConnectingLine delay={0.4} />
        </div>

        {/* FRAUD DETECTION */}
        <div className="mb-12 relative flex flex-col items-center">
           <DiamondBox text="Anomaly?" delay={0.5} />
           
           <div className="flex justify-between w-80 mt-8 relative">
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: 40 }} 
                transition={{ delay: 0.6 }}
                className="w-px bg-red-500/50 absolute left-[25%]"
              />
              <motion.div 
                initial={{ height: 0 }} 
                animate={{ height: 40 }} 
                transition={{ delay: 0.6 }}
                className="w-px bg-[#00C4B4]/50 absolute right-[25%]"
              />
              <div className="absolute top-2 left-[15%] text-[10px] text-red-500 font-bold">YES</div>
              <div className="absolute top-2 right-[15%] text-[10px] text-[#00C4B4] font-bold">NO</div>
           </div>
        </div>

        {/* PATHS */}
        <div className="mb-12 relative w-96 flex justify-between">
           <ProcessBox title="BLOCK ACCESS" subtitle="Flag Account" delay={0.7} />
           <ProcessBox title="GRANT ACCESS" subtitle="Log Session" delay={0.7} highlight />
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative flex flex-col items-center">
           <div className="h-8 w-px bg-white/10 mb-4"></div>
           <FinalOutputBox 
             icon={<ShieldCheck className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="REVENUE SECURED"
             subtitle="$2.3M protected"
             delay={0.9}
           />
        </div>

        <SummaryFooter 
          line1="⚡ REVOCATION IN < 5 MINUTES"
          line2="🔒 30% REVENUE LEAKAGE STOPPED"
        />
      </div>
    </DiagramContainer>
  );
}

function ParallelApprovalDiagram() {
  return (
    <DiagramContainer title="PARALLEL DECISION ENGINE" subtitle="Multi-stakeholder routing without bottlenecks">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* INTAKE */}
        <div className="w-full max-w-3xl mb-12 relative flex flex-col items-center">
          <LabelLeft text="Intake" />
          <ProcessBox title="REQUEST SUBMITTED" subtitle="Smart Form" delay={0.1} />
          <ConnectingLine delay={0.2} />
        </div>

        {/* ROUTING LOGIC */}
        <div className="mb-12 relative flex flex-col items-center">
           <DiamondBox text="Value > $5k?" delay={0.3} />
           <div className="absolute top-1/2 left-full ml-8 w-32 hidden md:block">
             <div className="text-[10px] italic text-white/40">← Auto-routing rules</div>
           </div>
           <ConnectingLine delay={0.4} />
        </div>

        {/* PARALLEL APPROVALS */}
        <div className="mb-12 relative flex flex-col items-center">
           <div className="text-[10px] font-mono uppercase text-[#00C4B4] mb-2">Parallel Processing</div>
           
           <div className="h-4 w-64 border-x border-t border-white/10 rounded-t-lg mb-2"></div>
           <div className="flex gap-4">
             <SourceBox icon={<Users className="w-4 h-4" />} label="Finance" sub="Review" delay={0.5} />
             <SourceBox icon={<Users className="w-4 h-4" />} label="Legal" sub="Review" delay={0.6} />
             <SourceBox icon={<Users className="w-4 h-4" />} label="VP" sub="Review" delay={0.7} />
           </div>
           <div className="h-4 w-64 border-x border-b border-white/10 rounded-b-lg mt-2 flex justify-center">
             <div className="w-px h-4 bg-white/10 absolute top-full"></div>
           </div>
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative mt-8">
           <FinalOutputBox 
             icon={<FileCheck className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="APPROVED"
             subtitle="In 4 hours (was 5 days)"
             delay={0.9}
           />
        </div>

        <SummaryFooter 
          line1="⚡ 92% FASTER DECISIONS"
          line2="✅ COMPLETE AUDIT TRAIL • ZERO LOST REQUESTS"
        />
      </div>
    </DiagramContainer>
  );
}

function LogisticsDiagram() {
  return (
    <DiagramContainer title="PREDICTIVE SUPPLY CHAIN" subtitle="AI-driven inventory optimization">
      <div className="relative z-10 flex flex-col items-center">
        
        {/* INPUTS */}
        <div className="w-full max-w-3xl mb-12 relative flex flex-col items-center">
          <LabelLeft text="Data Stream" />
          <div className="flex gap-4">
            <SourceBox icon={<BarChart3 className="w-4 h-4" />} label="Sales" sub="History" delay={0.1} />
            <SourceBox icon={<TrendingUp className="w-4 h-4" />} label="Trends" sub="Market" delay={0.2} />
            <SourceBox icon={<Package className="w-4 h-4" />} label="Stock" sub="Levels" delay={0.3} />
          </div>
          <ConnectingLine delay={0.4} />
        </div>

        {/* PREDICTION ENGINE */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="DEMAND FORECAST" subtitle="ML Model" delay={0.5} />
           <AnnotationRight text="← 98% Accuracy" />
           <ConnectingLine delay={0.6} />
        </div>

        {/* OPTIMIZATION */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="STOCK OPTIMIZATION" subtitle="Reorder Calculation" delay={0.7} />
           <ConnectingLine delay={0.8} />
        </div>

        {/* AUTOMATED ACTION */}
        <div className="mb-12 relative flex flex-col items-center">
           <ProcessBox title="AUTO-REORDER" subtitle="System" delay={0.9} />
           <AnnotationRight text="← Purchase orders created" />
           <ConnectingLine delay={1.0} />
        </div>

        {/* FINAL OUTPUT */}
        <div className="relative">
           <TimeIndicator text="6 months" position="top" />
           <FinalOutputBox 
             icon={<Truck className="w-6 h-6 text-[#00C4B4] mb-2 fill-[#00C4B4]/20" />}
             title="ZERO STOCKOUTS"
             subtitle="$1.2M capital freed"
             delay={1.1}
           />
        </div>

        <SummaryFooter 
          line1="⚡ REAL-TIME ACROSS 8 LOCATIONS"
          line2="💰 $1.2M FREED • ZERO STOCKOUTS (6 MONTHS)"
        />
      </div>
    </DiagramContainer>
  );
}

// --- SHARED COMPONENTS ---

function DiagramContainer({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <div className="w-full relative">
      <div className="relative z-10 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}

function ProcessBox({ title, subtitle, delay, highlight }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`
        w-[180px] h-[70px] rounded-lg flex flex-col items-center justify-center relative z-10 backdrop-blur-sm border
        ${highlight 
          ? 'bg-[#00C4B4]/10 border-[#00C4B4]/50 shadow-[0_0_15px_rgba(0,196,180,0.15)]' 
          : 'bg-white/5 border-white/10'
        }
      `}
    >
      <div className={`text-xs font-bold mb-1 ${highlight ? 'text-white' : 'text-white'}`}>{title}</div>
      <div className="text-[10px] text-white/60">{subtitle}</div>
    </motion.div>
  );
}

function SourceBox({ icon, label, sub, delay, highlight }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`
        flex flex-col items-center justify-center w-[80px] h-[70px] p-2 rounded-lg border
        ${highlight 
          ? 'bg-[#00C4B4]/10 border-[#00C4B4]/30' 
          : 'bg-white/5 border-white/10'
        }
      `}
    >
      <div className={`mb-1 ${highlight ? 'text-[#00C4B4]' : 'text-white/60'}`}>{icon}</div>
      <div className="text-[10px] font-medium text-white/90 text-center leading-tight">{label}</div>
      {sub && <div className="text-[9px] text-white/40 text-center mt-0.5">{sub}</div>}
    </motion.div>
  );
}

function DiamondBox({ text, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="w-[100px] h-[100px] bg-[#00C4B4]/10 border border-[#00C4B4]/30 rotate-45 flex items-center justify-center relative z-10"
    >
      <div className="-rotate-45 text-center">
        <div className="text-[10px] font-bold text-[#00C4B4] leading-tight px-2">{text}</div>
      </div>
    </motion.div>
  );
}

function FinalOutputBox({ icon, title, subtitle, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-[240px] bg-gradient-to-br from-[#00C4B4]/20 to-[#00C4B4]/5 border border-[#00C4B4]/50 rounded-xl p-4 flex flex-col items-center text-center shadow-[0_0_30px_rgba(0,196,180,0.15)]"
    >
      {icon}
      <div className="text-sm font-bold text-white mb-1">{title}</div>
      <div className="text-xs text-white/60">{subtitle}</div>
    </motion.div>
  );
}

function ConnectingLine({ delay }: { delay: number }) {
  return (
    <div className="h-8 w-full flex justify-center relative mt-2">
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.5, delay }}
        className="w-px bg-white/10 absolute top-0"
      />
    </div>
  );
}

function LabelLeft({ text }: { text: string }) {
  return (
    <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono uppercase text-white/30 tracking-widest origin-center whitespace-nowrap hidden md:block">
      {text}
    </div>
  );
}

function AnnotationRight({ text }: { text: string }) {
  return (
    <div className="absolute top-1/2 left-full ml-4 w-32 hidden md:block">
      <div className="text-[10px] italic text-white/40">{text}</div>
    </div>
  );
}

function TimeIndicator({ text, position }: { text: string, position: 'top' | 'bottom' }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className={`absolute ${position === 'top' ? '-top-6' : '-bottom-6'} left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#00C4B4] whitespace-nowrap`}
    >
      {text}
    </motion.div>
  );
}

function SummaryFooter({ line1, line2 }: { line1: string, line2: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="mt-12 pt-6 border-t border-white/10 w-full text-center"
    >
      <div className="text-sm font-bold text-[#00C4B4] mb-1">{line1}</div>
      <div className="text-xs font-mono text-white/50 tracking-wide">{line2}</div>
    </motion.div>
  );
}
