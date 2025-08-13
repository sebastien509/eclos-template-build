import React from "react";

const AboutGrid = ({ 
  data,
  style,
  containerClass = "container mx-auto py-16",
  titleClass = "text-3xl font-bold mb-12 text-center",
  gridClass = "grid grid-cols-1 md:grid-cols-2 gap-8",
  cardClass = "card bg-base-100 shadow-xl",
  bodyClass = "card-body",
  sectionTitleClass = "card-title",
  textClass = "leading-relaxed",
  skillsContainerClass = "flex flex-wrap gap-2",
  badgeClass = "badge badge-primary", 
}) => {
  return (
    <div className={containerClass}>
      <h2 className={titleClass}>About Me</h2>
      <div className={gridClass}>
        <div className={cardClass} style={style}>
          <div className={bodyClass}>
            <h3 className={sectionTitleClass}>Background</h3>
            <p className={textClass}>{data.about_text}</p>
          </div>
        </div>
        <div className={cardClass}>
          <div className={bodyClass}>
            <h3 className={sectionTitleClass}>Skills</h3>
            <div className={skillsContainerClass}>
              {data.skills.map((skill, index) => (
                <div key={index} className={badgeClass}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
