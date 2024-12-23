"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
    image: "/profile.png",
    quote: "This platform has streamlined our scheduling and communication, saving us hours every week.",
    name: "Dave Dave",
    title: "Founder & CEO",
  },
  {
    image: "/profile.png",
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
          <p>&ldquo;{quote}&rdquo;</p>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-title">{title}</p>
        </div>
        <div className="testimonial-image">
          <Image
            src={image}
            alt={`${name}`}
            width={200} // Matches your CSS for max width
            height={200} // Maintains aspect ratio
          />
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={goToPrevious} aria-label="Previous testimonial">
          &lt;
        </button>
        <button onClick={goToNext} aria-label="Next testimonial">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
