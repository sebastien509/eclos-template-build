import React from "react";

const HeaderBanner = ({ data }) => {
  return (
    <div className="w-full py-16 bg-primary text-white text-center rounded-lg shadow-lg mb-8">
      {data.header_image && (
        <div className="flex justify-center mb-4">
          <img
            src={data.header_image}
            alt={data.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>
      )}
      <h1 className="text-5xl font-extrabold mb-2">{data.name}</h1>
      <p className="text-2xl opacity-90 mb-2">{data.sector}</p>
      {data.header_quote && (
        <blockquote className="italic text-lg opacity-80 max-w-xl mx-auto">
          {data.header_quote}
        </blockquote>
      )}
    </div>
  );
};

export default HeaderBanner;
