import React from "react";
import Rahul from "../assets/Rahul.jpeg";

const HostelSection = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-10 flex justify-center items-center  shadow-lg w-full mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-28">
        {/* Image Section */}
        <img
          src={Rahul}
          alt="Principal"
          className="w-48 h-48 md:w-60 md:h-60 rounded-lg shadow-md mb-6 md:mb-0 object-cover flex-shrink-0"
        />

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Message from the Principal
          </h2>
          <p className="text-gray-600">
            Dear Students, welcome to our college hostel—a home away from home. Here, you will find a safe, comfortable, and inclusive environment that nurtures academic growth and personal development.
          </p>
          <p className="text-gray-600">
            Make the most of your time here, respect each other, and embrace opportunities for learning and building friendships. Together, we create a community of excellence.
          </p>
      <div className="mt-6">
      <p className="text-gray-800 font-bold">Best regards, Pranav Kumar,</p>
      <p className="text-gray-800 font-bold ">Government Engineering College Arwal</p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HostelSection;
