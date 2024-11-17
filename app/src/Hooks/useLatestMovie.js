import { useEffect } from "react"
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNewMovie } from "../utils/Movies";

const useLatestMovie=(id)=>{
    const dispatch=useDispatch();
    const getMovieTrailer=async()=>{
        const trailers=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,Api_Options);
        const movietrailer=await trailers.json();
        const filtertrailers= movietrailer.results.filter((e)=>e.type==="Trailer" && e.name==="Official Trailer");
        
        dispatch(addNewMovie(filtertrailers));
    }
  
    useEffect(()=>{
        getMovieTrailer()
    },[])


}

export default useLatestMovie