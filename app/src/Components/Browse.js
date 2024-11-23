import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import useNowPlayingMoving from "../Hooks/useNowPlayingMoving";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import ChatGpt from "./ChatGpt";

function Browse() {
  const user = useSelector((state) => state.user);
  const movie = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const Gpt = useSelector((state) => state.Gpt);

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
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  if (!user) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      <Header />
      {Gpt?.Gpt ? (
        <ChatGpt />
      ) : (
        <>
          <MainContainer data={data} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
