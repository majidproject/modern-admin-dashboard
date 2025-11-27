import { Users, DollarSign, ShoppingBag, Activity } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SalesTable from "@/components/dashboard/SalesTable";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* 1. Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Overview of your store&apos;s performance.
        </p>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          trend="+20.1%"
          trendUp={true}
        />
        <StatsCard
          title="Active Users"
          value="+2,350"
          icon={Users}
          trend="+180.1%"
          trendUp={true}
        />
        <StatsCard
          title="Sales"
          value="+12,234"
          icon={ShoppingBag}
          trend="+19%"
          trendUp={true}
        />
        <StatsCard
          title="Active Now"
          value="+573"
          icon={Activity}
          trend="+201 since last hour"
          trendUp={true}
        />
      </div>

      {/* 3. Charts & Tables Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevenueChart />
        <SalesTable />  
      </div>
    </div>
  );
}
