"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  Users,
  MessageCircle,
  Info,
  Send,
  Star,
} from "lucide-react";

const Page: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const semesterButtons = [
    { label: "Sem 1", href: "/sem-1", icon: "1" },
    { label: "Sem 2", href: "/sem-2", icon: "2" },
    { label: "Sem 3", href: "/sem-3", icon: "3" },
    { label: "Sem 4", href: "/sem-4", icon: "4" },
    { label: "Sem 5", href: "/sem-5", icon: "5" },
    { label: "Sem 6", href: "/sem-6", icon: "6" },
    { label: "Sem 7", href: "/sem-7", icon: "7" },
    { label: "Sem 8", href: "/sem-8", icon: "8" },
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
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black">
      <div className="relative flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          {/* Update Banner */}
          <Link href="/new" className="group flex flex-wrap items-center justify-center gap-2.5 mb-8 border border-indigo-200/50 dark:border-indigo-800/50 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm pl-5 pr-2 py-2 text-sm text-gray-700 dark:text-gray-300 max-w-full hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/50">
            <div className="flex items-center">
              <p className="font-medium">T9 has been updated</p>
            </div>
            <div className="flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700 rounded-full px-4 py-1.5 whitespace-nowrap hover:bg-indigo-200 dark:hover:bg-indigo-900/70 transition-colors">
              <p className="font-medium text-indigo-700 dark:text-indigo-300">
                What's new
              </p>
              <ChevronRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold max-w-5xl text-gray-800 dark:text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                T9
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl text-center text-gray-600 dark:text-gray-300 leading-relaxed">
              Your comprehensive platform for accessing{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Question Banks
              </span>
              ,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Assignments
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Practicals
              </span>
              , and more
            </p>
          </div>

          {/* Semester Grid */}
          <div className="w-full max-w-6xl mb-12">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Choose Your Semester
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {semesterButtons.map((sem, index) => (
                    <Link
                      key={sem.href}
                      href={sem.href}
                      className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl font-bold text-indigo-400 transition-colors group-hover:bg-white/20 group-hover:text-indigo-300">
                        {sem.icon}
                      </div>
                      <p className="font-medium text-gray-300 transition-colors group-hover:text-white">
                        {sem.label}
                      </p>
                    </Link>
                  ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-4xl">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Users className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Connect & Contribute
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {actionButtons.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-gray-400 transition-all group-hover:bg-white/20 group-hover:text-gray-300">
                    <action.icon className="h-6 w-6" />
                  </div>
                  <p className="mb-1 font-semibold text-white transition-colors group-hover:text-white">
                    {action.label}
                  </p>
                  <p className="text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                    {action.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
