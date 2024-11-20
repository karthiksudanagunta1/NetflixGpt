// Video.jsx
import React, { useEffect, useState } from 'react';
import useLatestMovie from '../Hooks/useLatestMovie';
import { useSelector } from 'react-redux';

function Video({ id }) {
  const [loading, setLoading] = useState(true);
  useLatestMovie(id);

  const trailerKey = useSelector((store) => store?.movies?.LatestTrailer);

  useEffect(() => {
    if (trailerKey && trailerKey.length > 0) {
      setLoading(false);
    }
  }, [trailerKey]);

  const videoUrl = trailerKey && trailerKey[0]?.key
    ? `https://www.youtube.com/embed/${trailerKey[0].key}?autoplay=1&mute=1`
    : '';

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {loading ? (
        <p className="text-white text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Loading video...
        </p>
      ) : (
        videoUrl && (
          <iframe 
            className="w-full h-full"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )
      )}
    </div>
  );
}

export default Video;
