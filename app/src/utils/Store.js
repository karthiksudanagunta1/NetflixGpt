import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userCart"
import MovieReducer from "./Movies"


const AppStore=configureStore({
    reducer:{
      user:UserReducer,
      movies:MovieReducer
    }
})

export default AppStore