import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"Counts",
    initialState:{count:0},
    reducers:{
         addCount:(state,action)=>{
            state.count+=action.payload
         }    
}})

export const{addCount} = countSlice.actions