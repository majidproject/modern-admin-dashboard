"use client";

import { MoreHorizontal, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive" | "Banned";
  totalSpent: string;
  lastActive: string;
  img: string;
}

const CUSTOMERS: Customer[] = [
  {
    id: "CUS-001",
    name: "Michael Foster",
    email: "michael.foster@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    totalSpent: "$2,450.00",
    lastActive: "Just now",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: "CUS-002",
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    phone: "+1 (555) 987-6543",
    status: "Active",
    totalSpent: "$1,900.00",
    lastActive: "2 mins ago",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lindsay",
  },
  {
    id: "CUS-003",
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    totalSpent: "$450.00",
    lastActive: "3 days ago",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Whitney",
  },
  {
    id: "CUS-004",
    name: "Leonard Krasner",
    email: "leonard.krasner@example.com",
    phone: "+1 (555) 000-1111",
    status: "Banned",
    totalSpent: "$0.00",
    lastActive: "1 month ago",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leonard",
  },
  {
    id: "CUS-005",
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    phone: "+1 (555) 222-3333",
    status: "Active",
    totalSpent: "$8,500.00",
    lastActive: "1 hour ago",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
  },
];

export default function CustomersTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Customers</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total 1,240 customers</p>
        </div>
        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Total Spent</th>
              <th className="px-6 py-4 font-medium">Last Active</th>
              <th className="px-6 py-4 font-medium text-right">Quick Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {CUSTOMERS.map((customer) => (
              <tr key={customer.id} className="group hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={customer.img} alt={customer.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 dark:text-white">{customer.name}</span>
                      <span className="text-xs text-gray-500">{customer.email}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "h-2 w-2 rounded-full",
                      customer.status === "Active" && "bg-emerald-500",
                      customer.status === "Inactive" && "bg-gray-300",
                      customer.status === "Banned" && "bg-red-500"
                    )} />
                    <span className="text-gray-600 dark:text-gray-300">{customer.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{customer.totalSpent}</td>
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{customer.lastActive}</td>
                
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      className="rounded-lg p-2 text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400"
                      aria-label="Send email"
                      title={`Email: ${customer.email}`}
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                    <button 
                      className="rounded-lg p-2 text-gray-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                      aria-label="Call customer"
                      title={`Call: ${customer.phone}`}
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                    <button 
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                      aria-label="More options"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}