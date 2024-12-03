import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactListCompact = () => {
  const tableRef = useRef(null); // Reference to the table for animation

  const data = [
    { role: "Head Warden", name: "Mr. John Doe", phone: "+91-12345-67890" },
    { role: "Assistant Warden", name: "Ms. Jane Smith", phone: "+91-09876-54321" },
    { role: "Security Guard", name: "Mr. Ram Kumar", phone: "+91-11223-33445" },
    { role: "Night Guard", name: "Mr. Suresh Yadav", phone: "+91-55667-77889" },
    { role: "Plumber", name: "Mr. Mohan Das", phone: "+91-66778-88990" },
    { role: "Electrician", name: "Mr. Ramesh Sharma", phone: "+91-99887-77665" },
    { role: "Doctor", name: "Dr. Anita Gupta", phone: "+91-33445-66778" },
    { role: "Fire Station", name: "Emergency", phone: "101" },
    { role: "Police Station", name: "Emergency", phone: "100" },
    { role: "Ambulance", name: "Emergency", phone: "102" },
  ];

  useEffect(() => {
    const rows = tableRef.current.querySelectorAll("tbody tr");
    gsap.fromTo(
      rows,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Animates rows one by one
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Contact Directory
        </h1>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table
            ref={tableRef}
            className="w-full text-left border-collapse"
          >
            <thead>
              <tr className="bg-gray-200">
                <th className="py-4 px-6 text-gray-600 font-medium">Role</th>
                <th className="py-4 px-6 text-gray-600 font-medium">Name</th>
                <th className="py-4 px-6 text-gray-600 font-medium">Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((contact, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-6 text-gray-800">{contact.role}</td>
                  <td className="py-4 px-6 text-gray-800">{contact.name}</td>
                  <td className="py-4 px-6 text-blue-600 font-medium">
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContactListCompact;
