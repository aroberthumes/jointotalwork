import React from 'react';
import './FAQ.css';

const FAQ = () => (
  <section id="faq" className="faq">
    <h2>FAQ</h2>
    <div className="faq-item">
      <h3>How does the scheduling tool prevent overtime?</h3>
      <p>Our tool allows managers to set daily and weekly maximum hours for each employee. The auto-scheduler respects these limits, ensuring that shifts are assigned without exceeding set thresholds. Managers are also alerted if overtime risks arise due to last-minute changes.</p>
    </div>
    <div className="faq-item">
      <h3>Can I customize the distance for clock-ins and clock-outs?</h3>
      <p>Yes, managers can set specific location limits for clock-in/out, ensuring employees are on-site when they start and end their shifts.</p>
    </div>
    <div className="faq-item">
      <h3>Are there notifications for shift changes or time-off approvals?</h3>
      <p>Absolutely! Both employees and managers receive real-time notifications for approved shifts, PTO, and any shift changes.</p>
    </div>
    <div className="faq-item">
      <h3>What happens if an employee clocks in too early?</h3>
      <p>Managers can set a clock-in time limit, which prevents employees from clocking in too early for their shift. If they try, they’ll receive a notification indicating they’re not yet allowed to clock in.</p>
    </div>
    <div className="faq-item">
      <h3>Does the platform help with avoiding last-minute scheduling conflicts?</h3>
      <p>Yes, with features like the shift marketplace and auto-scheduling, managers can handle shift swaps, giveaways, and last-minute schedule adjustments efficiently, reducing unexpected scheduling conflicts.</p>
    </div>
  </section>
);

export default FAQ;
