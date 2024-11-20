import { useSelector } from "react-redux";
import MovieCart from "./MovieCart";

function SecondaryContainer() {
  const movieCarts = useSelector((store) => store?.movies);

  if (!movieCarts || movieCarts.length === 0) {
    return <div className="text-white">No Movies Available</div>;
  }

  return (
    <div className="bg-black w-full h-full">
      <div className="-mt-44  relative z-20 mb-10">
        <MovieCart
          movieCarts={movieCarts?.TopRatedMovies}
          title={"Top Rated Movies"}
        />
        <MovieCart
          movieCarts={movieCarts?.nowPlayingMovies}
          title={"NowPlaying Movies"}
        />
         <MovieCart
          movieCarts={movieCarts?.UpcomingMovies}
          title={"Upcoming Movies"}
        />
        <MovieCart
          movieCarts={movieCarts?.PopularMovies}
          title={"Popular Movies"}
        />
      </div>
    </div>
  );
}

export default SecondaryContainer;
