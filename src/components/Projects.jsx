import React, { useState } from "react";

// Import screenshots
import noteboard from "../assets/Screenshot 2025-10-18 190647.png";
import reelDownloader from "../assets/Screenshot 2025-10-22 170714.png";
import portfolio from "../assets/Screenshot 2025-10-22 182246.png";

const projects = [
  {
    title: "NOTEBoard - MERN Notes App",
    image: noteboard,
    github: "https://github.com/Hari-git04/mern-Notes_project",
    live: "https://mern-notes-project-1.onrender.com",
  },
  {
    title: "Instagram Reel Downloader",
    image: reelDownloader,
    github: "https://github.com/Hari-git04/mern-instareeldownloader",
    live: "https://mern-instareeldownloader-1-80gy.onrender.com",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/Hari-git04/my-portfolio",
    live: "https://myportfolio-4135.onrender.com",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div
        id="projects"
        className="w-full flex flex-col items-center pt-28 py-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          My Projects
        </h2>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] justify-items-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105"
                onClick={() => setSelectedProject(project.image)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover bg-gray-100"
                />

                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 p-4">
                  <p className="text-white text-sm sm:text-base font-semibold text-center line-clamp-2 mb-2">
                    {project.title}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} 
                      className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white text-black font-semibold rounded-lg hover:bg-gray-200 hover:scale-105 active:scale-95 transition duration-200"
                    >
                      View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-200"
                    >
                      Live Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 overflow-auto">
            <div className="relative max-w-3xl w-full">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-6 -right-6 text-white text-4xl font-bold bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
              >
                &times;
              </button>
              <img
                src={selectedProject}
                alt="Project Screenshot"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
