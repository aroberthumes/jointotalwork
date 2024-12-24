import React from 'react';

const SocialProof = () => (
  <section id="social-proof">
    <div className="flex flex-col gap-8 max-w-7xl w-full items-center">
      <div className="flex-1 w-full mb-4">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Workforce Management Solution?</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Save 10+ Hours per Month</h3>
            <p>
              Our tool is designed to streamline scheduling, helping managers{' '}
              <a href="https://www.softwareadvice.com/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline">
                save over 10 hours per month
              </a> on manual tasks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Cut Overtime Costs by Up to 20%</h3>
            <p>
              With built-in overtime prevention, managers can{' '}
              <a href="https://www.americanpayroll.org/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline">
                reduce overtime expenses by up to 20%
              </a>, leading to significant labor cost savings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Efficient Scheduling for Busy Teams</h3>
            <p>
              Industry studies show that{' '}
              <a href="https://www.shrm.org/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline">
                manual scheduling costs businesses up to 140 hours a year
              </a>. Our tool automates this, freeing up valuable time for your team.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p>
            Workforce management is one of the most time-intensive tasks for businesses, and{' '}
            <a href="https://www2.deloitte.com/global/en.html" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:underline">
              manual scheduling often leads to errors, miscommunication, and extra costs
            </a>. Our platform is designed to address these challenges, offering automation and flexibility to meet today&apos;s demand for efficient, accurate scheduling.
          </p>
        </div>
      </div>
    </div>
    
    <div className="w-full flex justify-center">
      <video controls className="w-full max-w-2xl rounded-lg shadow-md">
        <source src="demo-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <div className="flex justify-center mt-5">
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded text-xl cursor-pointer transition-colors duration-300">
        <a 
          href="https://outlook.office365.com/owa/calendar/TotalWorkDiscoveryCall@totalwork.app/bookings/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-underline text-white">
          Contact Us
        </a>
      </button>
    </div>
  </section>
);

export default SocialProof;