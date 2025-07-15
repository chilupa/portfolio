import React from "react";

const projects = [
  {
    title: "Expense Tracker",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    description:
      "Track expenses, set budgets, and visualize spending. Auth + CRUD.",
  },
  {
    title: "RFP Navigator",
    tech: ["React", "Material UI", "Chat Context"],
    description:
      "Upload, analyze, and query RFPs. Smart UI with real-time feedback.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen snap-start flex flex-col items-center justify-center px-8"
    >
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:scale-[1.02] transition-transform duration-300 group"
          >
            <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-3 mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
