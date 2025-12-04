"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants"; 
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* --- Mobile Backdrop Overlay --- */}
      {/* Visible only on mobile when the menu is open. Clicking it closes the menu. */}
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* --- Sidebar Container --- */}
      <aside
        className={cn(
          // Base styles
          "flex h-screen w-72 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
          // Mobile Positioning: Fixed & Off-canvas logic
          "fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out md:static md:translate-x-0",
          // Slide in/out logic based on isOpen state
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* 1. Header / Logo Section */}
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6 dark:border-gray-900">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              M
            </div>
            <span>Majid<span className="text-emerald-600">Dev</span></span>
          </div>

          {/* Close Button (Mobile Only) */}
          <button 
            onClick={onClose}
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* 2. Navigation Section */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose} // Close sidebar on link click (mobile UX)
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-200 dark:shadow-none"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  )}
                >
                  <Icon
                    size={20}
                    className={cn(
                      "transition-colors",
                      isActive ? "text-white" : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    )}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 3. Footer / User Profile Section */}
        <div className="border-t border-gray-100 p-4 dark:border-gray-900">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-900">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-gray-200 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Majid" 
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Majid Admin</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Pro License</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}