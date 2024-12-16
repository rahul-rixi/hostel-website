import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa"; // Import FaStar from react-icons
import dp from "../assets/dp.jpeg"; // Import the image
import { ThemeContext } from '../ThemeContext';
import rahulimage from "../assets/Rahul.jpeg"

const TestimonialsSection = () => {
  const { theme, bgColour, containerColour, textColour, subTextColour } = useContext(ThemeContext);

  const testimonials = [
    {
      name: "Rahul Kumar",
      title: "B.Tech 3rd Semester",
      text: "The hostel provides a peaceful and well-maintained environment. The staff is supportive, and the facilities are great for studying and relaxing.",
      image: rahulimage, // Use the imported dp image here
      rating: 5, // 5 stars rating
    },
    {
      name: "Anish Raj",
      title: "B.Tech 3rd Semester",
      text: "I really enjoy staying here. The rooms are spacious, and the food quality is always fresh and delicious. The hostel has a homely atmosphere.",
      image: dp, // Use the imported dp image here
      rating: 4, // 4 stars rating
    },
    {
      name: "Amarjeet Singh",
      title: "B.Tech 3rd Semester",
      text: "The best part about the hostel is the fast Wi-Fi and the common areas where we can interact and study together. I feel comfortable and safe here.",
      image: dp, // Use the imported dp image here
      rating: 5, // 5 stars rating
    },
    {
      name: "Ashish Kumar",
      title: "B.Tech 3rd Semester",
      text: "I am very happy with the cleanliness of the hostel. The staff is always ready to help, and the food is nutritious. It’s a great place for students.",
      image: dp, // Use the imported dp image here
      rating: 5, // 5 stars rating
    },
    {
      name: "Amit Sharma",
      title: "B.Tech 3rd Semester",
      text: "Living here has been a great experience. The hostel provides all the necessary facilities, and the atmosphere is perfect for focusing on studies.",
      image: dp, // Use the imported dp image here
      rating: 4, // 4 stars rating
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
    <div
      className={`w-full mx-auto pb-12 pt-1 px-6 sm:px-12 md:px-24 lg:px-52 shadow-lg`}
      style={{
        backgroundColor: bgColour, // Apply background color from context
      }}
    >
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{
          color: textColour, // Apply heading text color dynamically
        }}
      >
        What Our Hostel Residents Say
      </h2>
      <div
        className={`w-full ${containerColour} mx-auto`} // Apply container background color dynamically
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div
                className={`p-6 rounded-lg shadow-md text-center ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-gray-300'}`
                  
                }
                style={{
                  backgroundColor: containerColour, // Apply heading text color dynamically
                }}
              >
                <img
                  src={testimonial.image} // Use the imported dp.jpeg here
                  alt={testimonial.name}
                  className="mx-auto rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mb-4"
                />
                <p
                  className="italic text-lg mb-4"
                  style={{
                    color: subTextColour, // Apply subheading text color dynamically
                  }}
                >
                  "{testimonial.text}"
                </p>
                {/* Star Rating */}
                <div className="flex justify-center mt-3 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      color={i < testimonial.rating ? "#FFD700" : "#D3D3D3"} // Gold for active stars, gray for inactive
                      size={20}
                    />
                  ))}
                </div>
                <h4
                  className="text-xl font-semibold"
                  style={{
                    color: textColour, // Apply name text color dynamically
                  }}
                >
                  - {testimonial.name}
                </h4>
                <p
                  className="text-sm"
                  style={{
                    color: subTextColour, // Apply subheading text color dynamically
                  }}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .slick-dots {
          bottom: -30px; /* Adjust the position of dots */
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
