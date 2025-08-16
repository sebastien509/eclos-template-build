import React from "react";

const AboutCard = ({ data, style, textSizeClass, shadowClass, borderClass }) => {
  return (
    <div className="container mx-auto py-16">
      <div className={`card bg-base-100 ${shadowClass} ${borderClass}`} style={style}>
        <div className="card-body">
          <h2 className={`card-title ${textSizeClass}`}>About Me</h2>
          <p className="text-lg leading-relaxed">{data.about_text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
