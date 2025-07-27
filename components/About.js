import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen snap-start flex items-center justify-center px-8 pt-20"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-indigo-400 mb-4">
          Hey, I'm Pavan
        </h1>
        <p className="text-lg text-gray-300">
          Full-stack dev. React on the front, Node and Java in the back.
          Obsessed with clean UIs, solid APIs, and whatever AWS is throwing at
          me today.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-gray-300  text-2xl hover:text-teal-400"
          >
            <FaGithub />
          </a>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-gray-300 text-2xl hover:text-teal-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
