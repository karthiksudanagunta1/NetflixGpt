
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/Movies';
import { Api_Options } from '../utils/constants';

function useNowPlayingMoving() {
   const dispatch=useDispatch();

   const handleEvent= async()=>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  
      const movies=await fetch(url,Api_Options);
       const result=await movies.json();
 
      dispatch(addMovies(result.results))
   }

   useEffect(()=>{
      handleEvent()
   },[])
}

export default useNowPlayingMoving