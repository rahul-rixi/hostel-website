import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import first1 from '../assets/first1.jpg';
import second from '../assets/second.jpg';
import third from '../assets/third.jpg';
import lakeImage from '../assets/lake.jpg';
import lake2 from '../assets/lake2.jpg';
import { gsap } from 'gsap';

const Header = () => {
  const images = [first1, second, third, lakeImage, lake2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAnimated, setTextAnimated] = useState(false);
  const imageRef = useRef([]);
  const textRef = useRef([]);
  const dotRef = useRef([]);

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
      { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      imageRef.current[(currentIndex - 1 + images.length) % images.length],
      { x: 0, opacity: 1 },
      { x: -100, opacity: 0, duration: 1.5, ease: 'power3.out' }
    );

    gsap.to(dotRef.current[currentIndex], {
      scale: 1.5, duration: 0.5, ease: 'power3.out',
    });

    gsap.to(dotRef.current[(currentIndex - 1 + images.length) % images.length], {
      scale: 1, duration: 0.5, ease: 'power3.out',
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
            className="w-full h-full object-cover absolute transition-transform ease-in-out"
            style={{ opacity: currentIndex === index ? 1 : 0 }}
            src={image}
            alt="Slider"
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30">
        <h1 ref={(el) => (textRef.current[0] = el)} className="text-4xl md:text-5xl font-bold text-white uppercase drop-shadow-md">
          Welcome to Boy's Hostel
        </h1>
        <p ref={(el) => (textRef.current[1] = el)} className="mt-4 text-sm md:text-lg text-gray-300 italic max-w-2xl">
          "A hostel isn't just a building; it's a second home filled with stories, friendships, and dreams."
        </p>
        <NavLink to="/gallery">
  <button className="px-6 py-3 mt-6 bg-white bg-opacity-10 text-white font-medium rounded-lg border-2 border-white opacity-80 backdrop-blur-md hover:opacity-90 hover:bg-opacity-20 hover:backdrop-blur-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
    See Inside
  </button>
</NavLink>




      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            ref={(el) => (dotRef.current[index] = el)}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full cursor-pointer bg-gray-400 transition-all duration-300`}
            style={{ backgroundColor: currentIndex === index ? 'white' : 'gray' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
