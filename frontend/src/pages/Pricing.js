import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <div className="max-w-5xl w-full p-8 bg-white shadow-md border border-orange-200">
        <h2 className="text-3xl font-semibold text-orange-600 mb-10 text-center">
          Our Plans
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="bg-white border border-orange-300 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Basic Plan</h3>
            <p className="text-gray-700 mb-4">Perfect for students or job seekers who want to understand their resume better.</p>
            <ul className="text-gray-600 mb-4">
              <li>Basic Resume Analysis</li>
              <li>Keyword Matching with Job Description</li>
              <li>SWOT Analysis Overview</li>
              <li>LeetCode Profile Integration (Basic Insights)</li>
            </ul>
            <p className="text-xl font-semibold text-orange-600 mb-6">₹0 (Free)</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white border border-orange-300 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Pro Plan</h3>
            <p className="text-gray-700 mb-4">Enhance your profile insights and gain a competitive edge.</p>
            <ul className="text-gray-600 mb-4">
              <li>Advanced Resume Analysis with AI Agents</li>
              <li>Detailed SWOT Analysis</li>
              <li>Profile Integration: LeetCode, GitHub, LinkedIn</li>
              <li>AI-based Job Description Matching</li>
              <li>Custom Recommendations for Improvement</li>
            </ul>
            <p className="text-xl font-semibold text-orange-600 mb-6">₹2,499/month or ₹24,999/year</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-orange-300 shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">Enterprise Plan</h3>
            <p className="text-gray-700 mb-4">Empower your recruitment process with AI-driven candidate analysis.</p>
            <ul className="text-gray-600 mb-4">
              <li>Bulk Resume Analysis for up to 500 resumes/month</li>
              <li>AI Agents for LeetCode, GitHub, LinkedIn, Google Scholar</li>
              <li>Custom SWOT Analysis Reports</li>
              <li>ATS Integration Support</li>
              <li>Detailed Candidate Ranking Reports</li>
              <li>Dedicated Support and Analytics Dashboard</li>
            </ul>
            <p className="text-xl font-semibold text-orange-600 mb-6">Custom Pricing</p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 text-xl mb-4">Start Today and Unlock the Full Potential of Your Resume or Recruitment Process</p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
