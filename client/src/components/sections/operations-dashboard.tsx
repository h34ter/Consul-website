import { motion } from "framer-motion";

export function OperationsDashboard() {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto perspective-container">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] shadow-[0_20px_60px_rgba(16,185,129,0.2)] interface-card">
        
        {/* Header Bar */}
        <div className="flex h-[56px] items-center justify-between border-b border-white/5 bg-white/[0.03] px-6 rounded-t-lg">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
            Operations Dashboard
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 rounded-full bg-primary animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            
            {/* Card 1: AUTOMATION RATE */}
            <DashboardCard 
              icon="⚡" 
              label="Automation Rate" 
              value="94%" 
              change="↑ 86% from manual" 
              changeColor="text-primary"
            />

            {/* Card 2: RESPONSE TIME */}
            <DashboardCard 
              icon="⏱️" 
              label="Response Time" 
              value="2.3min" 
              subtext="(was 24hr)"
              change="↓ 91% faster" 
              changeColor="text-primary"
            />

            {/* Card 3: PIPELINE VALUE */}
            <DashboardCard 
              icon="💰" 
              label="Pipeline Value" 
              value="$847K" 
              change="+$340K this month" 
              changeColor="text-primary"
            />

            {/* Card 4: SYSTEM STATUS */}
            <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 bg-white/5 h-[140px] hover:bg-white/[0.08] transition-colors group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">System Status</span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1 tracking-tight">OPERATIONAL</div>
                <div className="text-[13px] font-normal text-white/60">24/7 • Zero downtime</div>
              </div>
            </div>

          </div>

          {/* Bottom Tagline */}
          <div className="mt-8 text-center">
            <p className="text-[15px] font-medium italic text-white/70">
              Zero manual work. Total operational control.
            </p>
          </div>
        </div>

        {/* Live Indicator */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </div>
          <span className="text-[11px] font-bold text-primary tracking-wide">Live</span>
        </div>

        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-30" />
      </div>
    </div>
  );
}

function DashboardCard({ icon, label, value, subtext, change, changeColor }: { icon: string, label: string, value: string, subtext?: string, change: string, changeColor: string }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-xl border border-white/10 bg-white/5 h-[140px] hover:bg-white/[0.08] transition-colors group">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className="text-xl text-primary/80">{icon}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">{label}</span>
        </div>
      </div>
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{value}</div>
          {subtext && <div className="text-sm font-normal text-white/40">{subtext}</div>}
        </div>
        <div className={`text-[13px] font-medium ${changeColor}`}>
          {change}
        </div>
      </div>
    </div>
  );
}
