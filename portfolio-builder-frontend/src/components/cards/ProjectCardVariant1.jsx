import React from "react";

const ProjectCardVariant1 = ({
  project,
  style = "",
  border = "rounded-lg",
  shadow = "shadow-md",
  textSize = "text-md",
}) => {
  if (!project) return null;

  return (
    <div
      className={`card w-full ${style} ${border} ${shadow} hover:shadow-2xl transition-shadow duration-300`}
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
        <h3 className={`card-title font-bold mb-1 ${textSize}`}>
          {project.title}
        </h3>
        <p className={`opacity-80 mb-2 ${textSize}`}>{project.description}</p>
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

export default ProjectCardVariant1;
