import React from "react";
import ProjectCardStyle1 from "./cards/ProjectCardStyle1";
import ProjectCardStyle2 from "./cards/ProjectCardStyle2";
import ProjectCardStyle3 from "./cards/ProjectCardStyle3";

const ProjectsSection = ({
  layout = "grid",
  cardStyle = "style1",
  portfolio,
  border = "rounded-lg",
  shadow = "shadow-md",
  textSize = "text-md",
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
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className={`layout-${layout}`}>
        {projects.map((project, idx) => (
          <CardComponent
            key={project.id || idx}
            project={project}
            border={border}
            shadow={shadow}
            textSize={textSize}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
