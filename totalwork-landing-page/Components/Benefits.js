"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
  {
    icon: "/path/to/icon1.png",
    alt: "Intuitive Interface",
    description:
      "Intuitive and user-friendly design makes it easy for managers and employees to get started quickly.",
  },
  {
    icon: "/path/to/icon2.png",
    alt: "Real-Time Communication",
    description:
      "Real-time messaging and notifications keep everyone connected, reducing miscommunication and errors.",
  },
  {
    icon: "/path/to/icon3.png",
    alt: "Employee Empowerment",
    description:
      "Employees can view their schedules, request shift swaps, and manage PTO, all from a single, accessible platform.",
  },
  {
    icon: "/path/to/icon4.png",
    alt: "Mobile Accessibility",
    description:
      "Manage schedules, clock in/out, and request PTO from anywhere with our mobile-friendly design.",
  },
  {
    icon: "/path/to/icon5.png",
    alt: "Reduced Administrative Workload",
    description:
      "Automated scheduling and streamlined workflows reduce the time managers spend on repetitive tasks.",
  },
  {
    icon: "/path/to/icon6.png",
    alt: "Customizable Notifications",
    description:
      "Get notified about unfilled shifts, shift swap requests, and more, keeping you always informed and in control.",
  },
];

const Benefits = () => (
  <section 
    id="benefits" 
    style={{ 
      display: 'grid',
      gap: '20px'
    }}
    className="text-center mx-auto max-w-7xl py-8"
  >
    <style jsx>{`
      section {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @media (max-width: 425px) {
        section {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}</style>
    {benefitsData.map((benefit, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center"
        style={{ height: 'fit-content' }}
      >
        <Image
          src={benefit.icon}
          alt={benefit.alt}
          width={64}
          height={64}
          className="w-20 mb-2.5"
        />
        <p className="text-base">{benefit.description}</p>
      </div>
    ))}
  </section>
);

export default Benefits;