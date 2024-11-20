import { createSlice } from "@reduxjs/toolkit";

const Movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    LatestTrailer: null,
    PopularMovies: null,
    TopRatedMovies:null,
    UpcomingMovies:null
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNewMovie: (state, action) => {
      state.LatestTrailer = action.payload;
    },

    addPopularMovie: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovie:(state,action)=>{
        state.TopRatedMovies=action.payload
    },
    addUpcomingMovies:(state,action)=>{
        state.UpcomingMovies=action.payload
    }
  },
});

export const { addMovies, addNewMovie,addPopularMovie,addTopRatedMovie,addUpcomingMovies } = Movies.actions;
export default Movies.reducer;
