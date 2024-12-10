import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ThemeContext } from '../ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    gsap.fromTo(
      '.footer-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      '.footer-link',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <footer className={`${theme === 'light' ? 'bg-gray-200 text-gray-700' : 'bg-gray-900 text-gray-300'} py-8`} style={{ userSelect: 'none' }}>
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Location Section */}
          <div className="footer-text">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Location</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Government Engineering College Arwal<br />
              Aurangabad Road, Mehandiya Market, Shivpur, Pahleja, Block: Kaler,<br />
              Bihar-804409
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-text">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Quick Links</h3>
            <ul className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} space-y-2`}>
              <li>
                <Link to='/holiday' className="footer-link hover:text-blue-500 transition duration-200">
                  Holiday
                </Link>
              </li>
              <li>
                <Link to='/facilities' className="footer-link hover:text-blue-500 transition duration-200">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to='/contact' className="footer-link hover:text-blue-500 transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/rooms' className="footer-link hover:text-blue-500 transition duration-200">
                  RoomsInfo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-text">
            <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Find Us On</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Call us on: +91 123 456 7890</p>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Email us on:{" "}
              <a href="mailto:principal@gecarwal.ac.in" className="hover:text-blue-500 transition duration-200">
                principal@gecarwal.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8 footer-text">
          <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com/gcearwal" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-blue-500 transition duration-200`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/gcearwal" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-blue-500 transition duration-200`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/gcearwal" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-blue-500 transition duration-200`}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/school/gcearwal" className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-blue-500 transition duration-200`}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center mt-8 text-sm footer-text ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          <p>&copy; 2024 Government Engineering College Arwal Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
