import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E3440] via-[#3B4252] to-[#434C5E] text-[#ECEFF4]">
      {/* Main Content */}
      <main className="flex flex-col justify-center items-center px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-6xl font-bold text-[#88C0D0] mb-8 leading-tight">
            Welcome to <span className="text-[#81A1C1]">T9</span>
          </h1>

          {/* Migration Notice */}
          <div className="bg-[#4C566A] border-l-4 border-[#EBCB8B] p-6 rounded-r-lg mb-12 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#EBCB8B]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-[#E5E9F0]">
                  <strong className="text-[#EBCB8B]">
                    Site Migration in Progress:
                  </strong>{" "}
                  New site has been prepared and migration is in progress. To
                  access the old site, please visit{" "}
                  <a
                    href="https://t9-old.pages.dev"
                    className="text-[#88C0D0] hover:text-[#81A1C1] underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    t9-old.pages.dev
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
          <div className="bg-[#4C566A] rounded-lg p-8 hover:bg-[#5E81AC] transition-all duration-300 group">
            <h3 className="text-2xl font-semibold text-[#88C0D0] mb-4 group-hover:text-[#ECEFF4]">
              Semester 7
            </h3>
            <p className="text-[#E5E9F0] mb-6">
              Dive into advanced topics with comprehensive study materials and
              assignments.
            </p>
            <Link
              href="/sem-7"
              className="inline-flex items-center text-[#88C0D0] group-hover:text-[#ECEFF4] font-medium"
            >
              Explore Semester 7
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
