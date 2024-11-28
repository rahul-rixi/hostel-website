import React, { useState, useEffect } from 'react';
import spider from '../assets/spiderMon.jpg';
import Tree from '../assets/Tree.jpg';
import first1 from '../assets/first1.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';

const Header = () => {
  const images = [spider, third, first1, second, Tree];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">

      {/* Image slider */}
      <div className="h-[80vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <img
            className="w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
            src={images[currentIndex]}
            alt="Slider Image"
            style={{ opacity: 1 }}
          />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
          style={{ opacity: 1 }}
        >
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt="Slider Image Mobile"
            style={{ opacity: 1 }}
          />
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text drop-shadow-2xl font-sans md:text-6xl">
          Welcome to Boy's Hostel
        </h1>
        <h2 className="max-w-md mx-auto mt-4 text-sm md:text-lg text-gray-300 italic">
          "A hostel isn't just a building; it's a second home filled with stories, friendships, and dreams."
        </h2>
        <button className="px-4 py-2 md:px-6 md:py-3 mt-6 md:mt-8 bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-semibold rounded-full hover:bg-gradient-to-r hover:from-slate-300 hover:to-white hover:text-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300">
          Explore More
        </button>
      </div>

      {/* Dots with transition effect */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-transform duration-300 transform ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-gray-400 scale-100'
            }`}
            style={{
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
