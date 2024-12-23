import React from 'react';
import './Pricing.css';

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="pricing-card">
      <h3 className="pricing-title">$2</h3>
      <p className="pricing-price">per user / month</p>
      
      <p className="pricing-description">For teams of up to 30 employees, access all features with no hidden fees or limits.</p>
      
      <button className="pricing-button">Get Started Today</button>
      <hr />

      <div className="pricing-includes">
        <h4>What's Included:</h4>
        <ul className="feature-list">
          <li className="feature-item included">
            <span>✔</span> Customer Reservations
          </li>
          <li className="feature-item included">
          <span>✔</span> Shift Swap Marketplace
          </li>
          <li className="feature-item included">
          <span>✔</span> PTO Requests
          </li>
          <li className="feature-item included">
          <span>✔</span> Timesheets with Geo-Fencing
          </li>
          <li className="feature-item included">
          <span>✔</span> Auto Scheduling Logic
          </li>
          <li className="feature-item included">
          <span>✔</span> Communication Service
          </li>
        </ul>
      </div>
    </div>

    {/* Enterprise Pricing Card */}
    <div className="pricing-card">
      <h3 className="pricing-title">Enterprise</h3>
      <p className="pricing-price">Custom Pricing</p>
      
      <p className="pricing-description-enterprise">Have more than 30 employees? Contact us for tailored pricing. </p>      
      <button className="pricing-button">Contact Us</button>

      <hr />

      <div className="pricing-includes">
        <h4>What's Included:</h4>
        <ul className="feature-list">
          <li className="feature-item included">
            <span>✔</span> Every feature included.
          </li>
          <li className="feature-item included">
            <span>✔</span> Updates automatically included.
          </li>
          <li className="feature-item included">
            <span>✔</span> Scalable to your growing needs.
          </li>
          <li className="feature-item included">
            <span>✔</span> Everything for everyone.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
