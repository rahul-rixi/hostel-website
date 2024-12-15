import React, { useEffect, useRef, useState, useContext } from 'react';
import { gsap } from 'gsap';
import wardenImage from '../assets/boydp.avif';
import { ThemeContext } from '../ThemeContext';

const WardenMessage = () => {
  const { theme, subTextColour, bgColour, textColour } = useContext(ThemeContext); // Fetch colors from context
  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const isMobile = window.innerWidth < 768; // Check for mobile view

      gsap.fromTo(
        '.warden-message-container',
        { opacity: 0, y: isMobile ? 30 : 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.warden-image',
        { scale: 0 },
        { scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
      );

      gsap.fromTo(
        '.warden-info',
        { opacity: 0, x: isMobile ? 0 : -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.7 }
      );
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 transition-colors duration-300"
      style={{
        backgroundColor: bgColour, // Apply background color from context
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 warden-message-container">
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{
            color: textColour, // Apply heading text color dynamically
          }}
        >
          Message from the Warden
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mt-8 space-y-8 md:space-y-0">
          <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg warden-image">
            <img
              src={wardenImage}
              alt="Warden"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`max-w-lg warden-info text-center md:text-left`}
            style={{
              color: subTextColour, // Apply subheading text color dynamically
            }}
          >
            <h3
              className="text-2xl font-semibold"
              style={{
                color: textColour, // Apply subheading text color dynamically
              }}
            >
              Mr. John Doe
            </h3>
            <p
              className="text-lg font-medium"
              style={{
                color: subTextColour, // Apply subheading text color dynamically
              }}
            >
              Head Warden
            </p>
            <p
              className="mt-4 italic"
              style={{
                color: subTextColour, // Apply subheading text color dynamically
              }}
            >
              "Welcome to our college hostel! It’s my privilege to ensure a safe and comfortable environment for all students. Our goal is to foster
              personal growth, discipline, and camaraderie among students. Together, we can create a positive and supportive community. I look forward
              to working with each of you to make your stay memorable and enriching."
            </p>
            <p
              className="mt-6 font-medium"
              style={{
                color: subTextColour, // Apply subheading text color dynamically
              }}
            >
              <strong>Contact:</strong> +91-XXXX-XXXXXX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WardenMessage;
