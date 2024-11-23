import { createSlice } from "@reduxjs/toolkit";

const gpt=createSlice({
    name:"Gpt",
    initialState:{
        Gpt:false
    },
    reducers:{
        toggleGpt:(state,action)=>{
          state.Gpt=!state.Gpt
        }
    }
})

export const {toggleGpt}=gpt.actions

export default gpt.reducer