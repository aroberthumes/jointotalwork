"use client";

import React, { useState } from "react";
import Image from "next/image";

const customerTestimonials = [
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
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customerTestimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customerTestimonials.length - 1 : prevIndex - 1
    );
  };

  const { image, quote, name, title } = customerTestimonials[currentIndex];

  return (
    <section id="testimonials" className="flex flex-col items-center p-10 bg-blue-600 text-white h-full">
      <div className="flex items-center max-w-4xl w-full">
        <div className="flex-1 p-5">
          <p className="m-0">&ldquo;{quote}&rdquo;</p>
          <p className="font-bold mt-2.5">{name}</p>
          <p className="text-sm text-gray-300">{title}</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={image}
            alt={`${name}`}
            width={200}
            height={200}
            className="rounded-lg w-full max-w-[200px] h-auto"
          />
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <button 
          onClick={goToPrevious} 
          aria-label="Previous testimonial"
          className="bg-transparent border-none text-white text-2xl cursor-pointer hover:text-gray-200"
        >
          &lt;
        </button>
        <button 
          onClick={goToNext} 
          aria-label="Next testimonial"
          className="bg-transparent border-none text-white text-2xl cursor-pointer hover:text-gray-200"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;