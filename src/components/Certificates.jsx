import React, { useState } from "react";

import pythonImg from "../assets/python.jpg";
import mernCourseImg from "../assets/merncourse.jpg";
import reactCourseImg from "../assets/reactcourse.jpg";
import css from "../assets/css-certificate.jpg";
import english from "../assets/English-certificate.jpg";
import accenture from "../assets/accenture.png.jpg";
import tata from "../assets/tata.jpg";

const certificates = [
  { title: "Software Engineering Job Simulation", platform: "Accenture", date: "August 28, 2025", image: accenture },
  { title: "GenAI Powered Data Analytics Job Simulation", platform: "Tata Forage", date: "August 20, 2025", image: tata },
  { title: "Python Complete Course", platform: "Udemy", date: "August 16, 2025", image: pythonImg },
  { title: "Full Stack Web Development", platform: "Mind Luster", date: "August 08, 2025", image: mernCourseImg },
  { title: "English", platform: "One Roadmap", date: "Sept 22, 2025", image: english },
  { title: "ReactJs - The Complete ReactJs Course For Beginners", platform: "Udemy", date: "August 31, 2025", image: reactCourseImg },
  { title: "CSS", platform: "One Roadmap", date: "July 02, 2025", image: css },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const placeholderDataUri =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'>
        <rect width='100%' height='100%' fill='%23e5e7eb'/>
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' 
        fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='24'>
          Certificate image not found
        </text>
      </svg>`
    );

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      
      <div
        id="certificates"
        className="w-full flex flex-col items-center pt-28 py-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          Certificates
        </h2>

      
        <div className="w-full flex justify-center">
          <div
            className="
              grid 
              grid-cols-1          
              sm:grid-cols-2        
              md:grid-cols-3       
              lg:grid-cols-4       
              xl:grid-cols-5      
              gap-6 
              w-full 
              max-w-[1400px] 
              justify-items-center
            "
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group 
                transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105"
                onClick={() => setSelectedCert(cert.image)}
              >
                <img
                  src={cert.image || placeholderDataUri}
                  alt={cert.title}
                  className="w-full h-full object-contain bg-gray-100"
                />

                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 p-2">
                  <p className="text-white text-xs sm:text-sm font-semibold text-center line-clamp-2 mb-2">{cert.title}</p>
                  <p className="text-white text-[10px] sm:text-xs">{cert.platform}</p>
                  <p className="text-white text-[10px] sm:text-xs mb-4">{cert.date}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert.image);
                    }}
                    className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white text-black font-semibold rounded-lg 
                    hover:bg-gray-200 hover:scale-105 active:scale-95 transition duration-200"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 overflow-auto">
            <div className="relative max-w-3xl w-full">
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-6 -right-6 text-white text-4xl font-bold bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
              >
                &times;
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
