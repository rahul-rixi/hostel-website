import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import principalImage from '../assets/Rahul.jpeg'; // Replace with actual image path

gsap.registerPlugin(ScrollTrigger);

const PrincipalMessage = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Text animation: fade-in effect
    gsap.utils.toArray(textRefs.current).forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0 }, // Initial opacity is 0
        {
          opacity: 1, // Fade to full opacity
          duration: 0.8,
          delay: index * 0.3, // Staggered effect
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Image animation: fade-in effect (opacity only)
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 }, // Initial opacity is 0
      {
        opacity: 1, // Fade to full opacity
        duration: 1, // Smoother transition
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      id="principal-message"
      className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20"
      style={{ userSelect: 'none' }} // Prevent text selection
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Message from the Principal
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <div
            ref={imageRef}
            className="w-56 md:w-72 lg:w-96 h-56 md:h-72 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-gray-300 transform transition-all duration-300"
            style={{ pointerEvents: 'none', userSelect: 'none' }} // Make image unselectable
          >
            <img
              src={principalImage}
              alt="Principal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border">
          {[
            `"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."`,
            'Dear Students,',
            'Welcome to our hostel. We believe the environment where you reside plays a significant role in shaping your personality and aiding academic success. Our hostel is a nurturing ground for aspirations, discipline, and growth.',
            'We ensure a safe, comfortable, and inspiring space to foster an atmosphere of learning and camaraderie. Success begins with determination, hard work, and the right guidance.',
            'Welcome to a community where you will not only achieve academic excellence but also create memories and friendships that last a lifetime.',
            'Best regards,\nRahul Kumar\nPrincipal, Government Engineering College Arwal',
          ].map((line, index) => (
            <p
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-gray-700 text-sm leading-relaxed mb-4"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
