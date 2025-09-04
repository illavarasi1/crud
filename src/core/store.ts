import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../shared/slices/UserSlice";

const store=configureStore({
    reducer:{
User:UserSlice
    }
})
export default store;