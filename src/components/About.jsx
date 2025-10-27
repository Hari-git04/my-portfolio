import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profile from "../assets/Nani.jpg";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center py-16 bg-white dark:bg-gray-900 text-black dark:text-white relative overflow-visible z-10"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Background Circles */}
      <motion.div
        className="absolute top-14 left-10 w-32 h-32 bg-purple-300 rounded-full filter blur-2xl opacity-50 -z-10"
        animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-40 h-40 bg-pink-200 rounded-full filter blur-2xl opacity-50 -z-10"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image with Tilt Effect */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-purple-500"
        >
          <motion.img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Tilt>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Enthusiast",
                "Creative Designer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Hi! I’m Hari, a passionate frontend developer who loves bringing
            designs to life with clean, interactive, and responsive interfaces.
            I enjoy building user-focused applications using React, Tailwind,
            and modern web technologies.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
