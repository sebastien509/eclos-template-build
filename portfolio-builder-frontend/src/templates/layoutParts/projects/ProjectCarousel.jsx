import React from "react";

const ProjectCarousel = ({ data, style }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
        {data.projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <div className="card w-80 shadow-xl hover:shadow-2xl transition-shadow duration-300" style={style}>
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
                <h3 className="card-title text-lg font-bold">
                  {project.title}
                </h3>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
