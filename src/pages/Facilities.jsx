import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import facilityImage1 from '../assets/first1.jpg';
import facilityImage2 from '../assets/second.jpg';
import facilityImage3 from '../assets/sports1.jpg';
import room1 from '../assets/room1.jpg';

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
      {
        opacity: 0,
      },
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
      style={{ userSelect: 'none' }} // Prevent text selection
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 md:text-5xl relative inline-block">
          Facilities
          <span className="absolute left-0 bottom-0 h-1 w-full bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Explore the world-class facilities we provide to ensure comfort, security, and a vibrant living experience for our residents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          ref={addToRefs}
          className="group relative bg-white p-6 rounded-lg shadow-md border overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          style={{ userSelect: 'none' }} // Prevent selection of this card's content
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={room1}
              alt="Facility 1"
              className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
              style={{ userSelect: 'none', pointerEvents: 'none' }} // Make image unselectable
            />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            Well-Furnished Rooms
          </h3>
          <p className="text-gray-600 text-sm">
            Spacious and fully furnished rooms equipped with comfortable beds, study tables, and ample storage.
          </p>
          <span className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </div>

        <div
          ref={addToRefs}
          className="group relative bg-white p-6 rounded-lg shadow-md border overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          style={{ userSelect: 'none' }} // Prevent selection of this card's content
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={facilityImage2}
              alt="Facility 2"
              className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
              style={{ userSelect: 'none', pointerEvents: 'none' }} // Make image unselectable
            />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
            24/7 Security
          </h3>
          <p className="text-gray-600 text-sm">
            Advanced security systems including surveillance cameras and round-the-clock security personnel.
          </p>
          <span className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </div>

        <div
          ref={addToRefs}
          className="group relative bg-white p-6 rounded-lg shadow-md border overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          style={{ userSelect: 'none' }} // Prevent selection of this card's content
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={facilityImage3}
              alt="Facility 3"
              className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
              style={{ userSelect: 'none', pointerEvents: 'none' }} // Make image unselectable
            />
          </div>
          <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
           Indoor Games
          </h3>
          <p className="text-gray-600 text-sm">
            Common areas with indoor games, reading rooms, and spaces for group activities.
          </p>
          <span className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
