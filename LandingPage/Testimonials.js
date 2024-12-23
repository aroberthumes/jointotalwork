import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    image: '/profile.png',
    quote: "Our team has been impressed by what this platform has built. We look forward to seeing it become our industry’s gold standard.",
    name: "Danny Meyer",
    title: "Founder & CEO, Union Square Hospitality Group",
  },
  {
    image: '/profile.png',
    quote: "This platform has streamlined our scheduling and communication, saving us hours every week.",
    name: "Sarah L.",
    title: "Operations Manager",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { image, quote, name, title } = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-quote">
          <p>"{quote}"</p>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-title">{title}</p>
        </div>
        <div className="testimonial-image">
        <img src={image} alt={`${name}`} />
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
