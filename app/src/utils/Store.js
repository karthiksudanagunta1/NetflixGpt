import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userCart"


const AppStore=configureStore({
    reducer:{
      user:UserReducer
    }
})

export default AppStore