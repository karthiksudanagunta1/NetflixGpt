import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userCart"
import MovieReducer from "./Movies"
import GptReducer from "./gpt"


const AppStore=configureStore({
    reducer:{
      user:UserReducer,
      movies:MovieReducer,
      Gpt:GptReducer
    }
})

export default AppStore