import React from "react";

const AboutCard = ({ data, style }) => {
  return (
    <div className="container mx-auto py-16">
      <div className="card bg-base-100 shadow-xl" style={style}>
        <div className="card-body">
          <h2 className="card-title text-3xl">About Me</h2>
          <p className="text-lg leading-relaxed">{data.about}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
