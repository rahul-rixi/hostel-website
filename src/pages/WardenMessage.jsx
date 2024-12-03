import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import wardenImage from '../assets/warden.png';
const WardenMessage = () => {
  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    // Intersection Observer callback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view, trigger the animations
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // GSAP animation when the section becomes visible
      gsap.fromTo(
        '.warden-message-container',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.warden-image',
        { scale: 0 },
        { scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
      );

      gsap.fromTo(
        '.warden-info',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.7 }
      );
    }
  }, [isVisible]); // Trigger animation when `isVisible` changes to true

  return (
    <section ref={sectionRef} className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-4 warden-message-container">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">Message from the Warden</h2>
        
        <div className="flex justify-center items-center flex-wrap space-x-8 mt-8">
          <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg warden-image">
            <img src={wardenImage} alt="Warden" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-lg warden-info">
            <h3 className="text-2xl font-semibold text-gray-800">Mr. John Doe</h3>
            <p className="text-lg font-medium text-gray-600">Head Warden</p>
            <p className="mt-4 text-gray-600 italic">
              "Welcome to our college hostel! It’s my privilege to ensure a safe and comfortable environment for all students. Our goal is to foster personal growth, discipline, and camaraderie among students. Together, we can create a positive and supportive community. I look forward to working with each of you to make your stay memorable and enriching."
            </p>
            <p className="mt-6 text-gray-700 font-medium">
              <strong>Contact:</strong> warden@college.edu | +91-XXXX-XXXXXX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WardenMessage;
