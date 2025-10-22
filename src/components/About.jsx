import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Nani.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 bg-white dark:bg-gray-900 text-black dark:text-white">

      <h2 className="text-4xl font-bold text-center mb-12">About</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-12 max-w-6xl mx-auto px-6">
      


        <div className="md:w-1/3 flex justify-center md:justify-start">
          <motion.img
            src={profile}
            alt="Hari Gattem"
            className="rounded-2xl w-64 h-64 object-cover shadow-2xl border-4 border-gray-300 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

    
        <div className="md:w-2/3 space-y-6 text-justify">
        



          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me :</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
            I am a Full Stack Developer passionate about building responsive, scalable, and user-friendly web applications. Skilled in Python, Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. I enjoy turning ideas into interactive and efficient solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              I have gained hands-on experience through projects such as CRUD applications, RESTful APIs, and full-stack web solutions. These projects allowed me to work across both frontend and backend, strengthening my problem-solving skills and giving me practical exposure to real-world development challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Beyond technical skills, I believe in continuous learning, collaboration, and teamwork. I thrive in environments where I can share knowledge, learn from others, and contribute to impactful projects.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I am currently seeking entry-level opportunities as a Full-Stack / MERN Stack Developer, where I can apply my skills, grow as a developer, and make meaningful contributions to a team.
            </p>
          </div>



          <div>
            <h3 className="text-2xl font-semibold mb-4">Education :</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-medium"> B.Sc in MCCs</span> — Sri Y N College (2021 - 2025) — 72.4%
              </li>
              <li>
                <span className="font-medium"> Intermediate (MPC)</span> — Bhaskhara Junior College (2019 - 2021) — 75.1%
              </li>
              <li>
                <span className="font-medium"> SSC</span> — SKSM Z.P. High School (2019) — 84.2%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
