import React from "react";

const AboutIconGrid = ({ data }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Background</h3>
          <p className="leading-relaxed">{data.about_text}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-2 overflow-hidden">
                  {skill.icon &&
                  typeof skill.icon === "string" &&
                  skill.icon.startsWith("http") ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    skill.name.charAt(0)
                  )}
                </div>
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIconGrid;
