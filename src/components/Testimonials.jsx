import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap'; // Import GSAP
import first1 from '../assets/first1.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import lakeImage from '../assets/lake.jpg';
import lake2 from '../assets/lake2.jpg';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg'; // Import bg2 for the profile background

const students = [
  {
    name: "Rahul",
    image: first1,
    testimonial: "Living here has been an amazing experience. The staff and students are so friendly.",
  },
  {
    name: "Anish",
    image: second,
    testimonial: "I love the sports activities and the fun community spirit here.",
  },
  {
    name: "Amarjeet",
    image: third,
    testimonial: "The hostel provides excellent facilities and a peaceful environment.",
  },
  {
    name: "Amit",
    image: lakeImage,
    testimonial: "The food, rooms, and amenities are top-notch. I highly recommend it!",
  },
  {
    name: "Asish",
    image: lake2,
    testimonial: "The events and festivals make every day feel special at the hostel.",
  },
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % students.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    // GSAP animation for the sliding effect from right to left
    gsap.fromTo(
      '.testimonial-slide', 
      { opacity: 0, x: 100 }, // Start from the right (100% position)
      { opacity: 1, x: 0, duration: 1, ease: 'easeOut' }
    );

    // Animate previous slide out to the left
    gsap.fromTo(
      '.previous-slide', 
      { opacity: 1, x: 0 }, 
      { opacity: 0, x: -100, duration: 1, ease: 'easeIn' }
    );
  }, [currentSlide]);

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-black mb-8 md:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Students Say
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Previous Slide (will be animated out to the left) */}
          <motion.div
            className="testimonial-slide previous-slide w-full h-64 rounded-lg overflow-hidden shadow-lg bg-cover bg-center absolute inset-0"
            style={{ backgroundImage: `url(${students[(currentSlide - 1 + students.length) % students.length].image})` }}
            key={currentSlide - 1}
            initial={{ x: 0 }}
            animate={{ x: -100 }}
            transition={{ duration: 1 }}
            opacity={0}
          ></motion.div>

          {/* Current Slide (will slide in from the right) */}
          <motion.div
            className="testimonial-slide w-full h-64 rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${students[currentSlide].image})` }}
            key={currentSlide}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white font-semibold p-6"
              style={{ backgroundImage: `url(${bg2})` }} // Applying bg2 for the profile background
            >
              {/* The image is kept static by making it a background */}
              <div className="w-24 h-24 rounded-full border-4 border-white mb-4 overflow-hidden">
                <img
                  src={students[currentSlide].image}
                  alt={students[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-bold">{students[currentSlide].name}</p>
              <p className="text-lg italic mt-2">{students[currentSlide].testimonial}</p>
            </div>
          </motion.div>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-6 space-x-4">
          {students.map((_, index) => (
            <motion.div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;