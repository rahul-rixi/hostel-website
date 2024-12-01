import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hostelImage from '../assets/hostel.jpg'; // Replace with actual image path

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  const addTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Image animation
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom', // Trigger when the top of the image reaches the bottom of the viewport
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text and div animations
    textRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom', // Trigger when the top of the element reaches the bottom of the viewport
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20"
      style={{ userSelect: 'none' }} // Makes the entire section unselectable
    >
      <div className="text-center mb-10">
        <h2
          ref={addTextRef}
          className="text-4xl font-bold text-gray-800 md:text-5xl"
        >
          About Us
        </h2>
        <p
          ref={addTextRef}
          className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto"
        >
          "Welcome to our hostel—a place where academic aspirations meet a supportive and comfortable living environment."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          ref={imageRef}
          className="rounded-lg overflow-hidden shadow-lg"
          style={{ pointerEvents: 'none', userSelect: 'none' }} // Makes the image unselectable and unclickable
        >
          <img
            src={hostelImage}
            alt="Hostel Building"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h3
            ref={addTextRef}
            className="text-2xl font-bold text-gray-700 mb-4"
          >
            Our Story
          </h3>
          <p
            ref={addTextRef}
            className="text-gray-700 text-sm md:text-base leading-relaxed"
          >
            Our hostel, established in 2020, provides students with a perfect blend of academic focus and personal comfort. Designed to foster growth and learning, it’s a home away from home where lifelong memories and friendships are made.
          </p>
          <h3
            ref={addTextRef}
            className="text-2xl font-bold text-gray-700 mt-6 mb-4"
          >
            Mission & Vision
          </h3>
          <p
            ref={addTextRef}
            className="text-gray-700 text-sm md:text-base leading-relaxed"
          >
            We aim to offer a secure, inclusive, and welcoming environment for students. Our vision is to support academic excellence and create a vibrant community that values respect, diversity, and mutual growth.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3
          ref={addTextRef}
          className="text-3xl font-bold text-gray-800 text-center mb-6"
        >
          What We Stand For
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            ref={addTextRef}
            className="bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h4 className="text-lg font-bold text-gray-700 mb-3">Safety</h4>
            <p className="text-gray-600 text-sm">
              Ensuring a secure and monitored environment for all residents with 24/7 surveillance.
            </p>
          </div>
          <div
            ref={addTextRef}
            className="bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h4 className="text-lg font-bold text-gray-700 mb-3">Comfort</h4>
            <p className="text-gray-600 text-sm">
              Providing modern, well-maintained facilities to make your stay pleasant and productive.
            </p>
          </div>
          <div
            ref={addTextRef}
            className="bg-white p-6 rounded-lg shadow-md border transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
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
