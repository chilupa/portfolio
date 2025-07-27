import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#about" className="header-link">
        About
      </a>
      <a href="#projects" className="header-link-projects">
        Projects
      </a>
      <a href="#contact" className="header-link">
        Contact
      </a>
    </header>
  );
};

export default Header;
