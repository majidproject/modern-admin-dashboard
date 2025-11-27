"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", visitors: 4000, views: 2400 },
  { name: "Tue", visitors: 3000, views: 1398 },
  { name: "Wed", visitors: 2000, views: 9800 },
  { name: "Thu", visitors: 2780, views: 3908 },
  { name: "Fri", visitors: 1890, views: 4800 },
  { name: "Sat", visitors: 2390, views: 3800 },
  { name: "Sun", visitors: 3490, views: 4300 },
];

export default function VisitorsChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Website Traffic</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Unique visitors vs Page views</p>
      </div>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            />
            <Area 
              type="monotone" 
              dataKey="visitors" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorVis)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}