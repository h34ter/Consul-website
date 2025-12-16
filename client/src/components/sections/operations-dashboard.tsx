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
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl interface-card backdrop-blur-sm">
        
        {/* Header Bar */}
        <div className="flex h-[56px] items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 rounded-t-lg">
          <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
            Operations Intelligence
          </div>
          <div className="text-[11px] font-mono text-white/30">
            Live production system. Client name withheld.
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8">
          
          {/* Top Metrics Row - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              value="94%" 
              label="Automation Coverage" 
              subtext="Previously: Manual" 
            />
            <MetricCard 
              value="2.3m" 
              label="Response Time" 
              subtext="Avg: 4-6 hours" 
            />
            <MetricCard 
              value="$847K" 
              label="Active Pipeline" 
              subtext="MoM: +$340K" 
            />
            <MetricCard 
              value="LIVE" 
              label="System Status" 
              subtext="99.97% uptime" 
            />
          </div>

          {/* Interactive Line Chart */}
          <div className="relative h-[280px] w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 overflow-hidden">
             
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#00C4B4" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#00C4B4" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                 <XAxis dataKey="label" hide />
                 <YAxis hide domain={[0, 100]} />
                 <Tooltip 
                    content={<CustomTooltip />} 
                    cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '5 5' }}
                 />
                 <Area 
                   type="monotone" 
                   dataKey="y" 
                   stroke="#00C4B4" 
                   strokeWidth={3}
                   fillOpacity={1} 
                   fill="url(#chartGradient)" 
                   activeDot={{ r: 6, fill: '#00C4B4', stroke: '#fff', strokeWidth: 2 }}
                   dot={{ r: 0, fill: '#00C4B4', strokeWidth: 0 }}
                   animationDuration={2000}
                   animationEasing="ease-out"
                 />
               </AreaChart>
             </ResponsiveContainer>

             {/* Chart Overlay Title */}
             <div className="absolute top-4 left-6 pointer-events-none">
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Live Efficiency Trend</div>
             </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-6 flex justify-between items-center text-[13px] text-white/40 font-mono">
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
      </div>
    </div>
  );
}

function MetricCard({ value, label, subtext }: { value: string, label: string, subtext: string }) {
  return (
    <div className="flex flex-col justify-center px-6 py-5 rounded-xl border border-white/10 bg-white/[0.03] transition-colors">
      <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">{label}</div>
      <div className="text-[32px] font-bold text-white tracking-tight leading-none mb-2">{value}</div>
      <div className="text-[13px] font-normal text-white/30">{subtext}</div>
    </div>
  );
}
