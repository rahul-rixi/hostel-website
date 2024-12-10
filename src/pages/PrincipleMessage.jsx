import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import principleImage from "../assets/principle.jpg"; 
import { ThemeContext } from "../ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const HostelSection = () => {
  const { theme } = useContext(ThemeContext);
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
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Trigger when the top of the image is 80% visible in the viewport
          toggleActions: "play none none none", // Play only 
        },
      }
    );

    // Text animations
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
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Trigger when the top of the element is 80% visible in the viewport
            toggleActions: "play none none none", // Play only once
          },
        }
      );
    });
  }, []);

  return (
    <div
      className={`p-6 md:p-10 flex justify-center items-center shadow-lg w-full mx-auto ${
        theme === 'light' ? 'bg-[var(--bg-light)] text-[var(--text-light)]' : 'bg-[var(--bg-dark)] text-[var(--text-dark)]'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-28">
        {/* Image Section */}
        <img
          ref={imageRef}
          src={principleImage}
          alt="Principal"
          className="w-48 h-48 md:w-60 md:h-60 rounded-lg shadow-md mb-6 md:mb-0 object-cover flex-shrink-0"
        />

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h2
            ref={addTextRef}
            className={`text-2xl md:text-3xl font-bold ${
              theme === 'light' ? 'text-[var(--text-light)]' : 'text-[var(--text-dark)]'
            }`}
          >
            Message from the Principal
          </h2>
          <p
            ref={addTextRef}
            className={`${
              theme === 'light' ? 'text-[var(--text-light-secondary)]' : 'text-[var(--text-dark-secondary)]'
            }`}
          >
            Dear Students, welcome to our college hostel—a home away from home.
            Here, you will find a safe, comfortable, and inclusive environment
            that nurtures academic growth and personal development.
          </p>
          <p
            ref={addTextRef}
            className={`${
              theme === 'light' ? 'text-[var(--text-light-secondary)]' : 'text-[var(--text-dark-secondary)]'
            }`}
          >
            Make the most of your time here, respect each other, and embrace
            opportunities for learning and building friendships. Together, we
            create a community of excellence.
          </p>
          <div
            ref={addTextRef}
            className={`mt-6 ${theme === 'light' ? 'text-[var(--text-light)]' : 'text-[var(--text-dark)]'}`}
          >
            <p className="font-bold">Best regards, Pranav Kumar,</p>
            <p className="font-bold">Government Engineering College Arwal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelSection;
