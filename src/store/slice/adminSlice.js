 import { createSlice } from "@reduxjs/toolkit";   


 export const admin = createSlice({
    name:"admin",
    initialState:{
        activeMenu:localStorage.getItem("activeMenu")
    },
    reducers:{
        activeMenuName:(state,action)=>{
            state.activeMenu = action.payload;
            localStorage.setItem("activeMenu",action.payload)
        }
    }
 })

 export const {activeMenuName } = admin.actions;
 export default admin.reducer