import React from "react";

const AboutSplit = ({ 
  data, 
  style,
  containerClass = "container mx-auto py-16",
  gridClass = "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
  leftTitleClass = "text-3xl font-bold mb-6",
  leftTextClass = "text-lg leading-relaxed",
  cardClass = "card bg-base-100 shadow-xl",
  bodyClass = "card-body",
  sectionTitleClass = "card-title",
  listClass = "space-y-2",
  listItemClass = "flex items-center gap-2",
  badgeClass = "badge badge-primary badge-sm", 
}) => {
  return (
    <div className={containerClass}>
      <div className={gridClass}>
        <div>
          <h2 className={leftTitleClass}>About Me</h2>
          <p className={leftTextClass}>{data.about_text}</p>
        </div>
        <div className={cardClass} style={style}>
          <div className={bodyClass}>
            <h3 className={sectionTitleClass}>Quick Facts</h3>
            <ul className={listClass}>
              {data.skills.slice(0, 5).map((skill, index) => (
                <li key={index} className={listItemClass}>
                  <div className={badgeClass}></div>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSplit;
