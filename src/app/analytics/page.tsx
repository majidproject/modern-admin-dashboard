import VisitorsChart from "@/components/analytics/VisitorsChart";
import StatsCard from "@/components/dashboard/StatsCard"; 
import { Eye, MousePointer, TrendingUp, Clock } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Detailed breakdown of your performance metrics.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Page Views" value="1.2M" icon={Eye} trend="+12%" trendUp={true} />
        <StatsCard title="Bounce Rate" value="42.3%" icon={TrendingUp} trend="-2%" trendUp={true} />
        <StatsCard title="Avg. Duration" value="4m 32s" icon={Clock} trend="+14s" trendUp={true} />
        <StatsCard title="Clicks" value="842k" icon={MousePointer} trend="+5%" trendUp={true} />
      </div>

      {/* Main Chart */}
      <VisitorsChart />
    </div>
  );
}