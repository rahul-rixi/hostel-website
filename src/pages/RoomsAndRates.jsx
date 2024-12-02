import React, { useState } from 'react';
import room from '../assets/room.jpg'; // Replace with the correct path to your image.

const RoomAvailability = () => {
  const generateRoomAvailability = () => {
    const totalRooms = 10;
    const reservedRooms = Math.floor(totalRooms * 0.9);
    const availableRooms = totalRooms - reservedRooms;

    const rooms = Array(reservedRooms).fill(false).concat(Array(availableRooms).fill(true));
    for (let i = rooms.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rooms[i], rooms[j]] = [rooms[j], rooms[i]];
    }
    return rooms;
  };

  const [roomData, setRoomData] = useState({
    1: {
      singleRooms: generateRoomAvailability(),
      tripleRooms: generateRoomAvailability(),
    },
    2: {
      singleRooms: generateRoomAvailability(),
      tripleRooms: generateRoomAvailability(),
    },
    3: {
      singleRooms: generateRoomAvailability(),
      tripleRooms: generateRoomAvailability(),
    },
    4: {
      singleRooms: generateRoomAvailability(),
      tripleRooms: generateRoomAvailability(),
    },
    5: {
      singleRooms: generateRoomAvailability(),
      tripleRooms: generateRoomAvailability(),
    },
  });

  const [selectedFloor, setSelectedFloor] = useState(1);

  const handleFloorChange = (e) => {
    setSelectedFloor(Number(e.target.value));
  };

  return (
    <>
      {/* Rooms & Rates Section */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Hostel Rooms & Rates</h2>
          <p className="text-lg text-gray-600 mb-12">
            Explore our affordable and comfortable rooms tailored to your needs. Choose a single room for privacy or a
            triple-sharing option for a budget-friendly experience.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Single Room */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 transform transition-all hover:scale-105 hover:shadow-xl">
              <img
                src={room}
                alt="Single Room"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Single Room</h3>
              <p className="text-gray-600 mb-4">
                Ideal for students seeking privacy, our single rooms offer a quiet and comfortable environment with
                essential amenities.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                ₹1200 <span className="text-sm text-gray-600">/month</span>
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>

            {/* Triple Sharing Room */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 transform transition-all hover:scale-105 hover:shadow-xl">
              <img
                src={room}
                alt="Triple Sharing Room"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Triple Sharing Room</h3>
              <p className="text-gray-600 mb-4">
                Perfect for students who enjoy company, our triple-sharing rooms provide ample space at an affordable
                price.
              </p>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                ₹800 <span className="text-sm text-gray-600">/month</span>
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Room Availability Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Room Availability by Floor</h2>
          <p className="text-lg text-gray-600 mb-12">
            Check the availability of rooms on each floor. Rooms marked in green are available, and those in red are
            reserved.
          </p>

          <div className="mb-8">
            <label htmlFor="floorSelect" className="text-xl font-semibold text-gray-800">
              Select Floor:
            </label>
            <select
              id="floorSelect"
              value={selectedFloor}
              onChange={handleFloorChange}
              className="ml-4 p-2 border rounded-md"
            >
              {[1, 2, 3, 4, 5].map((floor) => (
                <option key={floor} value={floor}>
                  Floor {floor}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-16 justify-center">
            {/* Single Rooms Column */}
            <div className="w-1/2 space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Single Rooms</h4>
              <div className="grid grid-cols-2 gap-2">
                {roomData[selectedFloor].singleRooms.map((isAvailable, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 ${isAvailable ? 'bg-green-500' : 'bg-red-500'} rounded-md text-white flex items-center justify-center`}
                  >
                    <span>{isAvailable ? `S-${index + 1}` : `S-${index + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Triple Rooms Column */}
            <div className="w-1/2 space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Triple Rooms</h4>
              <div className="grid grid-cols-2 gap-2">
                {roomData[selectedFloor].tripleRooms.map((isAvailable, index) => (
                  <div
                    key={index}
                    className={`w-20 h-20 ${isAvailable ? 'bg-green-500' : 'bg-red-500'} rounded-md text-white flex items-center justify-center`}
                  >
                    <span>{isAvailable ? `T-${index + 1}` : `T-${index + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomAvailability;
