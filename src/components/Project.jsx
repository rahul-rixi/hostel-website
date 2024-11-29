import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import Checkbox from './Checkbox'; // Import Checkbox component
import FacilitiesPage from '../pages/DetailsPage';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  // Handle scroll effect for hiding navbar on scroll down
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setScrollTimeout(
        setTimeout(() => {
          setHideNavbar(true);
        }, 200)
      );
    } else {
      setHideNavbar(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <div className="max-w-[90%] mx-auto">
        <nav
          className={`h-16 w-full flex justify-between items-center px-8 backdrop-blur-md shadow-lg z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
            hideNavbar ? 'transform -translate-y-full' : ''
          }`}
        >
          
          {/* Logo */}
          <NavLink to="/" className="text-3xl text-white font-bold tracking-wider flex items-center">
            <span className="text-indigo-600">Hostel</span><span className="text-gray-300 ml-1">Connect</span>
          </NavLink>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'Details', 'Gallery', 'Contact', 'FAQ'].map((link) => (
              <div key={link} className="relative group">
                <NavLink
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-800 hover:text-indigo-600 transition-all duration-300"
                  // Add styling for active link
                  activeClassName="text-indigo-600 font-semibold underline"
                >
                  <span>{link}</span>
                </NavLink>
                {/* Underline Animation */}
                <div
                  className={`absolute left-0 bottom-0 w-full h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out`}
                ></div>
              </div>
            ))}
          </div>

          {/* Custom Hamburger Icon */}
          <div className="md:hidden">
            <Checkbox checked={isMenuOpen} onChange={toggleMenu} />
          </div>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-600 text-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{ width: '80%' }}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-4xl font-bold text-white"
            onClick={toggleMenu}
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col gap-8 mt-24 px-6">
          {['Home', 'About', 'Gallery', 'Contact', 'FAQ'].map((link, index) => (
            <li
              key={link}
              className={`text-lg font-semibold text-white cursor-pointer transform ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300 delay-150`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <NavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="block px-3 py-2 text-gray-800 hover:text-indigo-600"
                activeClassName="text-indigo-600 font-semibold underline"
              >
                <span className="truncate hover:bg-white hover:bg-opacity-20 rounded-lg px-3 py-2 transition-all duration-300">
                  {link}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
