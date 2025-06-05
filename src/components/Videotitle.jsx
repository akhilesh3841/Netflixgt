import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-72 px-6 md:px-20 text-white w-full max-w-6xl absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-lg max-w-xl mb-6 drop-shadow-md">
        {overview}
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-white text-black text-sm md:text-base font-semibold px-6 py-2 rounded hover:bg-opacity-80 transition">
          ▶ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white text-sm md:text-base font-semibold px-6 py-2 rounded hover:bg-gray-600 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
