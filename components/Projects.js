import React from "react";

const projects = [
  {
    title: "JSON to CSV Converter",
    tech: ["JavaScript", "Web API", "File Processing"],
    description: "Convert JSON data to CSV format with a simple web interface.",
    github: "https://github.com/chilupa/json-to-csv-converter",
  },
  {
    title: "500 Rule of Photography",
    tech: ["Photography", "Calculator", "Web App"],
    description: "Calculate optimal shutter speed for astrophotography using the 500 rule.",
    github: "https://github.com/chilupa/500-rule-of-photography",
  },
  {
    title: "Recipe Hub",
    tech: ["React", "Recipe API", "Food"],
    description: "Discover and explore recipes with an intuitive search interface.",
    github: "https://github.com/chilupa/recipehub",
  },
  {
    title: "Nutritional Facts Finder",
    tech: ["Nutrition API", "Health", "Web App"],
    description: "Find detailed nutritional information for various food items.",
    github: "https://github.com/chilupa/nutritional-facts-finder",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block"
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
