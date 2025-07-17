import React, { useState } from "react";

const AboutTabs = ({ data }) => {
  const [tab, setTab] = useState("background");
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
            tab === "background"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("background")}
        >
          Background
        </button>
        <button
          className={`px-6 py-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
            tab === "skills"
              ? "border-primary text-primary"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("skills")}
        >
          Skills
        </button>
      </div>
      {tab === "background" ? (
        <div className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
          {data.about_text}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          {data.skills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-base font-medium shadow gap-2"
            >
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {skill.icon &&
                typeof skill.icon === "string" &&
                skill.icon.startsWith("http") ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-primary font-bold">
                    {skill.name.charAt(0)}
                  </span>
                )}
              </span>
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutTabs;
