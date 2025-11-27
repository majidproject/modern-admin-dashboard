import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export default function StatsCard({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/20">
          <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center gap-1 text-xs">
          <span
            className={cn(
              "font-medium",
              trendUp ? "text-emerald-600" : "text-red-500"
            )}
          >
            {trend}
          </span>
          <span className="text-gray-500 dark:text-gray-400">vs last month</span>
        </div>
      )}
    </div>
  );
}