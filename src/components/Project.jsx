import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import Switch from './Switch';
import Checkbox from './Checkbox';



const Navbar = () => {

  const { theme, toggleTheme} = useContext(ThemeContext);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#4C51BF'); // Default color
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop.current) {
      if (navbarVisible) {
        setNavbarVisible(false);
      }
    } else {
      if (!navbarVisible) {
        setNavbarVisible(true);
      }
    }
    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      if (currentScrollTop === window.pageYOffset) {
        setNavbarVisible(true);
      }
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [navbarVisible]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

 


  return (
    <>
      <div className="max-w-[90%] mx-auto">
        <nav
          className={`h-16 w-full flex justify-between items-center px-4 md:px-8 backdrop-blur-lg shadow-lg z-50 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${
            navbarVisible ? 'translate-y-0' : '-translate-y-full'
          } ${theme === 'light' ? 'bg-white bg-opacity-70 text-gray-800' : 'bg-gray-900 bg-opacity-70 text-gray-300'}`}
        >
          <NavLink to="/" className="text-2xl md:text-3xl font-bold tracking-wider flex items-center">
            <span className="text-primary">Hostel</span>
            <span className={`ml-1 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>Connect</span>
          </NavLink>

          <div className="hidden md:flex space-x-8 font-medium">
            {['Home', 'Facilities', 'Gallery', 'Contact', 'Login'].map((link) => (
              <div key={link} className="relative group">
                <NavLink
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className={`block px-4 py-3 font-semibold transition-all duration-300 ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}
                  style={({ isActive }) => ({
                    color: isActive ? primaryColor : theme === 'light' ? '#333333' : '#CCCCCC',
                  })}
                >
                  <span className="select-none">{link}</span>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out z-10"></div>
                </NavLink>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
           
            <Switch toggleTheme={toggleTheme} />
            <div className="md:hidden">
              <Checkbox checked={isMenuOpen} onChange={toggleMenu} />
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-300'}`}
        style={{ width: '80%' }}
      >
        <ul className="flex flex-col gap-6 mt-10 px-6">
          {['Home', 'Facilities', 'Gallery', 'Contact', 'Login'].map((link, index) => (
            <li
              key={link}
              className="text-lg font-semibold cursor-pointer transform hover:scale-105 transition-all duration-300 ease-out"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <NavLink
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="block px-4 py-3 bg-transparent rounded-lg hover:bg-opacity-20 transition-all duration-300"
                style={({ isActive }) => ({
                  color: isActive ? primaryColor : theme === 'light' ? '#333333' : '#CCCCCC',
                })}
              >
                <span>{link}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
