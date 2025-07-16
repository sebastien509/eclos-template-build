import React from "react";

const ProjectCardVariant3 = ({
  project,
  style = "",
  border = "rounded-2xl",
  shadow = "shadow-lg",
  textSize = "text-md",
}) => {
  if (!project) return null;

  return (
    <div
      className={`flex w-full relative overflow-hidden ${style} ${border} ${shadow}`}
    >
      {project.preview_image && (
        <div className="flex-shrink-0 h-48 flex items-center justify-center">
          <img
            src={project.preview_image}
            alt={project.title}
            className="w-48 h-48 object-cover"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <h3 className={`font-bold mb-1 text-white ${textSize}`}>
          {project.title}
        </h3>
        <p className={`text-gray-100 mb-2 ${textSize}`}>
          {project.description}
        </p>
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex-1 flex items-end justify-end">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded hover:bg-white/30 transition-colors border border-white/30 text-xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardVariant3;
