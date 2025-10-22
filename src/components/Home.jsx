import { Linkedin, Github, Instagram, Download, Send } from "lucide-react";
import React from "react";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center text-center py-20">
     
      <img
        src={profile}
        alt="Hari Gattem"
        className="rounded-full w-28 h-28 mb-5"
      />

      
      <p className="text-lg text-gray-600">
        Hi! I'm <span className="font-medium">Hari Gattem</span> 👋
      </p>

      
      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mt-3">
        Full Stack Developer
      </h1>

      
      <p className="text-gray-500 max-w-xl mt-4">
      I am a Full Stack Developer passionate about building responsive, scalable, and user-friendly web applications. Skilled in Python, Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. I enjoy turning ideas into interactive and efficient solutions.
     </p>

     
     <div className="flex flex-col md:flex-row gap-4 mt-8">

  <a
    href="/Hari_Gattem_Resume.pdf"
    download="Hari_Gattem_Resume.pdf"
    className="px-6 py-3 border border-gray-400 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white"
  >
    my resume <Download size={18} />
  </a>
  
  <a
    href="#contact"
    className="px-6 py-3 border border-gray-400 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white"
  >
    contact me <Send size={18} />
  </a>

</div>


     
   <div className="flex gap-4 mt-6">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/hari-gattem-a536b6355"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#0077B5]"
  >
    <Linkedin className="w-6 h-6 text-[#0077B5] transition-all duration-300 hover:text-white" />
  </a>

  <a
    href="https://github.com/Hari-git04"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-black"
  >
    <Github className="w-6 h-6 text-black transition-all duration-300 hover:text-white" />
  </a>

 
  <a
    href="https://www.instagram.com/hari_gattem/"
    target="_blank"
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#E4405F]"
  >
    <Instagram className="w-6 h-6 text-[#E4405F] transition-all duration-300 hover:text-white" />
  </a>
  <a
    href="https://leetcode.com/u/hari_gattem/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FFA116]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      className="w-6 h-6 text-[#FFA116] transition-all duration-300 hover:text-white"
    >
      <path
        d="M17.5 7.5L13 12l4.5 4.5M11 19L4 12l7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
</div>



    </section>
  );
}
