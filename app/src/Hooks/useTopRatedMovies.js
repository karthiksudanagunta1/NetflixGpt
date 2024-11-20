
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTopRatedMovie } from '../utils/Movies';
import { Api_Options } from '../utils/constants';

function useTopRatedMovies() {
   const dispatch=useDispatch();

   const handleEvent= async()=>{
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
  
      const movies=await fetch(url,Api_Options);
       const result=await movies.json();
 
      dispatch(addTopRatedMovie(result.results))
   }

   useEffect(()=>{
      handleEvent()
   },[])
}

export default useTopRatedMovies