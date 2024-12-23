import React from 'react';
import './SocialProof.css';

const SocialProof = () => (
  <section id="social-proof" className="social-proof">
    <div className="social-proof-content">
      <div className="text-content">
        <h2>Why Choose Our Workforce Management Solution?</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>Save 10+ Hours per Month</h3>
            <p>
              Our tool is designed to streamline scheduling, helping managers&nbsp;
              <a href="https://www.softwareadvice.com/" target="_blank" rel="noopener noreferrer">
                save over 10 hours per month
              </a> on manual tasks.
            </p>
          </div>
          <div className="stat">
            <h3>Cut Overtime Costs by Up to 20%</h3>
            <p>
              With built-in overtime prevention, managers can&nbsp;
              <a href="https://www.americanpayroll.org/" target="_blank" rel="noopener noreferrer">
                reduce overtime expenses by up to 20%
              </a>, leading to significant labor cost savings.
            </p>
          </div>
          <div className="stat">
            <h3>Efficient Scheduling for Busy Teams</h3>
            <p>
              Industry studies show that&nbsp;
              <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer">
                manual scheduling costs businesses up to 140 hours a year
              </a>. Our tool automates this, freeing up valuable time for your team.
            </p>
          </div>
        </div>
        <div className="market-need">
          <p>
            Workforce management is one of the most time-intensive tasks for businesses, and&nbsp;
            <a href="https://www2.deloitte.com/global/en.html" target="_blank" rel="noopener noreferrer">
              manual scheduling often leads to errors, miscommunication, and extra costs
            </a>. Our platform is designed to address these challenges, offering automation and flexibility to meet today’s demand for efficient, accurate scheduling.
          </p>
        </div>
      </div>
    </div>
    
    {/* Video Player */}
    <div className="video-container">
      <video controls>
        <source src="demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <button class="cta-button">
    <a 
      href="https://outlook.office365.com/owa/calendar/TotalWorkDiscoveryCall@totalwork.app/bookings/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'white' }}>
      Contact Us
    </a>
</button>

  </section>
);

export default SocialProof;
