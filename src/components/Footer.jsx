import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              The Government Engineering College Arwal Hostel provides a safe, comfortable, and dynamic environment for students, fostering academic and personal growth.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
              <li><Link to='/holiday' className="hover:text-indigo-500">Holiday</Link></li>
              <li><a href="#facilities" className="hover:text-indigo-500">Facilities</a></li>
              <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
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
        <div className="text-center mt-8">
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
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; 2024 Government Engineering College Arwal Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
