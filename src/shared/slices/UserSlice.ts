import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Users } from "../models/User.model";

const defaultvalue:Users={
    id:0,
    name:'',
    email:'',
    phone:'',
    website:''

};
const UserSlice=createSlice({
    name:'Users',
    initialState:defaultvalue,
    reducers:{
setUserData:(state:Users,data:PayloadAction<Users>)=>{
    state.id=data.payload.id;
    state.name=data.payload.name;
    state.email=data.payload.email;
    state.phone=data.payload.phone;
    state.website=data.payload.website;
}
    }
})
export const{setUserData}=UserSlice.actions;
export default UserSlice.reducer;