import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const FacilitiesPage = () => {
  useEffect(() => {
    gsap.fromTo('.facility-number', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' });
    gsap.fromTo('.facility-description', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1, ease: 'power3.out' });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 pt-24"> {/* Adjust padding-top to 24 to clear navbar */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Hostel Facilities</h1>
        <p className="text-lg text-gray-700">
          Our hostel offers a wide range of facilities designed to provide students with a comfortable, convenient, and secure living environment.
        </p>
      </div>

      {/* Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Facility 1 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">570</div>
          <h3 className="text-xl font-semibold text-gray-800">Total Students</h3>
          <p className="facility-description text-gray-600 mt-2">
            Our hostel accommodates a total of 570 students, offering a vibrant and diverse living experience.
          </p>
        </div>

        {/* Facility 2 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">160</div>
          <h3 className="text-xl font-semibold text-gray-800">Rooms</h3>
          <p className="facility-description text-gray-600 mt-2">
            The hostel has 160 spacious rooms, each designed for comfort and convenience with all essential amenities.
          </p>
        </div>

        {/* Facility 3 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">6</div>
          <h3 className="text-xl font-semibold text-gray-800">TV Rooms</h3>
          <p className="facility-description text-gray-600 mt-2">
            We have 6 TV rooms where students can relax, watch movies, or enjoy their free time with friends.
          </p>
        </div>

        {/* Facility 4 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">7</div>
          <h3 className="text-xl font-semibold text-gray-800">Water Filters</h3>
          <p className="facility-description text-gray-600 mt-2">
            The hostel provides 7 water filters ensuring access to clean and safe drinking water for all students.
          </p>
        </div>

        {/* Facility 5 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">7</div>
          <h3 className="text-xl font-semibold text-gray-800">Washing Machines</h3>
          <p className="facility-description text-gray-600 mt-2">
            There are 7 washing machines available for student use, making laundry day much more convenient.
          </p>
        </div>

        {/* Facility 6 */}
        <div className="facility-item text-center">
          <div className="facility-number text-6xl font-bold text-indigo-600 mb-4">1</div>
          <h3 className="text-xl font-semibold text-gray-800">Gym</h3>
          <p className="facility-description text-gray-600 mt-2">
            The hostel offers a well-equipped gym to help students maintain a healthy and active lifestyle.
          </p>
        </div>
      </div>

      {/* Facility Details Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">More About Our Hostel Facilities</h2>
        <p className="text-lg text-gray-700">
          Our hostel provides a range of facilities designed to ensure a comfortable and convenient stay for students. The rooms are spacious, well-lit, and clean, furnished with comfortable beds, ample storage space, and study desks. Regular housekeeping ensures that the living spaces remain tidy. Each floor has a common area equipped with sofas and televisions where students can relax and socialize.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          For academic needs, there is a dedicated study room that is quiet and conducive to studying, complete with individual desks and good lighting. The hostel also has a well-equipped gym, encouraging students to maintain a healthy lifestyle. Security is a top priority, with 24/7 surveillance and security personnel ensuring a safe environment.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          The mess provides a variety of nutritious meals, catering to different dietary preferences. The food is generally tasty and well-balanced, although it can get repetitive. High-speed Wi-Fi is available throughout the hostel, allowing students to stay connected and complete their academic work efficiently. The laundry service is reliable, with washers and dryers available for student use.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          Additionally, the hostel's location is a major advantage, being in close proximity to the campus and other essential facilities like grocery stores, medical centers, and public transport. Overall, the hostel offers a well-rounded living experience with all the necessary amenities for a student's academic and personal well-being.
        </p>
      </div>
    </div>
  );
};

export default FacilitiesPage;
