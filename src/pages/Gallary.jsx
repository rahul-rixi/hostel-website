import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap'; // Import GSAP
import first1 from '../assets/first1.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import lakeImage from '../assets/lake.jpg';
import lake2 from '../assets/lake2.jpg';
import FacilitiesPage from './DetailsPage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Using the same five images for all sections
  const images = [first1, second, third, lakeImage, lake2];

  useEffect(() => {
    // GSAP animation for the quote section
    gsap.from('.quote', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'easeOut',
      delay: 1, // Delay the animation slightly
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 pt-24">
        {/* Gallery Heading */}
        <motion.h1
          className="text-4xl font-bold text-indigo-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h1>

        {/* Hostel Facilities Section */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <motion.h2
            className="text-3xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hostel Facilities
          </motion.h2>
          <div className="text-lg text-gray-700 mb-6">
            <p>Here are some images showcasing the facilities at our hostel, from rooms to recreational areas!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  View Image
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sports Section */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <motion.h2
            className="text-3xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sports Events
          </motion.h2>
          <div className="text-lg text-gray-700 mb-6">
            <p>Explore the exciting sports events and activities at our hostel!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Sports Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  View Image
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <motion.h2
            className="text-3xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hostel Events
          </motion.h2>
          <div className="text-lg text-gray-700 mb-6">
            <p>Check out the pictures from festivals and events celebrated at our hostel!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  View Image
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-3xl max-h-screen rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}

        {/* Quote Section with GSAP animation */}
        <div className="w-full max-w-6xl px-4 mt-12">
          <motion.blockquote
            className="text-center text-xl font-semibold text-gray-700 italic quote"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            "The best way to predict the future is to create it." - Abraham Lincoln
          </motion.blockquote>
        </div>
      </div>
    </>
  );
};

export default Gallery;
