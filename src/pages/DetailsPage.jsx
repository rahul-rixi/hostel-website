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
    <div
      className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20"
      style={{ paddingTop: '6rem' }} 
    >

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Hostel Facilities</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Our hostel offers a wide range of facilities designed to provide students with a comfortable, convenient, and secure living environment.
        </p>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        ].map((facility, index) => (
          <motion.div
            key={index}
            ref={addToRefs}
            className="relative cursor-pointer"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
       
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
              />
         
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-center text-sm px-4">{facility.description}</p>
              </motion.div>
            </div>

         
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
