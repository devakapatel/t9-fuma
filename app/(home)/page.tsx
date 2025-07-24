import React from "react";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-4xl font-bold text-center text-blue-600 mb-8">
        Welcome to Our Website
      </div>

      <div className="text-lg text-center text-gray-700 mb-16">
        Discover the best products and services tailored just for you.
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="text-2xl font-semibold text-gray-800 mb-4">
          Get Started Today
        </div>
        <p className="text-gray-600 mb-8">
          Join our community and start exploring the benefits.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Page;
