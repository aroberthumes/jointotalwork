"use client";

import React from "react";

const Pricing = () => (
  <section id="pricing" className="flex justify-center gap-[15%] p-8 bg-gray-50 flex-col md:flex-row items-center md:items-stretch">
    {/* Basic Plan Pricing Card */}
    <div className="bg-white rounded-lg p-6 w-[280px] shadow-md text-center mb-4 md:mb-0">
      <h3 className="text-4xl font-bold mb-1">$2</h3>
      <p className="text-xl text-gray-700 mb-4">per user / month</p>
      <p className="text-sm font-medium mb-4">
        For teams of up to 30 employees, access all features with no hidden fees or limits.
      </p>
      <button className="bg-blue-600 text-white border-none py-3 px-6 rounded cursor-pointer text-base font-bold mb-4 hover:bg-blue-700">
        Get Started Today
      </button>
      <hr className="border-t border-gray-200 my-4" />
      <div>
        <h4 className="text-base font-bold mb-2">What&apos;s Included:</h4>
        <ul className="list-none p-0 m-0">
          {[
            "Customer Reservations",
            "Shift Swap Marketplace",
            "PTO Requests",
            "Timesheets with Geo-Fencing",
            "Auto Scheduling Logic",
            "Communication Service",
          ].map((feature, index) => (
            <li key={index} className="text-sm my-2 flex items-center text-left">
              <span className="text-green-600 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Enterprise Pricing Card */}
    <div className="bg-white rounded-lg p-6 w-[280px] shadow-md text-center">
      <h3 className="text-4xl font-bold mb-1">Enterprise</h3>
      <p className="text-xl text-gray-700 mb-4">Custom Pricing</p>
      <p className="text-base font-medium mb-8">
        Have more than 30 employees? Contact us for tailored pricing.
      </p>
      <button className="bg-blue-600 text-white border-none py-3 px-6 rounded cursor-pointer text-base font-bold mb-4 hover:bg-blue-700">
        Contact Us
      </button>
      <hr className="border-t border-gray-200 my-4" />
      <div>
        <h4 className="text-base font-bold mb-2">What&apos;s Included:</h4>
        <ul className="list-none p-0 m-0">
          {[
            "Every feature included.",
            "Updates automatically included.",
            "Scalable to your growing needs.",
            "Everything for everyone.",
          ].map((feature, index) => (
            <li key={index} className="text-sm my-2 flex items-center text-left">
              <span className="text-green-600 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;