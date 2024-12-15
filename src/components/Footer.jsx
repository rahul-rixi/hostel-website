import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ThemeContext } from '../ThemeContext';
import ColorPicker from './ColourPicker';

const Footer = () => {
  const { 
    theme, 
    handleBgColour, 
    handleTextColour, 
    handleSubTextColour, 
    handleContainerColour, 
    subTextColour, 
    textColour,
    bgColour,
    containerColour 
  } = useContext(ThemeContext);

  const handleColorChange = (color) => {
    handleBgColour(color);
  };

  const handleTextChange = (color) => {
    handleTextColour(color);
  };

  const handleSubTextChange = (color) => {
    handleSubTextColour(color);
  };

  const handleContainerChange = (color) => {
    handleContainerColour(color);
  };

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
    <footer
      className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} py-8`}
      style={{
        userSelect: 'none',
        backgroundColor: bgColour,
        color: subTextColour,
      }}
    >
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div className="footer-text">
            <h3
              className={`text-xl font-bold mb-4`}
              style={{ color: textColour }}
            >
              Location
            </h3>
            <p style={{ color: subTextColour }}>
              Government Engineering College Arwal<br />
              Aurangabad Road, Mehandiya Market, Shivpur, Pahleja, Block: Kaler,
              <br />
              Bihar-804409
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-text">
            <h3
              className={`text-xl font-bold mb-4`}
              style={{ color: textColour }}
            >
              Quick Links
            </h3>
            <ul style={{ color: subTextColour }} className="space-y-2">
              <li>
                <Link to="/holiday" className="footer-link hover:text-blue-500 transition duration-200">
                  Holiday
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="footer-link hover:text-blue-500 transition duration-200">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link hover:text-blue-500 transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="footer-link hover:text-blue-500 transition duration-200">
                  RoomsInfo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-text">
            <h3
              className={`text-xl font-bold mb-4`}
              style={{ color: textColour }}
            >
              Find Us On
            </h3>
            <p style={{ color: subTextColour }}>Call us on: +91 123 456 7890</p>
            <p style={{ color: subTextColour }}>
              Email us on:{' '}
              <a
                href="mailto:principal@gecarwal.ac.in"
                className="hover:text-blue-500 transition duration-200"
              >
                principal@gecarwal.ac.in
              </a>
            </p>

            {/* Color Pickers */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span style={{ color: subTextColour }}>Change Background:</span>
                <ColorPicker handleColorChange={handleColorChange} />
              </div>
              <div className="flex items-center space-x-2">
                <span style={{ color: subTextColour }}>Change Text:</span>
                <ColorPicker handleColorChange={handleTextChange} />
              </div>
              <div className="flex items-center space-x-2">
                <span style={{ color: subTextColour }}>Change Subtext:</span>
                <ColorPicker handleColorChange={handleSubTextChange} />
              </div>
              <div className="flex items-center space-x-2">
                <span style={{ color: subTextColour }}>Change Container:</span>
                <ColorPicker handleColorChange={handleContainerChange} />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8 footer-text">
          <h3
            className={`text-xl font-bold mb-4`}
            style={{ color: textColour }}
          >
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/gcearwal"
              style={{ color: subTextColour }}
              className="hover:text-blue-500 transition duration-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/gcearwal"
              style={{ color: subTextColour }}
              className="hover:text-blue-500 transition duration-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/gcearwal"
              style={{ color: subTextColour }}
              className="hover:text-blue-500 transition duration-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/school/gcearwal"
              style={{ color: subTextColour }}
              className="hover:text-blue-500 transition duration-200"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`text-center mt-8 text-sm footer-text`}
          style={{ color: subTextColour }}
        >
          <p>&copy; 2024 Government Engineering College Arwal Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
