
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/Movies';
import { Api_Options } from '../utils/constants';

function usePopularMovies() {
   const dispatch=useDispatch();

   const handleEvent= async()=>{
    const url = "https://api.themoviedb.org/3/movie/popular?page=1";
  
      const movies=await fetch(url,Api_Options);
       const result=await movies.json();
 
      dispatch(addPopularMovie(result.results))
   }

   useEffect(()=>{
      handleEvent()
   },[])
}

export default usePopularMovies