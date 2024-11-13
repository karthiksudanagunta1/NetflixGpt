import { createSlice } from "@reduxjs/toolkit";

const usercart=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})

export const{addUser,removeUser} =usercart.actions;
export default usercart.reducer;