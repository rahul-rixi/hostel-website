import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap"; 
import first1 from "../assets/first1.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import lakeImage from "../assets/Lake.jpg";
import lake2 from "../assets/Lake2.jpg";
import { ThemeContext } from '../ThemeContext';

const Gallery = () => {
  const { theme, bgColour, textColour, subTextColour, containerColour } = useContext(ThemeContext);
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
    <div className={`min-h-screen flex flex-col items-center py-12 pt-24 ${theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-[--bg-dark] text-gray-300'}`}
      style={{ backgroundColor: bgColour }}
    >
      <motion.h1
        className={`text-4xl font-bold mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: textColour }}
      >
        Gallery
      </motion.h1>

      {/* Hostel Facilities Section */}
      <section className={`w-full max-w-6xl px-4 mb-12 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
        style={{ backgroundColor: bgColour }}>
        <motion.h2
          className={`text-3xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: textColour }}
        >
          Hostel Facilities
        </motion.h2>
        <div className="text-lg mb-6"
         style={{ color: subTextColour }}>
          <p>Here are some images showcasing the facilities at our hostel, from rooms to recreational areas!</p>
        </div>
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
                
                style={{ color: textColour }}

              >
                View Image
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sports Section */}
      <section className={`w-full max-w-6xl px-4 mb-12 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
        style={{ backgroundColor: bgColour }}>
        <motion.h2
          className={`text-3xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: textColour }}

        >
          Sports Events
        </motion.h2>
        <div className="text-lg mb-6" 
                  style={{ color: subTextColour, backgroundColor: bgColour }}

        >
          <p>Explore the exciting sports events and activities at our hostel!</p>
        </div>
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
                alt={`Sports Event ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
                style={{ color: textColour }}

              >
                View Image
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className={`w-full max-w-6xl px-4 mb-12 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
        style={{ backgroundColor: bgColour }}>
        <motion.h2
          className={`text-3xl font-semibold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: textColour }}

        >
          Hostel Events
        </motion.h2>
        <div className="text-lg mb-6"
                  style={{ color: subTextColour , backgroundColor: bgColour }}
>
          <p>Check out the pictures from festivals and events celebrated at our hostel!</p>
        </div>
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
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
                style={{ color: textColour }}

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
    </div>
  );
};

export default Gallery;
