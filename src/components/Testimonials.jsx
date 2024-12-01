import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dp from "../assets/dp.jpeg"; // Import the image

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Kumar",
      title: "B.Tech 3rd Semester",
      text: "The hostel provides a peaceful and well-maintained environment. The staff is supportive, and the facilities are great for studying and relaxing.",
      image: dp, // Use the imported dp image here
    },
    {
      name: "Anish Raj",
      title: "B.Tech 3rd Semester",
      text: "I really enjoy staying here. The rooms are spacious, and the food quality is always fresh and delicious. The hostel has a homely atmosphere.",
      image: dp, // Use the imported dp image here
    },
    {
      name: "Amarjeet Singh",
      title: "B.Tech 3rd Semester",
      text: "The best part about the hostel is the fast Wi-Fi and the common areas where we can interact and study together. I feel comfortable and safe here.",
      image: dp, // Use the imported dp image here
    },
    {
      name: "Ashish Kumar",
      title: "B.Tech 3rd Semester",
      text: "I am very happy with the cleanliness of the hostel. The staff is always ready to help, and the food is nutritious. It’s a great place for students.",
      image: dp, // Use the imported dp image here
    },
    {
      name: "Amit Sharma",
      title: "B.Tech 3rd Semester",
      text: "Living here has been a great experience. The hostel provides all the necessary facilities, and the atmosphere is perfect for focusing on studies.",
      image: dp, // Use the imported dp image here
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: (
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full cursor-pointer">
        &#8592;
      </div>
    ),
    nextArrow: (
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full cursor-pointer">
        &#8594;
      </div>
    ),
  };

  return (
    <div className="w-full mx-auto bg-gray-100 py-12 px-6 sm:px-12 md:px-24 lg:px-52 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        What Our Hostel Residents Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={testimonial.image} // Use the imported dp.jpeg here
                alt={testimonial.name}
                className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4"
              />
              <p className="italic text-lg text-gray-600 mb-4">
                "{testimonial.text}"
              </p>
              <h4 className="text-xl font-semibold text-gray-800">
                - {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Styles for Dots */}
      <style jsx>{`
        .slick-dots {
          bottom: -40px; /* Adjust the position of dots */
        }
        .slick-dots li button:before {
          font-size: 12px; /* Smaller dot size */
          color: rgba(0, 0, 0, 0.5); /* Darker inactive dots */
        }
        .slick-dots li.slick-active button:before {
          font-size: 16px; /* Larger active dot */
          color: black; /* Change active dot color */
          width: 30px; /* Make active dot a rectangle */
          height: 8px; /* Set height for rectangle */
          border-radius: 4px; /* Rounded corners */
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
