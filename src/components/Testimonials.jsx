import React, { useState, useEffect } from 'react';
import dp from '../assets/dp.jpeg'; // Import the image

const testimonials = [
  { name: 'Rahul Kumar', title: 'B.Tech 3rd Semester', text: 'The hostel provides a peaceful and well-maintained environment. The staff is supportive, and the facilities are great for studying and relaxing.', image: dp },
  { name: 'Anish Raj', title: 'B.Tech 3rd Semester', text: 'I really enjoy staying here. The rooms are spacious, and the food quality is always fresh and delicious. The hostel has a homely atmosphere.', image: dp },
  { name: 'Amarjeet Singh', title: 'B.Tech 3rd Semester', text: 'The best part about the hostel is the fast Wi-Fi and the common areas where we can interact and study together. I feel comfortable and safe here.', image: dp },
  { name: 'Ashish Kumar', title: 'B.Tech 3rd Semester', text: 'I am very happy with the cleanliness of the hostel. The staff is always ready to help, and the food is nutritious. It’s a great place for students.', image: dp },
  { name: 'Amit Sharma', title: 'B.Tech 3rd Semester', text: 'Living here has been a great experience. The hostel provides all the necessary facilities, and the atmosphere is perfect for focusing on studies.', image: dp },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    return [
      testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
    ];
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-20 min-h-screen flex flex-col items-center">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-10">What Our Hostel Residents Say</h2>

      <div className="relative flex justify-center items-center space-x-6 max-w-full overflow-hidden">
        {/* Render testimonials with proper scaling for mobile */}
        {getVisibleTestimonials().map((testimonial, index) => {
          const isCenter = index === 1;
          return (
            <div
              key={index}
              className={`transition-transform duration-700 ease-in-out transform ${
                isCenter
                  ? 'scale-110 z-10 opacity-100'
                  : 'scale-90 opacity-80 hidden md:flex flex-wrap'
              }`}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 mx-auto">
                <img
                  src={testimonial.image}
                  alt={`Image of ${testimonial.name}`}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-300"
                />
                <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`transition-all h-3 ${index === currentIndex ? 'w-6 bg-gray-800 rounded-md' : 'w-3 bg-gray-400 rounded-full'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
