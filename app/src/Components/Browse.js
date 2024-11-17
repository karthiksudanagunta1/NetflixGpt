import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import useNowPlayingMoving from '../Hooks/useNowPlayingMoving';
import VideoHeader from './VideoHeader';
import Video from './Video';

function Browse() {
  const user = useSelector((state) => state.user);
  const movie = useSelector((state) => state.movies);
  const navigate = useNavigate();

  let data;
  if (movie) {
    data = movie?.nowPlayingMovies?.[0]; 
  }

  useEffect(() => {
    userAuth();
  }, []);

  const userAuth = () => {
    if (!user) {
      return navigate("/");
    }     
  };

  useNowPlayingMoving();

  if (!user) {
    return null;
  }

  return (
    <div className="relative w-full h-screen">
      <Header />
      <VideoHeader data={data} />
      <Video id={data.id} />
    </div>
  );
}

export default Browse;
