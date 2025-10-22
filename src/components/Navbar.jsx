import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

 
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

 
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "My Work" },
  { id: "certificates", label: "Certificates" },
];


  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
       
        <div className="backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border-b border-white/20 dark:border-black/20">
          <div className="container mx-auto px-6 py-3 flex items-center justify-between">
           
            <a href="#home" className="text-2xl font-bold select-none">
              MyPortfolio<span className="text-pink-500">.</span>
            </a>

           
            <ul className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300 font-medium">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="hover:text-blue-500 transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              
              <button
                aria-label="Toggle theme"
                onClick={() => setDarkMode((s) => !s)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
                aria-label="Contact"
              >
                Contact <span aria-hidden>↗</span>
              </a>

              
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      
      <div
        className={`fixed inset-0 z-60 transform ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        } transition-all duration-300`}
        aria-hidden={!menuOpen}
      >
        
        <div
          className={`absolute inset-0 backdrop-blur-md bg-white/30 dark:bg-gray-900/30`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Centered menu panel */}
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-md mx-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 dark:border-black/20">
            {/* Top row: logo + close */}
            <div className="flex items-center justify-between mb-8">
              <a
                href="#home"
                className="text-2xl font-bold"
                onClick={() => setMenuOpen(false)}
              >
                MyPortfolio<span className="text-pink-500">.</span>
              </a>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Toggle theme"
                  onClick={() => setDarkMode((s) => !s)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

          
            <nav className="flex flex-col items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-pink-500 transition"
                >
                  {l.label}
                </a>
              ))}

             
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Contact"
              >
                Contact <span aria-hidden>↗</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
