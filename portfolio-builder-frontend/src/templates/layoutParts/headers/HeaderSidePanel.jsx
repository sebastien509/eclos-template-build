import React from "react";

const HeaderSidePanel = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch mb-8">
      <div className="bg-primary text-white flex flex-col items-center justify-center p-8 md:w-1/3 rounded-l-lg shadow-lg">
        {data.header_image && (
          <img
            src={data.header_image}
            alt={data.name}
            className="w-20 h-20 rounded-full border-4 border-white mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-1">{data.name}</h1>
        <p className="text-lg opacity-90">{data.sector}</p>
      </div>
      <div className="flex-1 flex flex-col justify-center p-8 bg-base-100 rounded-r-lg shadow-lg">
        {data.header_quote && (
          <blockquote className="italic text-lg opacity-80">
            {data.header_quote}
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default HeaderSidePanel;
