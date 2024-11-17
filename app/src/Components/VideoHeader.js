import React from 'react';

function VideoHeader({ data }) {
  if (!data) {
    return (
      <div className="flex items-center justify-center h-64 bg-black text-white opacity-75">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="absolute  inset-0     flex items-center justify-start px-8 py-6 z-10">
      <div className="text-white max-w-md opacity-90 h-md bg-gradient-to-r  from-black">
        <h1 className="text-3xl md:text-3xl font-extrabold tracking-wide hover:opacity-80 hover:text-4xl">{data.title}</h1>
        <p className="mt-4 text-sm md:text-lg opacity-90 hover:text-xl">{data.overview}</p>
        <div className="mt-6 flex gap-4 py-4">
          <button className="px-6 py-2 rounded-md bg-slate-200 text-black font-bold hover:bg-gray-100 hover:bg-opacity-70 transition duration-300">
            ▶️ Play
          </button>
          <button className="px-6 py-2 rounded-md bg-slate-400 opacity-70 text-gray font-semibold hover:bg-gray-400 hover:opacity-70 transition duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;
