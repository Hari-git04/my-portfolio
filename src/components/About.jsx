import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profile from "../assets/Nani.jpg";



export default function About() {
  

 
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center py-16 bg-white dark:bg-gray-900 text-black dark:text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-14 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
        animate={{ x: [0, -40, 10, 0], y: [0, 30, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.h2
        className="text-4xl font-bold text-center mb-10 z-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6">
        {/* Parallax Profile Image */}
        <motion.div
          className="md:w-1/3 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.08}>
            <motion.img
              src={profile}
              alt="Hari Gattem"
              className="rounded-2xl w-64 h-64 object-cover shadow-2xl border-4 border-gray-300 dark:border-gray-700"
              whileHover={{ scale: 1.07, rotate: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </Tilt>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="md:w-2/3 space-y-7 text-justify"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {/* Typewriter effect */}
          <h3 className="text-2xl font-semibold mb-2">
            <Typewriter
              words={["Full Stack Developer", "Backend Developer", "Frontend Developer", "React Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={45}
              delaySpeed={1500}
            />
          </h3>

         

          {/* Description Paragraphs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.10 } }
            }}
          >
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-3"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              I am a Full Stack Developer passionate about building responsive, scalable, and user-friendly web applications. Skilled in Python, Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. I enjoy turning ideas into interactive and efficient solutions.
            </motion.p>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-3"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              I have gained hands-on experience through projects such as CRUD applications, RESTful APIs, and full-stack web solutions. These projects allowed me to work across both frontend and backend, strengthening my problem-solving skills and giving me practical exposure to real-world development challenges.
            </motion.p>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-3"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.13 }}
            >
              Beyond technical skills, I believe in continuous learning, collaboration, and teamwork. I thrive in environments where I can share knowledge, learn from others, and contribute to impactful projects.
            </motion.p>
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              I am currently seeking entry-level opportunities as a Full-Stack / MERN Stack Developer, where I can apply my skills, grow as a developer, and make meaningful contributions to a team.
            </motion.p>
          </motion.div>

         

          {/* Education Section Animated List */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Education :</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.29 }}>
                <span className="font-medium">B.Sc in MCCs</span> — Sri Y N College (2021 - 2025) — 72.4%
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.38 }}>
                <span className="font-medium">Intermediate (MPC)</span> — Bhaskhara Junior College (2019 - 2021) — 75.1%
              </motion.li>
              <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.47 }}>
                <span className="font-medium">SSC</span> — SKSM Z.P. High School (2019) — 84.2%
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
