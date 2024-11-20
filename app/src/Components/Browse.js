import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import useNowPlayingMoving from '../Hooks/useNowPlayingMoving';

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';

function Browse() {
  const user = useSelector((state) => state.user);
  const movie = useSelector((state) => state.movies);
  const navigate = useNavigate();

  let data;
  if (movie) {
    data = movie?.nowPlayingMovies?.[0]; 
  }
  console.log(data);

  useEffect(() => {
    userAuth();
  }, []);

  const userAuth = () => {
    if (!user) {
      return navigate("/");
    }     
  };

  useNowPlayingMoving();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  if (!user) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <Header />
      <MainContainer data={data}/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browse;
