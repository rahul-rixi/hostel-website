import React from 'react';
import { HiOutlineMail, HiOutlineUser, HiOutlineChat } from 'react-icons/hi';
import wardenImage from '../assets/dp.jpeg'; // Replace with actual path
import headWardenImage from '../assets/dp.jpeg'; // Replace with actual path

const ContactSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto mt-14 text-center mb-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Reach out to our hostel management for inquiries or assistance. We are here to help!
        </p>
      </div>

      {/* Warden Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
          <img
            src={headWardenImage}
            alt="Head Warden"
            className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border-4 border-indigo-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Head Warden: xyz...</h2>
          <a href="tel:+911234567890" className="text-indigo-600 font-medium hover:underline">
            +91 1234567890
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
          <img
            src={wardenImage}
            alt="Warden"
            className="mx-auto rounded-full w-28 h-28 object-cover mb-4 border-4 border-indigo-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Warden: Dheeraj Kumar</h2>
          <a href="tel:+911234567890" className="text-indigo-600 font-medium hover:underline">
            +91 1234567890
          </a>
        </div>
      </div>

      {/* Staff and Emergency Contacts in a Row */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Staff Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center flex-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other Hostel Staff</h2>
          <ul className="space-y-4 text-gray-600">
            {[
              { role: 'Electrician', name: 'Rajesh Kumar', phone: '+911234567890' },
              { role: 'Plumber', name: 'Yadav', phone: '+911234567890' },
              { role: 'Guard', name: 'xyz Kumar', phone: '+911234567890' },
              { role: 'Auto Drivers', name: 'Raj Gupta', phone: '+911234567890' },
            ].map((staff, index) => (
              <li key={index}>
                <strong>{staff.role}:</strong>{' '}
                <a href={`tel:${staff.phone}`} className="text-indigo-600 hover:underline">
                  {staff.name} - {staff.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center flex-1 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Emergency Contacts</h2>
          <ul className="space-y-4 text-gray-600">
            {[
              { service: 'Police Station', phone: '+919876543210' },
              { service: 'Fire Brigade', phone: '+918765432109' },
              { service: 'Ambulance', phone: '+917654321098' },
              { service: 'Hospital', phone: '+916543210987' },
            ].map((contact, index) => (
              <li key={index}>
                <strong>{contact.service}:</strong>{' '}
                <a href={`tel:${contact.phone}`} className="text-indigo-600 hover:underline">
                  {contact.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Beautified Query Form */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl rounded-lg p-12 text-center text-white hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-semibold mb-4">Have Any More Queries?</h2>
        <p className="mb-8">Feel free to reach out. We'll get back to you as soon as possible!</p>
        <form className="space-y-6 max-w-md mx-auto">
          <div className="relative">
            <HiOutlineUser className="absolute left-3 top-3 text-gray-300 text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-10 py-3 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-300 outline-none"
            />
          </div>
          <div className="relative">
            <HiOutlineMail className="absolute left-3 top-3 text-gray-300 text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-10 py-3 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-300 outline-none"
            />
          </div>
          <div className="relative">
            <HiOutlineChat className="absolute left-3 top-3 text-gray-300 text-xl" />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-10 py-3 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-300 outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 hover:text-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Address and Map Section */}
      <div className="text-center mt-10 mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hostel Address</h2>
        <p className="text-gray-600 mb-6">XYZ College Hostel, ABC Road, City, State, Pin Code</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.415812902261!2d84.54703247400428!3d25.155433933393663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d15f621f82ae3%3A0xb5497d7b5715a615!2zR292ZXJnbWVudCBlbmdpbmVlcmluZyBjb2xsZWdlIOCkheCksOCkteCksg!5e0!3m2!1sen!2sin!4v1732898125566!5m2!1sen!2sin"
          width="100%"
          height="250"
          className="rounded-lg shadow-md border-0"
          allowFullScreen=""
          loading="lazy"
          title="Hostel Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
