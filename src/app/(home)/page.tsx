"use client";

import Link from "next/link";
import React from "react";
import {
  BookOpen,
  Users,
  MessageCircle,
  Info,
  Send,
  Star,
  Megaphone,
} from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/src/app/layout.config";

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
      href: "https://chat.whatsapp.com/JuvHVkzVjc41ywITKe23h0",
      icon: MessageCircle,
      description: "Connect with peers",
    },
    {
      label: "Submit Material",
      href: "https://tally.so/r/nr6d2N",
      icon: Send,
      description: "Share resources",
    },
    {
      label: "Feedback & Queries",
      href: "https://tally.so/r/w48opO",
      icon: Star,
      description: "Help us improve",
    },
    {
      label: "About T9",
      href: "/about",
      icon: Info,
      description: "Learn more",
    },
  ];

  const announcements = [
    {
      href: "https://play.google.com/store/apps/details?id=com.nikk797edu.scoop",
      text: "Check out my friend's app Scoop on Google Play",
      icon: Megaphone,
    },
  ];

  return (
    <HomeLayout {...baseOptions}>
      <div className="container mx-auto px-4 py-8">
        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-fd-foreground mb-4 mt-8">
            Welcome to T9
          </h1>
          <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto">
            Your comprehensive platform for accessing Question Banks,
            Assignments, Practicals, and more
          </p>
        </div>

        {/* Announcements */}
        {announcements.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="block mb-8 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-fd-card p-4 rounded-lg shadow border border-fd-border flex items-center justify-center gap-3 hover:shadow-md transition-shadow">
              <a.icon className="w-5 h-5 text-fd-primary" />
              <span className="text-fd-foreground font-medium group-hover:underline">
                {a.text}
              </span>
            </div>
          </Link>
        ))}

        {/* Semester Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-fd-primary mr-2" />
            <h2 className="text-xl font-semibold text-fd-foreground">
              Choose Your Semester
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {semesterButtons.map((sem) => (
              <Link
                key={sem.href}
                href={sem.href}
                className="bg-fd-card p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-fd-border"
              >
                <p className="text-center font-medium text-fd-foreground">
                  {sem.label}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div>
          <div className="flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-fd-muted-foreground mr-2" />
            <h2 className="text-xl font-semibold text-fd-foreground">
              Connect & Contribute
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actionButtons.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="bg-fd-card p-5 rounded-lg shadow hover:shadow-md transition-shadow border border-fd-border"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 p-3 rounded-full bg-fd-secondary">
                    <action.icon className="h-6 w-6 text-fd-primary" />
                  </div>
                  <p className="mb-1 font-semibold text-fd-foreground">
                    {action.label}
                  </p>
                  <p className="text-sm text-fd-muted-foreground text-center">
                    {action.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Page;
