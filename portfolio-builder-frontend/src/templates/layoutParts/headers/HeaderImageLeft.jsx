import React from "react";

const HeaderImageLeft = ({ data }) => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        {data.header_image && (
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={data.header_image} alt={data.name} />
            </div>
          </div>
        )}
      </div>
      <div className="navbar-center">
        <div>
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <p className="text-lg opacity-80">{data.sector}</p>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default HeaderImageLeft;
