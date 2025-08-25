"use client";

import Link from "next/link";
import React from "react";
import { BookOpen, Users, MessageCircle, Info, Send, Star } from "lucide-react";

const Page: React.FC = () => {
  const semesterButtons = [
    { label: "Sem 1", href: "/sem-1" },
    { label: "Sem 2", href: "/sem-2" },
    { label: "Sem 3", href: "/sem-3" },
    { label: "Sem 4", href: "/sem-4" },
    { label: "Sem 5", href: "/sem-5" },
    { label: "Sem 6", href: "/sem-6" },
    { label: "Sem 7", href: "/sem-7" },
    { label: "Sem 8", href: "/sem-8" },
  ];

  const actionButtons = [
    {
      label: "Join WhatsApp Group",
      href: "/about",
      icon: MessageCircle,
      description: "Connect with peers",
    },
    {
      label: "Submit Material",
      href: "/contact",
      icon: Send,
      description: "Share resources",
    },
    {
      label: "Feedback & Queries",
      href: "/privacy",
      icon: Star,
      description: "Help us improve",
    },
    {
      label: "About T9",
      href: "/careers",
      icon: Info,
      description: "Learn more",
    },
  ];

  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 mt-8">
            Welcome to T9
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your comprehensive platform for accessing Question Banks,
            Assignments, Practicals, and more
          </p>
        </div>

        {/* Semester Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Choose Your Semester
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {semesterButtons.map((sem) => (
              <Link
                key={sem.href}
                href={sem.href}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <p className="text-center font-medium text-gray-800 dark:text-white">
                  {sem.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div>
          <div className="flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Connect & Contribute
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actionButtons.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 p-3 rounded-full bg-blue-50 dark:bg-blue-900/30">
                    <action.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="mb-1 font-semibold text-gray-800 dark:text-white">
                    {action.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
