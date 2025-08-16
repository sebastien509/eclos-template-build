import React from "react";

const AboutGrid = ({ data, style, textSizeClass, shadowClass, borderClass }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className={`font-bold mb-12 text-center ${textSizeClass}`}>About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`card bg-base-100 ${shadowClass} ${borderClass}`} style={style}>
          <div className="card-body">
            <h3 className="card-title">Background</h3>
            <p className="leading-relaxed">{data.about_text}</p>
          </div>
        </div>
        <div className={`card bg-base-100 ${shadowClass} ${borderClass}`}>
          <div className="card-body">
            <h3 className="card-title">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="badge badge-primary">
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
