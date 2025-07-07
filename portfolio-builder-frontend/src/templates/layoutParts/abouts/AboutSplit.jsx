import React from "react";

const AboutSplit = ({ data, style }) => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">{data.about_text}</p>
        </div>
        <div className="card bg-base-100 shadow-xl" style={style}>
          <div className="card-body">
            <h3 className="card-title">Quick Facts</h3>
            <ul className="space-y-2">
              {data.skills.slice(0, 5).map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="badge badge-primary badge-sm"></div>
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
