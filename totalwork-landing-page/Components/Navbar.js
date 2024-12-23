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
      const offset = 80;
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
      <div className="p-4">
        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col items-center">
          <a href="#home">
            <Image
              src="/TotalWorLogoWhite_cropped.png"
              alt="Company Logo"
              width={120}
              height={45}
              priority
            />
          </a>
          <div
            className="mt-4 cursor-pointer flex flex-col gap-1"
            onClick={toggleDropdown}
            ref={burgerRef}
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex sm:justify-between sm:items-center">
          <a href="#home">
            <Image
              src="/TotalWorLogoWhite_cropped.png"
              alt="Company Logo"
              width={120}
              height={45}
              priority
            />
          </a>
          <nav className="flex gap-6 text-white text-lg">
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
        </div>

        {/* Dropdown Menu */}
        <nav
          ref={dropdownRef}
          className={`absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-lg shadow-lg p-4 flex flex-col gap-2 ${
            isDropdownOpen ? "scale-100" : "scale-0"
          } origin-top-center transition-transform duration-200 mt-4 sm:hidden`}
        >
          {["home", "benefits", "testimonials", "pricing", "faq", "cta"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:bg-blue-500 rounded px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(id);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;