import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Footer = () => {
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
    <footer className="bg-gray-800 text-white py-8" style={{ userSelect: 'none' }}>
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div className="footer-text">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              The Government Engineering College Arwal Hostel provides a safe, comfortable, and dynamic environment for students, fostering academic and personal growth.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-text">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li><Link to='/holiday' className="footer-link hover:text-indigo-500">Holiday</Link></li>
              <li><Link to='/facilities' className="footer-link hover:text-indigo-500">Facilities</Link></li>
              <li><Link to='/contact' className="footer-link hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="footer-text">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:hostel@gcearwal.edu" className="hover:text-indigo-500">hostel@gcearwal.edu</a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8 footer-text">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com/gcearwal" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/gcearwal" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/gcearwal" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/school/gcearwal" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400 footer-text">
          <p>&copy; 2024 Government Engineering College Arwal Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
