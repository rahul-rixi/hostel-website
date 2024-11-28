import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="h-16 w-full flex justify-between items-center px-6 bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-lg z-50 relative">
        {/* Logo */}
        <div className="text-2xl text-white font-extrabold tracking-wide">
          Hostel
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-full shadow-lg">
          <ul className="flex gap-6 font-medium text-white">
            {['Home', 'About', 'Contact'].map((link) => (
              <li
                key={link}
                className={`px-4 py-2 cursor-pointer transition-all duration-300 transform rounded-full ${
                  activeLink === link
                    ? 'bg-white bg-opacity-30 text-black scale-105 shadow-md'
                    : 'hover:bg-white hover:bg-opacity-20'
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button for Desktop */}
        <div className="hidden md:block px-6 py-2 bg-white bg-opacity-10 backdrop-blur-md text-white font-semibold cursor-pointer rounded-full hover:bg-opacity-20 transition-all duration-300">
          Contact
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className={`h-1 w-full bg-white rounded transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-full bg-white rounded my-1 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-full bg-white rounded transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-2/3 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-2xl z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl font-bold text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-8 mt-12 px-6">
          {['Home', 'About', 'Contact'].map((link, index) => (
            <li
              key={link}
              className={`text-lg font-semibold text-white cursor-pointer transform opacity-0 ${
                isMenuOpen ? 'animate-slide-in' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => {
                setActiveLink(link);
                toggleMenu();
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 0.4s forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
