import { createSlice } from "@reduxjs/toolkit";


const Movies=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        LatestTrailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload
        },
        addNewMovie:(state,action)=>{
            state.LatestTrailer=action.payload
        }
    }
})

export const {addMovies,addNewMovie} =Movies.actions
export default Movies.reducer