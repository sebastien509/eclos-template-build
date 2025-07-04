import React from "react";

const ProjectStacked = ({ data, style }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="card shadow-xl hover:shadow-2xl transition-shadow duration-300"
            style={style}
          >
            <div className="card-body">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <figure className="md:w-1/3 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-auto object-cover rounded-lg"
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
                <div className="flex-1">
                  <h3 className="card-title text-2xl">{project.title}</h3>
                  <p className="py-4 text-sm opacity-80">
                    {project.description}
                  </p>
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
        ))}
      </div>
    </div>
  );
};

export default ProjectStacked;
