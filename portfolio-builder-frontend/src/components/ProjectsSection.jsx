import React from "react";
import ProjectCardStyle1 from "./cards/ProjectCardStyle1";
import ProjectCardStyle2 from "./cards/ProjectCardStyle2";
import ProjectCardStyle3 from "./cards/ProjectCardStyle3";

const ProjectsSection = ({
  layout = "grid",
  cardStyle = "style1",
  portfolio,
}) => {
  const { projects = [] } = portfolio || {};

  if (!projects.length) return null;

  const CardComponent =
    {
      style1: ProjectCardStyle1,
      style2: ProjectCardStyle2,
      style3: ProjectCardStyle3,
    }[cardStyle] || ProjectCardStyle1;

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 gap-12 md:grid-cols-2"
            : layout === "stack"
            ? "flex flex-col gap-10"
            : layout === "flex"
            ? "flex flex-wrap justify-between items-start"
            : "grid grid-cols-1 gap-12 md:grid-cols-2"
        }
      >
        {projects.map((project, idx) => (
          <CardComponent key={project.id || idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
