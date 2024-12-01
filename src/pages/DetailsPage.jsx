import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import facilityImage1 from "../assets/first1.jpg";
import facilityImage2 from "../assets/second.jpg";
import facilityImage3 from "../assets/third.jpg";

const DetailsPage = () => {
  const facilityRefs = useRef([]);
  const numberRefs = useRef([]);

  const addToRefs = (el, refType) => {
    if (el && !refType.current.includes(el)) {
      refType.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade-in animation for facility cards
    gsap.fromTo(
      facilityRefs.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: facilityRefs.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Counter animation for numbers
    numberRefs.current.forEach((ref, index) => {
      const endValue = ref.getAttribute("data-end-value");
      gsap.fromTo(
        ref,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: facilityRefs.current[index],
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            ref.innerHTML = Math.floor(ref.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-6 md:px-20 pt-32">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Hostel Facilities</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Our hostel offers a wide range of facilities designed to provide students with a comfortable, convenient, and secure living environment.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            number: 570,
            title: "Total Students",
            description: "A vibrant community of 570 students fostering diversity and inclusion.",
            image: facilityImage1,
          },
          {
            number: 160,
            title: "Rooms",
            description: "160 spacious and well-furnished rooms with modern amenities.",
            image: facilityImage2,
          },
          {
            number: 30,
            title: "Staff Members",
            description: "A dedicated team of 30 staff ensures smooth operations.",
            image: facilityImage3,
          },
          {
            number: 7,
            title: "TV Rooms",
            description: "7 common TV rooms to relax and enjoy with friends.",
            image: facilityImage1,
          },
          {
            number: 14,
            title: "Water Filters",
            description: "14 water filters ensuring safe drinking water.",
            image: facilityImage2,
          },
          {
            number: 7,
            title: "Washing Machines",
            description: "7 washing machines for convenient laundry.",
            image: facilityImage3,
          },
        ].map((facility, index) => (
          <div
            key={index}
            ref={(el) => addToRefs(el, facilityRefs)}
            className="relative cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Description (Hover Only) */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-sm px-4">{facility.description}</p>
              </div>
            </div>

            {/* Title and Animated Number (Below Image) */}
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
              <div
                ref={(el) => addToRefs(el, numberRefs)}
                data-end-value={facility.number}
                className="text-5xl font-bold text-indigo-600"
              >
                0
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What Makes Us Better Section */}
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          What Makes Us Better
          <span className="absolute left-0 bottom-0 h-1 w-full bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Explore the additional features that make our hostel a top choice for students.
        </p>
      </div>

      {/* Features Grid (What Makes Us Better Section) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          { title: "24/7 Security", description: "Our hostel is equipped with 24/7 security to ensure safety.", image: facilityImage1 },
          { title: "Wi-Fi Connectivity", description: "High-speed internet is available throughout the hostel.", image: facilityImage2 },
          { title: "24/7 Power Supply", description: "Enjoy uninterrupted power supply at any time of the day.", image: facilityImage3 },
          { title: "Water Cooler with Purifier", description: "Safe drinking water is ensured with water coolers and purifiers.", image: facilityImage1 },
          { title: "CCTV Support", description: "Our premises are under constant CCTV surveillance for security.", image: facilityImage2 },
          { title: "Photostat Shop", description: "A photocopy (Xerox) shop is available within the hostel building.", image: facilityImage3 },
          { title: "24/7 Maintenance Support", description: "Our maintenance team is available 24/7 for any issues.", image: facilityImage1 },
          { title: "Common Room with Cable TV", description: "Relax in our spacious common room with cable TV for entertainment.", image: facilityImage2 },
          { title: "24/7 Medical Support", description: "Our hostel provides 24/7 medical support for students.", image: facilityImage3 },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-lg shadow-md border overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ userSelect: "none" }}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </div>
            <h3 className="text-lg font-bold text-gray-700 mt-4 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
              {feature.description}
            </p>
            <span className="absolute inset-0 bg-blue-500 opacity-5 group-hover:opacity-20 transition-opacity duration-300"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
