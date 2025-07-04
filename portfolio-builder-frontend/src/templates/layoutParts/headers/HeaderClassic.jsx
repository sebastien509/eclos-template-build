import React from "react";

const HeaderClassic = ({ data }) => {
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content flex-col text-center">
        {data.image && (
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={data.image} alt={data.name} />
            </div>
          </div>
        )}
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{data.name}</h1>
          <p className="py-6 text-xl">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderClassic;
