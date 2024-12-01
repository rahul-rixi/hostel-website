import React from 'react';
import wardenImage from '../assets/dp.jpeg'; // Replace with actual path
import headWardenImage from '../assets/dp.jpeg'; // Replace with actual path

const ContactSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12 pt-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Get in touch with our hostel management for any inquiries or concerns.
        </p>
      </div>

      {/* Head Warden and Warden Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Head Warden */}
        <div className="text-center">
          <img
            src={headWardenImage}
            alt="Head Warden"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Head Warden: xyz...</h2>
          <p className="text-gray-600">Phone: +91 1234567890</p>
        </div>

        {/* Warden */}
        <div className="text-center">
          <img
            src={wardenImage}
            alt="Warden"
            className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Warden: Dheeraj Kumar</h2>
          <p className="text-gray-600">Phone: +91 1234567890</p>
        </div>
      </div>

      {/* Staff Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Hostel Staff</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Electrician:</strong> Rajesh Kumar - +91 1234567890
            </li>
            <li>
              <strong>Plumber:</strong>  Yadav - +91 1234567890
            </li>
            <li>
              <strong>Guard:</strong> xyz Kumar - +91 1234567890
            </li>
            <li>
              <strong>Auto Drivers:</strong> Raj Gupta - +91 1234567890
            </li>
          </ul>
        </div>
      </div>

      {/* Hostel Address and Map */}
      <div className="relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Hostel Address</h2>
        <p className="text-gray-600 mb-4 text-center">XYZ College Hostel, ABC Road, City, State, Pin Code</p>

        {/* Embedded Google Map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.415812902261!2d84.54703247400428!3d25.155433933393663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d15f621f82ae3%3A0xb5497d7b5715a615!2zR292ZXJubWVudCBlbmdpbmVlcmluZyBjb2xsZWdlIOCkheCksOCkteCksg!5e0!3m2!1sen!2sin!4v1732898125566!5m2!1sen!2sin"
          width="100%" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Hostel Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
