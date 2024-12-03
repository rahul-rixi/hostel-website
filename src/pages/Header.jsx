import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner3 from "../assets/banner3.jpg";

const Header = () => {
  const images = [banner5, banner3, banner2, banner4, banner1];
  const imageAltTexts = [
    "Beautiful scenic view of a lake",
    "Peaceful sunset behind mountains",
    "Vibrant city view at night",
    "Serene nature landscape",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          zIndex: "10",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex justify-center space-x-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="dot"
      ></div>
    ),
  };

  return (
    <div className="relative">
      {/* Slider Section */}
      <Slider {...settings} className="h-[100vh]">
        {images.map((image, index) => (
          <div key={index} className="h-full relative">
            <img
              src={image}
              alt={imageAltTexts[index]}
              className="w-full h-[100vh] object-cover select-none"
            />
          </div>
        ))}
      </Slider>

      {/* Semi-transparent black background for text visibility */}
      <div className=" mt-10 absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Text Overlay Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight drop-shadow-xl">
          Welcome to Boy's Hostel
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 italic max-w-3xl px-4">
          "A hostel isn't just a building; it's a second home filled with stories, friendships, and dreams."
        </p>
        <NavLink to="/gallery">
          <button className="px-8 py-4 mt-8 bg-white bg-opacity-10 text-white font-medium rounded-lg border-2 border-white opacity-90 backdrop-blur-md hover:opacity-100 hover:bg-opacity-20 hover:backdrop-blur-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            See Inside
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
