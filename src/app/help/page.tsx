import FaqList from "@/components/help/FaqList";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Help Center
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Need assistance? We are here to help.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-3 rounded-full bg-blue-50 p-3 dark:bg-blue-900/20">
            <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Call Support
          </h3>
          <p className="mt-1 text-xs text-gray-500">+1 (555) 123-4567</p>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/20 dark:bg-gray-950">
          <div className="mb-3 rounded-full bg-emerald-50 p-3 dark:bg-emerald-900/20">
            <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Email Us
          </h3>
          <p className="mt-1 text-xs text-gray-500">support@majid.dev</p>
        </div>

        <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-3 rounded-full bg-purple-50 p-3 dark:bg-purple-900/20">
            <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Live Chat
          </h3>
          <p className="mt-1 text-xs text-gray-500">Available 9am - 5pm</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-4">
        <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h3>
        <FaqList />
      </div>
    </div>
  );
}
