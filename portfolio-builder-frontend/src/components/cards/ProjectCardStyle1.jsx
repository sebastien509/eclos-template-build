import React from "react";

const ProjectCardStyle1 = ({ project }) => {
  if (!project) return null;

  const cardStyle = {
    background: "rgba(255,255,255,0.4)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.4)",
    position: "relative",
    color: "white",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  };

  return (
    <div
      className="card w-full md:w-80 shadow-xl hover:shadow-2xl transition-shadow duration-300"
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

export default ProjectCardStyle1;
