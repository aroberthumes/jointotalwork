import React from 'react';
import './Benefits.css';

const Benefits = () => (
  <section id="benefits" className="benefits">
    <div className="benefit-item">
      <img src="/path/to/icon1.png" alt="Intuitive Interface" />
      <p>Intuitive and user-friendly design makes it easy for managers and employees to get started quickly.</p>
    </div>
    <div className="benefit-item">
      <img src="/path/to/icon2.png" alt="Real-Time Communication" />
      <p>Real-time messaging and notifications keep everyone connected, reducing miscommunication and errors.</p>
    </div>
    <div className="benefit-item">
      <img src="/path/to/icon3.png" alt="Employee Empowerment" />
      <p>Employees can view their schedules, request shift swaps, and manage PTO, all from a single, accessible platform.</p>
    </div>
    <div className="benefit-item">
      <img src="/path/to/icon4.png" alt="Mobile Accessibility" />
      <p>Manage schedules, clock in/out, and request PTO from anywhere with our mobile-friendly design.</p>
    </div>
    <div className="benefit-item">
      <img src="/path/to/icon5.png" alt="Reduced Administrative Workload" />
      <p>Automated scheduling and streamlined workflows reduce the time managers spend on repetitive tasks.</p>
    </div>
    <div className="benefit-item">
      <img src="/path/to/icon6.png" alt="Customizable Notifications" />
      <p>Get notified about unfilled shifts, shift swap requests, and more, keeping you always informed and in control.</p>
    </div>
  </section>
);

export default Benefits;
