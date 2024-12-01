import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );

    gsap.fromTo(
      inputRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center  justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-400"
    >
      <div className="bg-gray-100 mt-11 mx-5 p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Student Login
        </h2>
        <p className="text-sm text-center text-gray-500 mb-8">
          Welcome back! Please enter your details to continue.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              ref={(el) => (inputRefs.current[0] = el)}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full p-4 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700"
            />
            <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              ref={(el) => (inputRefs.current[1] = el)}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full p-4 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 bg-white text-gray-700"
            />
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Forgot your password?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 transition duration-200"
          >
            Reset it here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
