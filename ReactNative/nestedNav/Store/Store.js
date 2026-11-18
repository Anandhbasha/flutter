import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../Slice/Slice";

export const store = configureStore({
    reducer:{
        "counts":countSlice.reducer
    }
})