import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">Hey, I'm Pavan</h1>
        <p className="about-description">
          Full-stack dev. React on the front, Node and Java in the back.
          Obsessed with clean UIs, solid APIs, and whatever AWS is throwing at
          me today.
        </p>
        <div className="about-social">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="about-social-link"
          >
            <FaGithub />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="about-social-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
