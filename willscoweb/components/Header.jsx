import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  // Function to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white w-full fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

            {/* Logo and Navigation Links */}
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="h-16 w-auto"
                  src="../src/assets/logo.png"
                  alt="Willsco-logo"
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden sm:flex sm:space-x-12 mx-auto">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Home
                </a>

                {/* Dropdown for Our Services */}
                <div className="relative dropdown-menu">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent closing when clicking the button
                      setDropdownOpen(!dropdownOpen);
                    }}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center gap-1"
                  >
                    Our Services
                    <svg
                      className="w-4 h-4 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Web Development
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        SEO Optimization
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Digital Marketing
                      </a>
                    </div>
                  )}
                </div>

                <a href="#" className="text-gray-500 hover:text-gray-700">
                  About Us
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  FAQS
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  Blog
                </a>
              </div>

              {/* Contact Us Button */}
              <div className="hidden sm:block">
                <a
                  href="#"
                  className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-2xl hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-2">
              <a
                href="#"
                className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              {/* Mobile Dropdown for Our Services */}
              <div className="relative dropdown-menu">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700 w-full text-left"
                >
                  Our Services
                </button>
                {dropdownOpen && (
                  <div className="bg-gray-700 px-3 py-2 space-y-1 rounded-md">
                    <a
                      href="#"
                      className="block text-gray-300 hover:bg-gray-600 px-3 py-1 rounded-md"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Web Development
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:bg-gray-600 px-3 py-1 rounded-md"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      SEO Optimization
                    </a>
                    <a
                      href="#"
                      className="block text-gray-300 hover:bg-gray-600 px-3 py-1 rounded-md"
                      onClick={() => {
                        setDropdownOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Digital Marketing
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-300 px-3 py-2 rounded-md text-base hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
