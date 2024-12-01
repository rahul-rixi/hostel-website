import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import first1 from "../assets/first1.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import lakeImage from "../assets/Lake.jpg";
import lake2 from "../assets/Lake2.jpg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [first1, second, third, lakeImage, lake2];

  useEffect(() => {
    gsap.from(".quote", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "easeOut",
      delay: 1,
    });
  }, []);

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 pt-24">
        <motion.h1
          className="text-4xl font-bold text-indigo-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h1>

        {/* Gallery Sections */}
        <section className="w-full max-w-6xl px-4 mb-12">
          <motion.h2
            className="text-3xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hostel Facilities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImageIndex(index)}
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

        {/* Modal for Enlarged Image with Navigation */}
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Left Button */}
            <button
              className="absolute left-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-gray-700 focus:outline-none z-50"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              &lt;
            </button>

            {/* Selected Image */}
            <motion.img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="max-w-3xl max-h-screen rounded-lg shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
            />

            {/* Right Button */}
            <button
              className="absolute right-4 text-white text-3xl font-bold bg-gray-800 bg-opacity-50 p-3 rounded-full hover:bg-gray-700 focus:outline-none z-50"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              &gt;
            </button>
          </motion.div>
        )}

        {/* Quote Section */}
        <div className="w-full max-w-6xl px-4 mt-12">
          <motion.blockquote
            className="text-center text-xl font-semibold text-gray-700 italic quote"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            "The best way to predict the future is to create it." - Abraham
            Lincoln
          </motion.blockquote>
        </div>
      </div>
    </>
  );
};

export default Gallery;
