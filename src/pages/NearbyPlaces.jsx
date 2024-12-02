import React from "react";

const places = [
  {
    name: "Mehandiya Market",
    description:
      "A bustling market just 2 km from the hostel, offering daily essentials, local eateries, and shopping options.",
    distance: "2 km",
    coordinates: "25.0427, 84.7571", // Correct coordinates for Mehandiya Market, India
  },
  {
    name: "Son River",
    description:
      "A serene riverfront perfect for morning walks and evening relaxation, located 5 km away.",
    distance: "5 km",
    coordinates: "25.1255, 84.6935", // Correct coordinates for Son River, India
  },
  {
    name: "Shiv Temple, Pahleja",
    description:
      "A historic temple known for its architecture and peaceful ambiance, just 3 km from the hostel.",
    distance: "3 km",
    coordinates: "25.0971, 84.7467", // Correct coordinates for Shiv Temple, Pahleja, India
  },
  {
    name: "Aurangabad Road",
    description:
      "A key connecting road with restaurants, cafes, and local attractions, only 1.5 km from the hostel.",
    distance: "1.5 km",
    coordinates: "25.0250, 84.7870", // Correct coordinates for Aurangabad Road, India
  },
];

const NearbyPlaces = () => {
  const handleVisitClick = (coordinates) => {
    // Open Google Maps with the given coordinates as a destination
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 mt-24">
      <div className="text-center mb-10">
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
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${place.coordinates}`}
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
