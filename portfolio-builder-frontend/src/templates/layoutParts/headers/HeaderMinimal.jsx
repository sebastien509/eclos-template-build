import React from "react";

const HeaderMinimal = ({ data }) => {
  return (
    <div className="navbar">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <div className="text-center">
          <h1 className="text-4xl font-light">{data.name}</h1>
          <p className="text-lg opacity-80">{data.title}</p>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default HeaderMinimal;
