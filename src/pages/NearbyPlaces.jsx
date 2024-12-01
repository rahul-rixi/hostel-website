import React from "react";

const places = [
  {
    name: "Mehandiya Market",
    description:
      "A bustling market just 2 km from the hostel, offering daily essentials, local eateries, and shopping options.",
    distance: "2 km",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8455457815597!2d90.39945241543251!3d23.75088138459119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77b5e2a0aab%3A0x3a29c2c6c7f9156f!2sDhaka!5e0!3m2!1sen!2sbd!4v1633101642158!5m2!1sen!2sbd",
    coordinates: "23.75088138459119, 90.39945241543251",
  },
  {
    name: "Son River",
    description:
      "A serene riverfront perfect for morning walks and evening relaxation, located 5 km away.",
    distance: "5 km",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8335046730374!2d90.38160971543418!3d23.761399383584684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f3c8b1cdcf%3A0x3a29c2c6c7f9156f!2sGulshan%202%20Circle!5e0!3m2!1sen!2sbd!4v1633101714058!5m2!1sen!2sbd",
    coordinates: "23.761399383584684, 90.38160971543418",
  },
  {
    name: "Shiv Temple, Pahleja",
    description:
      "A historic temple known for its architecture and peaceful ambiance, just 3 km from the hostel.",
    distance: "3 km",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.823503891815!2d90.3624678154352!3d23.77797238357359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b846e0fb4a73%3A0xd29c2c7f3c8b1cdcf!2sBanani!5e0!3m2!1sen!2sbd!4v1633101763548!5m2!1sen!2sbd",
    coordinates: "23.77797238357359, 90.3624678154352",
  },
  {
    name: "Aurangabad Road",
    description:
      "A key connecting road with restaurants, cafes, and local attractions, only 1.5 km from the hostel.",
    distance: "1.5 km",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.833504773013!2d90.34166791543625!3d23.805487583555122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6fb4c5dcdaf%3A0xd29c2c7f3c8b1cdf!2sDhanmondi%20Lake!5e0!3m2!1sen!2sbd!4v1633101794048!5m2!1sen!2sbd",
    coordinates: "23.805487583555122, 90.34166791543625",
  },
];

const NearbyPlaces = () => {
  const handleVisitClick = (coordinates) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 ">
      <div className="text-center mt-10 mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900">Nearby Places</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Explore the attractions and facilities near our hostel, providing both convenience and opportunities to unwind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
              <iframe
                title={place.name}
                src={place.mapEmbed}
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{place.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{place.description}</p>
            <p className="text-indigo-600 font-medium">{place.distance} away</p>
            <button
              onClick={() => handleVisitClick(place.coordinates)}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;
