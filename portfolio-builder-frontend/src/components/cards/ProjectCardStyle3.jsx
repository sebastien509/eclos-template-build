import React from "react";

const ProjectCardStyle3 = ({ project }) => {
  if (!project) return null;

  const cardStyle = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow:
      "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(255,255,255,0.05)",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div
      className="card shadow-xl hover:shadow-2xl transition-shadow duration-300"
      style={cardStyle}
    >
      <figure className="relative">
        <img
          src={project.preview_image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {project.technologies && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-1">
            {project.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="badge badge-accent badge-sm">
                {tech}
              </div>
            ))}
          </div>
        )}
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg font-bold">{project.title}</h3>
        <p className="text-sm opacity-80 mb-2">{project.description}</p>
        <div className="card-actions justify-end mt-2">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardStyle3;
