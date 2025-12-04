"use client";

import { Bell, Search, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const { setTheme } = useTheme();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-950 md:px-8">
      {/* Left Side: Mobile Menu Button & Search */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Menu Trigger */}
        <button 
          onClick={toggleSidebar}
          className="rounded-lg p-2 hover:bg-gray-100 md:hidden dark:hover:bg-gray-800"
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-64 rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme => theme === "dark" ? "light" : "dark")}
          className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>

        {/* Notifications Button */}
        <button 
          className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
          aria-label="View notifications" 
        > 
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-950" />
        </button>
        
        {/* Avatar Placeholder */}
        <div className="ml-2 h-8 w-8 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Majid" alt="Profile" />
        </div>
      </div>
    </header>
  );
}