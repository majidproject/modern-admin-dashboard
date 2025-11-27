"use client";

import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How do I change my account password?",
    answer: "You can update your password in the Settings page under the Security tab. Click on 'Change Password' and follow the instructions.",
  },
  {
    question: "Can I export my sales data?",
    answer: "Yes! Go to the Orders or Customers page and click the 'Export' button in the top right corner. The data will be downloaded as a CSV file.",
  },
  {
    question: "How do I add a new team member?",
    answer: "Currently, this feature is limited to Admin accounts. Please contact support to add more seats to your plan.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your data. Check our Privacy Policy for more details.",
  },
];

export default function FaqList() {
  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => (
        <details
          key={index}
          className="group rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 dark:text-white">
            <h2 className="font-medium">{faq.question}</h2>
            <ChevronDown className="h-5 w-5 text-gray-500 transition duration-300 group-open:-rotate-180" />
          </summary>

          <p className="px-4 pb-4 pt-0 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}