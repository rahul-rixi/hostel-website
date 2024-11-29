import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hostelImage from '../assets/hostel.jpg'; // Replace with actual image path

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const imageRef = useRef(null);
  const valueRefs = useRef([]);

  // This function adds elements to the valueRefs array
  const addValueRef = (el) => {
    if (el && !valueRefs.current.includes(el)) {
      valueRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animation for the image (simple fade in with slight scale)
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'ease.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%', // Trigger slightly later
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Simple animation for the text sections (fade in from bottom)
    gsap.utils.toArray('.value-section').forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2, // Slight delay between each item
          ease: 'power3.out', // Smoother easing
          scrollTrigger: {
            trigger: el,
            start: 'top 75%', // Adjusted for quicker triggering
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Smooth animation for the "What We Stand For" divs
    gsap.utils.toArray('.stand-for-item').forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30, // Start from a smaller distance
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.2, // Slight delay between items
          ease: 'power2.out', // Use a smoother ease
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          "Welcome to our hostel—a place where academic aspirations meet a supportive and comfortable living environment."
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div ref={imageRef} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={hostelImage}
            alt="Hostel Building"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Our Story</h3>
          <p className="value-section text-gray-700 text-sm md:text-base leading-relaxed">
            Our hostel, established in 2020, provides students with a perfect blend of academic focus and personal comfort. Designed to foster growth and learning, it’s a home away from home where lifelong memories and friendships are made.
          </p>
          <h3 className="value-section text-2xl font-bold text-gray-700 mt-6 mb-4">
            Mission & Vision
          </h3>
          <p className="value-section text-gray-700 text-sm md:text-base leading-relaxed">
            We aim to offer a secure, inclusive, and welcoming environment for students. Our vision is to support academic excellence and create a vibrant community that values respect, diversity, and mutual growth.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
          What We Stand For
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div ref={addValueRef} className="stand-for-item bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-lg font-bold text-gray-700 mb-3">Safety</h4>
            <p className="text-gray-600 text-sm">
              Ensuring a secure and monitored environment for all residents with 24/7 surveillance.
            </p>
          </div>
          {/* Value 2 */}
          <div ref={addValueRef} className="stand-for-item bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-lg font-bold text-gray-700 mb-3">Comfort</h4>
            <p className="text-gray-600 text-sm">
              Providing modern, well-maintained facilities to make your stay pleasant and productive.
            </p>
          </div>
          {/* Value 3 */}
          <div ref={addValueRef} className="stand-for-item bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-lg font-bold text-gray-700 mb-3">Community</h4>
            <p className="text-gray-600 text-sm">
              Promoting a sense of belonging and collaboration among students from diverse backgrounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
