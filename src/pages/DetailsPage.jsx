import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FacilitiesPage = () => {
  const numbersRef = useRef([]);

  useEffect(() => {
    numbersRef.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { innerText: 0 },
        {
          innerText: ref.getAttribute("data-target"),
          duration: 1,
          ease: "power3.out",
          snap: { innerText: 1 },
          stagger: 0.1,
        }
      );
    });

    gsap.fromTo(
      '.facility-description',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 pt-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Hostel Facilities</h1>
        <p className="text-lg text-gray-700">
          Our hostel offers a wide range of facilities designed to provide students with a comfortable, convenient, and secure living environment.
        </p>
      </div>

      {/* Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { number: 570, title: "Total Students", description: "Our hostel accommodates a total of 570 students, offering a vibrant and diverse living experience." },
          { number: 160, title: "Rooms", description: "The hostel has 160 spacious rooms, each designed for comfort and convenience with all essential amenities." },
          { number: 6, title: "TV Rooms", description: "We have 6 TV rooms where students can relax, watch movies, or enjoy their free time with friends." },
          { number: 7, title: "Water Filters", description: "The hostel provides 7 water filters ensuring access to clean and safe drinking water for all students." },
          { number: 7, title: "Washing Machines", description: "There are 7 washing machines available for student use, making laundry day much more convenient." },
          { number: 1, title: "Gym", description: "The hostel offers a well-equipped gym to help students maintain a healthy and active lifestyle." },
        ].map((facility, index) => (
          <div className="facility-item text-center" key={index}>
            <div
              ref={(el) => (numbersRef.current[index] = el)}
              data-target={facility.number}
              className="facility-number text-6xl font-bold text-indigo-600 mb-4"
            >
              0
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
            <p className="facility-description text-gray-600 mt-2">
              {facility.description}
            </p>
          </div>
        ))}
      </div>

      {/* Facility Details Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">More About Our Hostel Facilities</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our hostel provides a range of facilities designed to ensure a comfortable and convenient stay for students. The rooms are spacious, well-lit, and clean, furnished with comfortable beds, ample storage space, and study desks. Regular housekeeping ensures that the living spaces remain tidy. Each floor has a common area equipped with sofas and televisions where students can relax and socialize.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          For academic needs, there is a dedicated study room that is quiet and conducive to studying, complete with individual desks and good lighting. The hostel also has a well-equipped gym, encouraging students to maintain a healthy lifestyle. Security is a top priority, with 24/7 surveillance and security personnel ensuring a safe environment.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          The mess provides a variety of nutritious meals, catering to different dietary preferences. The food is generally tasty and well-balanced, although it can get repetitive. High-speed Wi-Fi is available throughout the hostel, allowing students to stay connected and complete their academic work efficiently. The laundry service is reliable, with washers and dryers available for student use.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Additionally, the hostel's location is a major advantage, being in close proximity to the campus and other essential facilities like grocery stores, medical centers, and public transport. Overall, the hostel offers a well-rounded living experience with all the necessary amenities for a student's academic and personal well-being.
        </p>
      </div>
    </div>
  );
};

export default FacilitiesPage;
