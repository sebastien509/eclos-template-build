import React from "react";

const AboutCard = ({
  data,
  style,
  cardClass = "",
  shapeClass = "rounded-xl",
  shadowClass = "shadow-xl",
  layoutClass = "text-center",
  bgClass = "bg-base-100",
  fontClass = "",
  bodyClass = "",
  titleClass = "card-title text-3xl",
  textClass = "text-lg leading-relaxed",
}) => {
  return (
    <div className={`container mx-auto py-16 ${layoutClass}`}>
      <div className={`card ${bgClass} ${shapeClass} ${shadowClass} ${cardClass} ${fontClass}`} style={style}>
        <div className={`card-body ${bodyClass}`}>
          <h2 className={titleClass}>About Me</h2>
          <p className={textClass}>{data.about_text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
