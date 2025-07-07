import React from "react";

const ProjectCardStyle2 = ({ project }) => {
  if (!project) return null;

  const cardStyle = {
    background: "rgba(30,30,40,0.35)",
    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(255,255,255,0.05), inset 0 0 2px 1px rgba(255,255,255,0.08)",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div
      className="card shadow-xl hover:shadow-2xl transition-shadow duration-300"
      style={cardStyle}
    >
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <figure className="md:w-1/3 w-full relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-auto object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 flex flex-wrap gap-1">
              {project.technologies &&
                project.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="badge badge-accent badge-sm">
                    {tech}
                  </div>
                ))}
            </div>
          </figure>
          <div className="flex-1">
            <h3 className="card-title text-2xl">{project.title}</h3>
            <p className="py-4 text-sm opacity-80">{project.description}</p>
            <div className="card-actions mt-2">
              {project.url && (
                <a
                  href={project.url}
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
      </div>
    </div>
  );
};

export default ProjectCardStyle2;
