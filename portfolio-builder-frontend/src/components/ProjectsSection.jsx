import React from "react";
import ProjectCardVariant1 from "./cards/ProjectCardVariant1";
import ProjectCardVariant2 from "./cards/ProjectCardVariant2";
import ProjectCardVariant3 from "./cards/ProjectCardVariant3";

const ProjectsSection = ({
  layout = "grid",
  variant = "variant1",
  portfolio,
  border = "rounded-lg",
  shadow = "shadow-md",
  textSize = "text-md",
  style = "",
}) => {
  const { projects = [] } = portfolio || {};

  if (!projects.length) return null;

  const CardComponent =
    {
      variant1: ProjectCardVariant1,
      variant2: ProjectCardVariant2,
      variant3: ProjectCardVariant3,
    }[variant] || ProjectCardVariant1;

  const cardStyleClasses = {
    style1: "bg-white/40 backdrop-blur-sm border border-white/40",
    style2: "bg-white/10 backdrop-blur-md border border-white/20",
    style3: "bg-white/20 backdrop-blur-xl border border-white/20",
  };

  return (
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className={`layout-${layout}`}>
        {projects.map((project, idx) => (
          <CardComponent
            key={project.id || idx}
            project={project}
            style={style}
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
