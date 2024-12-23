"use client";

import React from "react";
import "./Pricing.css";

const Pricing = () => (
  <section id="pricing" className="pricing">
    {/* Basic Plan Pricing Card */}
    <div className="pricing-card">
      <h3 className="pricing-title">$2</h3>
      <p className="pricing-price">per user / month</p>
      <p className="pricing-description">
        For teams of up to 30 employees, access all features with no hidden fees or limits.
      </p>
      <button className="pricing-button">Get Started Today</button>
      <hr />
      <div className="pricing-includes">
        <h4>What&apos;s Included:</h4>
        <ul className="feature-list">
          {[
            "Customer Reservations",
            "Shift Swap Marketplace",
            "PTO Requests",
            "Timesheets with Geo-Fencing",
            "Auto Scheduling Logic",
            "Communication Service",
          ].map((feature, index) => (
            <li key={index} className="feature-item included">
              <span>✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Enterprise Pricing Card */}
    <div className="pricing-card">
      <h3 className="pricing-title">Enterprise</h3>
      <p className="pricing-price">Custom Pricing</p>
      <p className="pricing-description-enterprise">
        Have more than 30 employees? Contact us for tailored pricing.
      </p>
      <button className="pricing-button">Contact Us</button>
      <hr />
      <div className="pricing-includes">
        <h4>What&apos;s Included:</h4>
        <ul className="feature-list">
          {[
            "Every feature included.",
            "Updates automatically included.",
            "Scalable to your growing needs.",
            "Everything for everyone.",
          ].map((feature, index) => (
            <li key={index} className="feature-item included">
              <span>✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
