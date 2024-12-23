import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const burgerRef = useRef(null); // Ref for burger menu

  const handleScroll = (id) => {
    const isMobile = window.innerWidth <= 425; // For screens 426px or less
    const isSmallMobile = window.innerWidth <= 384; // For screens 321px or less
    const isTablet = window.innerWidth <= 1023 && window.innerWidth > 767; // For screens 1023px to 768px
  
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        let offset = 100; // Default offset for desktop
  
        // Adjust offsets for specific sections
        if (id === 'testimonials') {
          offset = isSmallMobile
            ? 230
            : isMobile
            ? 220
            : isTablet
            ? 150
            : 200;
        } else if (id === 'faq') {
          offset = isSmallMobile
            ? 170
            : isMobile
            ? 150
            : isTablet
            ? 100
            : 140;
        } else if (id === 'pricing') {
          offset = isSmallMobile
            ? 190
            : isMobile
            ? 190
            : isTablet
            ? 110
            : 170;
        } else if (id === 'benefits') {
          offset = isSmallMobile
            ? 170
            : isMobile
            ? 170
            : isTablet
            ? 100
            : 140;
        }
  
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsDropdownOpen(false); // Close dropdown after scrolling
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };  

  const handleClickOutside = (event) => {
    // Check if the click is outside both dropdown and burger menu
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
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <img src="/TotalWorLogoWhite_cropped.png" alt="Company Logo" className="navbar-logo" />

      <div className="burger-menu" onClick={toggleDropdown} ref={burgerRef}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      <div
        className={`dropdown-menu ${isDropdownOpen ? 'is-active' : ''}`}
        ref={dropdownRef}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('home');
          }}
        >
          Home
        </a>
        <a
          href="#benefits"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('benefits');
          }}
        >
          Benefits
        </a>
        <a
          href="#testimonials"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('testimonials');
          }}
        >
          Testimonials
        </a>
        <a
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('pricing');
          }}
        >
          Pricing
        </a>
        <a
          href="#faq"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('faq');
          }}
        >
          FAQ
        </a>
        <a
          href="#cta"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('cta');
          }}
        >
          Contact Us
        </a>
        <a
          href="#login"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('login');
          }}
        >
          Log In
        </a>
      </div>
    </header>
  );
};

export default Navbar;
