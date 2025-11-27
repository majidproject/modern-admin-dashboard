"use client";

import { useState } from "react";
import { User, Bell, Shield, Save } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SettingsForm Component
 * Manages user profile, notifications, and security settings using client-side tabs.
 */
export default function SettingsForm() {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Sidebar Navigation for Settings */}
      <div className="w-full lg:w-64 shrink-0">
        <div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-950">
          <button
            onClick={() => setActiveTab("profile")}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              activeTab === "profile"
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"
            )}
          >
            <User className="h-4 w-4" />
            Profile
          </button>
          {/* ... Other buttons (Notifications, Security) ... */}
          <button
            onClick={() => setActiveTab("notifications")}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              activeTab === "notifications"
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"
            )}
          >
            <Bell className="h-4 w-4" />
            Notifications
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              activeTab === "security"
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900"
            )}
          >
            <Shield className="h-4 w-4" />
            Security
          </button>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        {/* Tab 1: Profile Form */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Profile Information
              </h3>
              <p className="text-sm text-gray-500">
                Update your account&apos;s profile information and email
                address.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* First Name */}
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  defaultValue="Majid"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  defaultValue="Dev"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="majid@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Notifications */}
        {activeTab === "notifications" && (
          <div className="text-center py-10">
            <Bell className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
              No notifications settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This section is under construction.
            </p>
          </div>
        )}

        {/* Tab 3: Security */}
        {activeTab === "security" && (
          <div className="text-center py-10">
            <Shield className="mx-auto h-12 w-12 text-gray-300" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
              Security Settings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Change password feature coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
