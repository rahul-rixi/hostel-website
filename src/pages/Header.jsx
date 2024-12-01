import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import first1 from "../assets/first1.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import lakeImage from "../assets/Lake.jpg";
import lake2 from "../assets/hostel4.webp";

const Header = () => {
  const images = [first1, second, third, lakeImage, lake2];
  const imageAltTexts = [
    "Beautiful scenic view of a lake",
    "Peaceful sunset behind mountains",
    "Vibrant city view at night",
    "Calm lake view during daytime",
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
      <div style={{ bottom: "20px" }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#fff",
          borderRadius: "50%",
        }}
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

      {/* Text Overlay Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase drop-shadow-md">
          Welcome to Boy's Hostel
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300 italic max-w-2xl">
          "A hostel isn't just a building; it's a second home filled with
          stories, friendships, and dreams."
        </p>
        <NavLink to="/gallery">
          <button className="px-6 py-3 mt-6 bg-white bg-opacity-10 text-white font-medium rounded-lg border-2 border-white opacity-80 backdrop-blur-md hover:opacity-90 hover:bg-opacity-20 hover:backdrop-blur-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            See Inside
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
