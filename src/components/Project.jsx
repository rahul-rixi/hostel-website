import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Checkbox from './Checkbox'; // Import Checkbox component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <div className="max-w-[90%] mx-auto">
        <nav
          className={`h-16 w-full flex justify-between items-center px-8 backdrop-blur-md shadow-lg z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
        >
          <NavLink to="/" className="text-3xl text-white font-bold tracking-wider flex items-center">
            <span className="text-indigo-600">Hostel</span>
            <span className="text-gray-300 ml-1">Connect</span>
          </NavLink>

          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'Details', 'Gallery', 'Contact', 'FAQ'].map((link) => (
              <div key={link} className="relative group">
                <NavLink
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="block px-4 py-3 text-[#333333] font-semibold hover:text-indigo-600 transition-all duration-300"
                  style={({ isActive }) => ({
                    color: isActive ? '#4C51BF' : '#333333',
                  })}
                >
                  <span className="select-none">{link}</span>
                </NavLink>

                {/* Hover Underline */}
                <div
                  className="absolute left-0 bottom-0 w-full h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out z-10"
                ></div>

                {/* Active Link Underline */}
                <div
                  className="absolute left-0 bottom-0 w-full h-1 bg-indigo-600 scale-x-0 group-active:scale-x-100 transition-all duration-300 ease-in-out z-20"
                ></div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Checkbox checked={isMenuOpen} onChange={toggleMenu} />
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen bg-transparent backdrop-blur-md text-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
        style={{ width: '80%' }}
      >
        <ul className="flex flex-col gap-8 mt-10 px-6">
          {['Home', 'Details', 'Gallery', 'Contact', 'FAQ'].map((link, index) => (
            <li
              key={link}
              className={`text-lg font-semibold text-[#333333] cursor-pointer transform hover:scale-105 transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <NavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="block px-4 py-3 bg-transparent rounded-lg hover:bg-opacity-20 transition-all duration-300"
                style={({ isActive }) => ({
                  color: isActive ? '#4C51BF' : '#333333',
                })}
              >
                <span className="select-none">{link}</span>

                {/* Hover Underline */}
                <div className="absolute left-0 bottom-0 w-full h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out z-10"></div>

                {/* Active Link Underline */}
                <div
                  className="absolute left-0 bottom-0 w-full h-1 bg-indigo-600 scale-x-0 group-active:scale-x-100 transition-all duration-300 ease-in-out z-20"
                ></div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
