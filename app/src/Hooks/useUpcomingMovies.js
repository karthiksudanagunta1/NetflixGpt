
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../utils/Movies';
import { Api_Options } from '../utils/constants';

function useUpcomingMovies() {
   const dispatch=useDispatch();

   const handleEvent= async()=>{
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
  
      const movies=await fetch(url,Api_Options);
       const result=await movies.json();
 
      dispatch(addUpcomingMovies(result.results))
   }

   useEffect(()=>{
      handleEvent()
   },[])
}

export default useUpcomingMovies