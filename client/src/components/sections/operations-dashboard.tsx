import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion } from "framer-motion";

const chartData = [
  { x: 0, y: 15, insight: 'Only 15% of businesses have real automation infrastructure', label: 'Market Average' },
  { x: 1, y: 28, insight: '28% reduction in operational overhead within 60 days', label: 'Day 60' },
  { x: 2, y: 47, insight: '47% of business operations identified as fully automatable', label: 'Audit Complete' },
  { x: 3, y: 52, insight: '52% faster client response times post-deployment', label: 'System Live' },
  { x: 4, y: 78, insight: '78% of decisions now handled without human intervention', label: 'Month 3' },
  { x: 5, y: 94, insight: '94% automation rate achieved. Business runs itself.', label: 'Optimized' }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/90 dark:bg-black/90 bg-white/90 border border-[#00C4B4]/50 rounded-lg p-4 max-w-[280px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
        <div className="text-2xl font-bold text-[#00C4B4] mb-1">{data.y}%</div>
        <div className="text-[13px] font-light text-black/80 dark:text-white/80 leading-snug">{data.insight}</div>
        <div className="text-[10px] font-semibold text-black/50 dark:text-white/50 uppercase tracking-widest mt-2">{data.label}</div>
      </div>
    );
  }
  return null;
};

export function OperationsDashboard() {
  return (
    <div className="relative w-full max-w-[1000px] mx-auto perspective-container">
      <div className="relative overflow-hidden rounded-2xl border border-[#00C4B4]/30 bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] dark:from-[#0a0a0a] dark:to-[#1a1a1a] shadow-[0_20px_60px_rgba(0,196,180,0.2)] interface-card">
        
        {/* Header Bar */}
        <div className="flex h-[56px] items-center justify-between border-b border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-white/[0.03] px-6 rounded-t-lg">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/50 dark:text-white/50">
            Competitive Advantage Monitor
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500/80" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 rounded-full bg-[#00C4B4] animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-[#00C4B4] shadow-[0_0_8px_rgba(0,196,180,0.8)]" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8">
          
          {/* Top Metrics Row - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <MetricCard 
              icon="⚡" 
              value="94%" 
              label="Automation Rate" 
              subtext="↑86% from manual" 
            />
            <MetricCard 
              icon="⏱" 
              value="2.3min" 
              label="Avg Response" 
              subtext="was 24hr" 
            />
            <MetricCard 
              icon="💰" 
              value="$847K" 
              label="Pipeline Value" 
              subtext="+$340K/mo" 
            />
            <MetricCard 
              icon="🎯" 
              value="LIVE" 
              label="System Status" 
              subtext="24/7 • 0 downtime" 
            />
          </div>

          {/* Interactive Line Chart */}
          <div className="relative h-[280px] w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl p-4 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[#00C4B4]/5 to-transparent opacity-20 pointer-events-none" />
             
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#00C4B4" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#00C4B4" stopOpacity={0}/>
                   </linearGradient>
                   <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                     <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                   </filter>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128,128,128,0.1)" />
                 <XAxis dataKey="label" hide />
                 <YAxis hide domain={[0, 100]} />
                 <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ stroke: 'rgba(128,128,128,0.2)', strokeWidth: 1, strokeDasharray: '5 5' }}
                 />
                 <Area 
                   type="monotone" 
                   dataKey="y" 
                   stroke="#00C4B4" 
                   strokeWidth={3}
                   fillOpacity={1} 
                   fill="url(#chartGradient)" 
                   activeDot={{ r: 8, fill: '#00C4B4', stroke: '#fff', strokeWidth: 2 }}
                   dot={{ r: 4, fill: '#00C4B4', strokeWidth: 0 }}
                   filter="url(#glow)"
                   animationDuration={2000}
                   animationEasing="ease-out"
                 />
               </AreaChart>
             </ResponsiveContainer>

             {/* Chart Overlay Title */}
             <div className="absolute top-4 left-6 pointer-events-none">
                <div className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-bold mb-1">Live Efficiency Trend</div>
             </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-6 flex justify-between items-center text-[13px] text-black/40 dark:text-white/40 font-mono">
            <span>"The infrastructure satisfying clients."</span>
            <span className="flex items-center gap-1.5 text-[#00C4B4]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C4B4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00C4B4]"></span>
              </span>
              Live
            </span>
          </div>

        </div>

        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00C4B4]/5 via-transparent to-transparent opacity-20" />
      </div>
    </div>
  );
}

function MetricCard({ icon, value, label, subtext }: { icon: string, value: string, label: string, subtext: string }) {
  return (
    <div className="flex flex-col justify-center px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 h-[80px] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-colors group">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-lg opacity-80">{icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 dark:text-white/40">{label}</span>
      </div>
      <div className="flex items-end gap-2">
         <div className="text-2xl font-bold text-black dark:text-white tracking-tight leading-none">{value}</div>
         <div className="text-[10px] font-medium text-[#00C4B4]/80 mb-0.5">{subtext}</div>
      </div>
    </div>
  );
}
