import React from "react";

const ProjectsGrid = ({ data, style }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="card shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={style}
          >
            <figure className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                {project.technologies &&
                  project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="badge badge-accent badge-sm"
                    >
                      {tech}
                    </div>
                  ))}
              </div>
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">{project.title}</h3>
              <p className="text-sm opacity-80 mb-2">{project.description}</p>
              <div className="card-actions justify-end mt-2">
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
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
