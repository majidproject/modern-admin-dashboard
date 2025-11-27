"use client";

import { cn } from "@/lib/utils"; 

const RECENT_SALES = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    status: "Success",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
    status: "Processing",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jackson",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.ng@email.com",
    amount: "+$299.00",
    status: "Success",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
    status: "Failed",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=William",
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
    status: "Success",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
  },
];

export default function SalesTable() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Recent Sales</h3>
      
      <div className="flex flex-col gap-4 overflow-y-auto pr-2">
        {RECENT_SALES.map((sale) => (
          <div key={sale.id} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0 dark:border-gray-800">
            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sale.img} alt={sale.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{sale.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{sale.email}</p>
              </div>
            </div>

            {/* Amount & Status */}
            <div className="text-right">
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{sale.amount}</p>
              
              <p className={cn(
                "text-xs font-medium",
                sale.status === 'Success' && "text-gray-500",
                sale.status === 'Processing' && "text-amber-500",
                sale.status === 'Failed' && "text-red-500"
              )}>
                {sale.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}