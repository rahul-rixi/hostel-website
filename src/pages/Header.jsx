import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; 
import first1 from '../assets/first1.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import lakeImage from '../assets/Lake.jpg';
import lake2 from '../assets/Lake2.jpg';
import { gsap } from 'gsap';

const Header = () => {
  const images = [first1, second, third, lakeImage, lake2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAnimated, setTextAnimated] = useState(false);
  const imageRef = useRef([]);
  const textRef = useRef([]);
  const dotRef = useRef([]);

  const imageAltTexts = [
    "Beautiful scenic view of a lake", 
    "Peaceful sunset behind mountains", 
    "Vibrant city view at night", 
    "Calm lake view during daytime", 
    "Serene nature landscape"
  ];

  useEffect(() => {
    if (!textAnimated) {
      gsap.utils.toArray(textRef.current).forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.3, ease: 'power3.out' }
        );
      });
      setTextAnimated(true);
    }

    gsap.fromTo(
      imageRef.current[currentIndex],
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: 'power4.out' }
    );

    gsap.fromTo(
      imageRef.current[(currentIndex - 1 + images.length) % images.length],
      { x: 0, opacity: 1 },
      { x: -100, opacity: 0, duration: 1.5, ease: 'power4.out' }
    );

    gsap.to(dotRef.current, {
      width: (index) => currentIndex === index ? '30px' : '10px', 
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, textAnimated]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="h-[100vh] w-full relative overflow-hidden">
        {images.map((image, index) => (
          <img
            ref={(el) => (imageRef.current[index] = el)}
            key={index}
            className="w-full h-full object-cover absolute transition-transform ease-in-out select-none" // Disable selection here
            style={{ opacity: currentIndex === index ? 1 : 0 }}
            src={image}
            alt={imageAltTexts[index]} // Dynamic alt text
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 select-none"> {/* Disable selection here */}
        <h1 ref={(el) => (textRef.current[0] = el)} className="text-4xl md:text-5xl font-bold text-white uppercase drop-shadow-md cursor-default">
          Welcome to Boy's Hostel
        </h1>
        <p ref={(el) => (textRef.current[1] = el)} className="mt-4 text-sm md:text-lg text-gray-300 italic max-w-2xl cursor-default">
          "A hostel isn't just a building; it's a second home filled with stories, friendships, and dreams."
        </p>
        <NavLink to="/gallery">
          <button className="px-6 py-3 mt-6 bg-white bg-opacity-10 text-white font-medium rounded-lg border-2 border-white opacity-80 backdrop-blur-md hover:opacity-90 hover:bg-opacity-20 hover:backdrop-blur-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default">
            See Inside
          </button>
        </NavLink>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 select-none"> {/* Disable selection here */}
        {images.map((_, index) => (
          <div
            key={index}
            ref={(el) => (dotRef.current[index] = el)}
            onClick={() => handleDotClick(index)}
            className={`h-4 rounded-full cursor-pointer transition-all duration-300`}
            style={{
              backgroundColor: currentIndex === index ? '#00BFFF' : 'gray',
              width: currentIndex === index ? '30px' : '10px',
              height: '10px',
              borderRadius: currentIndex === index ? '12px' : '50%',
              transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
