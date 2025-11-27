"use client";

import { ArrowUpDown, Eye, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// (Mock Data)
const ORDERS = [
  { id: "ORD-007", customer: "Liam Johnson", date: "Nov 27, 2025", amount: "$250.00", status: "Paid" },
  { id: "ORD-006", customer: "Emma Wilson", date: "Nov 26, 2025", amount: "$120.50", status: "Pending" },
  { id: "ORD-005", customer: "Noah Brown", date: "Nov 25, 2025", amount: "$750.00", status: "Paid" },
  { id: "ORD-004", customer: "Olivia Davis", date: "Nov 24, 2025", amount: "$45.00", status: "Cancelled" },
  { id: "ORD-003", customer: "Sophia Miller", date: "Nov 23, 2025", amount: "$1,200.00", status: "Paid" },
  { id: "ORD-002", customer: "James Anderson", date: "Nov 22, 2025", amount: "$60.00", status: "Pending" },
  { id: "ORD-001", customer: "Mia Thomas", date: "Nov 21, 2025", amount: "$320.00", status: "Paid" },
];

export default function OrdersTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {/* Table Header / Filters */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">All Orders</h3>
        <div className="flex gap-2">
          <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900">
            Filter
          </button>
          <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700">
            Export
          </button>
        </div>
      </div>

      {/* The Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium cursor-pointer flex items-center gap-1">
                Amount <ArrowUpDown className="h-3 w-3" />
              </th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {ORDERS.map((order) => (
              <tr key={order.id} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{order.customer}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{order.date}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.amount}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                    order.status === "Paid" && "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                    order.status === "Pending" && "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                    order.status === "Cancelled" && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  )}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="p-1 text-gray-400 hover:text-emerald-600" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-500" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 p-4 px-6 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">50</span> results
        </p>
        <div className="flex gap-2">
          <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-600 disabled:opacity-50 dark:border-gray-700 dark:text-gray-400" disabled>
            Previous
          </button>
          <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}