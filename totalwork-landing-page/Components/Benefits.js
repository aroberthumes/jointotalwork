"use client";

import React from "react";
import Image from "next/image";
import "./Benefits.css";

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
  <section id="benefits" className="benefits">
    {benefitsData.map((benefit, index) => (
      <div key={index} className="benefit-item">
        <Image
          src={benefit.icon}
          alt={benefit.alt}
          width={64} // Set appropriate dimensions for your icons
          height={64}
          className="benefit-icon"
        />
        <p>{benefit.description}</p>
      </div>
    ))}
  </section>
);

export default Benefits;
