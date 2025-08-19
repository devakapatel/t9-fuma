import React from "react";
import Link from "next/link";
import {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardDescription,
  CustomCardContent,
} from "../../components/ui/card";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to T9</h1>
        </div>

        {/* Migration Notice */}
        <div className="bg-gray-800 border-l-4 border-yellow-500 p-4 rounded-lg mb-8 text-left shadow-md">
          <p className="text-gray-300">
            <strong className="text-yellow-500">Notice:</strong> New site under
            construction. is under construction. site is being prepared. For the
            old site, visit{" "}
            <a
              href="https://t9-old.pages.dev"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              t9-old.pages.dev
            </a>
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid gap-6 w-full max-w-md">
          <CustomCard className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors duration-300 shadow-md">
            <CustomCardHeader>
              <CustomCardTitle className="text-2xl text-blue-400 mb-1">
                Semester 7
              </CustomCardTitle>
              <CustomCardDescription className="text-gray-400">
                Comprehensive resources for advanced learning
              </CustomCardDescription>
            </CustomCardHeader>
            <CustomCardContent>
              <Link
                href="/sem-7"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                Access Semester 7 Materials
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </CustomCardContent>
          </CustomCard>
        </div>
      </main>
    </div>
  );
};

export default Page;
