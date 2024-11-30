import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import facilityImage1 from '../assets/first1.jpg';
import facilityImage2 from '../assets/second.jpg';
import facilityImage3 from '../assets/third.jpg';

const Facilities = () => {
  const facilityRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !facilityRefs.current.includes(el)) {
      facilityRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      facilityRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: facilityRefs.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20" style={{ paddingTop: '6rem' }}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Hostel Facilities</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Our hostel offers a wide range of facilities designed to provide students with a comfortable, convenient, and secure living environment.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            number: 570,
            title: "Total Students",
            description: "A vibrant community of 570 students fostering diversity and inclusion.",
            image: facilityImage1,
          },
          {
            number: 160,
            title: "Rooms",
            description: "160 spacious and well-furnished rooms with modern amenities.",
            image: facilityImage2,
          },
          {
            number: 30,
            title: "Staff Members",
            description: "A dedicated team of 30 staff ensures smooth operations.",
            image: facilityImage3,
          },
          {
            number: 7,
            title: "TV Rooms",
            description: "7 common TV rooms to relax and enjoy with friends.",
            image: facilityImage1,
          },
          {
            number: 14,
            title: "Water Filters",
            description: "14 water filters ensuring safe drinking water.",
            image: facilityImage2,
          },
          {
            number: 7,
            title: "Washing Machines",
            description: "7 washing machines for convenient laundry.",
            image: facilityImage3,
          },
          {
            number: 1,
            title: "Gym",
            description: "A well-equipped gym for fitness enthusiasts.",
            image: facilityImage1,
          },
          {
            number: 1,
            title: "Library",
            description: "A library with a diverse collection of books.",
            image: facilityImage2,
          },
          {
            number: 1,
            title: "Clean Mess",
            description: "A clean and hygienic mess offering healthy meals.",
            image: facilityImage3,
          },
        ].map((facility, index) => (
          <motion.div
            key={index}
            ref={addToRefs}
            className="relative cursor-pointer"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Description (Hover Only) */}
              <motion.div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm px-4">{facility.description}</p>
              </motion.div>
            </div>

            {/* Title and Animated Number (Below Image) */}
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
              <div className="text-5xl font-bold text-indigo-600">
                <CountUp start={0} end={facility.number} duration={2} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
