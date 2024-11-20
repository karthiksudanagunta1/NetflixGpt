// VideoHeader.jsx
import React from 'react';

function VideoHeader({ data }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white opacity-75">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 z-20 w-full px-6 py-16 bg-gradient-to-r from-black to-transparent">
      <div className="text-white max-w-lg opacity-90 h-[600px] pt-32 pl-3">
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight mb-4 hover:opacity-80 hover:text-red-600 transition duration-300">
          {data.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 hover:text-xl transition duration-300">
          {data.overview}
        </p>
        <div className="mt-6 flex gap-4 py-4">
          <button className="px-6 py-2 rounded-md bg-white text-black font-bold hover:bg-opacity-70 transition duration-300">
            ▶️ Play
          </button>
          <button className="px-6 py-2 rounded-md bg-gray-600 text-white font-semibold hover:bg-gray-500 transition duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;
