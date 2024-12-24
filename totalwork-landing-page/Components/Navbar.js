"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Adjusted to match the new shorter navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50">
      <div className="flex justify-between items-center px-4 h-16"> {/* Shorter height */}
        <a href="#home">
          <Image
            src="/TotalWorLogoWhite_cropped.png"
            alt="Company Logo"
            width={100} // Reduced size
            height={40} // Reduced size
            priority
          />
        </a>

        {/* Navbar Links */}
        <nav className="hidden sm:flex gap-8 text-white text-lg"> {/* Larger font size */}
          {["home", "benefits", "testimonials", "pricing", "faq", "cta"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-blue-300"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Burger Menu */}
        <div
          className="cursor-pointer flex flex-col gap-1 sm:hidden sm:absolute sm:top-4 sm:right-4" // Position for desktop
          onClick={toggleDropdown}
          ref={burgerRef}
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <nav
        ref={dropdownRef}
        className={`absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col gap-4 ${
          isDropdownOpen ? "scale-100" : "scale-0"
        } origin-top-center transition-transform duration-200 mt-6`}
      >
        {["home", "benefits", "testimonials", "pricing", "faq", "cta"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="hover:bg-blue-500 rounded px-4 py-2 text-lg"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(id);
            }}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
