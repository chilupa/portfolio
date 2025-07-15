import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 backdrop-blur z-50 py-4 px-8 flex justify-center gap-6 text-sm sm:text-base">
      <a
        href="#about"
        className="text-gray-300 hover:text-indigo-400 transition"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-gray-300 hover:text-teal-400 transition"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-gray-300 hover:text-indigo-400 transition"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
