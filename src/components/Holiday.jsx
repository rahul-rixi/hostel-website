import React from "react";

const holidays = [
  { name: "New Year's Day", date: "1st January", day: "Monday", totalDays: "1 day" },
  { name: "Makar Sankranti", date: "15th January", day: "Monday", totalDays: "1 day" },
  { name: "Guru Gobind Singh Jayanti", date: "17th January", day: "Wednesday", totalDays: "1 day" },
  { name: "Republic Day", date: "26th January", day: "Friday", totalDays: "1 day" },
  { name: "Vasant Panchami / Saraswati Puja", date: "14th February", day: "Wednesday", totalDays: "1 day" },
  { name: "Sant Ravidas Jayanti", date: "24th February", day: "Saturday", totalDays: "1 day" },
  { name: "Shab-e-Barat", date: "26th February", day: "Monday", totalDays: "1 day" },
  { name: "Maha Shivaratri", date: "8th March", day: "Friday", totalDays: "1 day" },
  { name: "Bihar Day", date: "22nd March", day: "Friday", totalDays: "1 day" },
  { name: "Holi", date: "25th-28th March", day: "Monday to Thursday", totalDays: "4 days" },
  { name: "Good Friday", date: "29th March", day: "Friday", totalDays: "1 day" },
  { name: "Eid ul-Fitr", date: "12th April", day: "Friday", totalDays: "1 day" },
  { name: "Ambedkar Jayanti", date: "14th April", day: "Sunday", totalDays: "1 day" },
  { name: "Ram Navami", date: "17th April", day: "Wednesday", totalDays: "1 day" },
  { name: "Maharvir Jayanti", date: "21st April", day: "Sunday", totalDays: "1 day" },
  { name: "Veer Kunwar Singh Jayanti", date: "23rd April", day: "Tuesday", totalDays: "1 day" },
  { name: "Labour Day", date: "1st May", day: "Wednesday", totalDays: "1 day" },
  { name: "Janaki Navami", date: "17th May", day: "Friday", totalDays: "1 day" },
  { name: "Buddha Purnima", date: "23rd May", day: "Thursday", totalDays: "1 day" },
  { name: "Summer Vacation / Eid ul-Zuha / Bakrid", date: "1st-30th June", day: "Sunday", totalDays: "25 days + 5 Sundays" },
  { name: "Muharram", date: "17th July", day: "Wednesday", totalDays: "1 day" },
  { name: "Independence Day", date: "15th August", day: "Thursday", totalDays: "1 day" },
  { name: "Raksha Bandhan", date: "19th August", day: "Monday", totalDays: "1 day" },
  { name: "Krishna Janmashtami / Chehlum", date: "26th August", day: "Monday", totalDays: "1 day" },
  { name: "Eid-e-Milad", date: "25th September", day: "Monday", totalDays: "1 day" },
  { name: "Gandhi Jayanti", date: "2nd October", day: "Wednesday", totalDays: "1 day" },
  { name: "Durga Puja", date: "9th-12th October", day: "Wednesday to Saturday", totalDays: "4 days" },
  { name: "Diwali, Chitragupt Puja, Bhai Dooj, Chhath Puja", date: "30th October-9th November", day: "Wednesday to Saturday", totalDays: "10 days + 2 Sundays" },
  { name: "Guru Nanak Jayanti", date: "15th November", day: "Friday", totalDays: "1 day" },
  { name: "Christmas Holidays", date: "25th-31st December", day: "Wednesday to Tuesday", totalDays: "6 days + 1 Sunday" },
];

const HolidayComponent = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full mx-auto overflow-x-auto ">
      <h1 className="text-3xl mt-16 font-bold text-center mb-6 text-gray-800">Holiday List</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-4 px-6 text-left">Vacation Name</th>
            <th className="py-4 px-6 text-left">Date</th>
            <th className="py-4 px-6 text-left">Day</th>
            <th className="py-4 px-6 text-left">Total Holidays</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={index} className="border-t hover:bg-indigo-50  transition duration-300 ease-in-out transform hover:scale-105">
              <td className="py-4 px-6 text-gray-800">{holiday.name}</td>
              <td className="py-4 px-6 text-gray-600">{holiday.date}</td>
              <td className="py-4 px-6 text-gray-600">{holiday.day}</td>
              <td className="py-4 px-6 text-gray-600">{holiday.totalDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidayComponent;
