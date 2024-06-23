 import { createSlice } from "@reduxjs/toolkit";   


 export const admin = createSlice({
    name:"admin",
    initialState:{
        activeMenu:sessionStorage.getItem("activeMenu"),
        selectedMenus:sessionStorage.getItem("selectedMenu") ? sessionStorage.getItem("selectedMenu"):["/"],
        userData:sessionStorage.getItem("users")
    },
    reducers:{
        activeMenuName:(state,action)=>{
            state.activeMenu = action.payload;
            sessionStorage.setItem("activeMenu",action.payload)
        },
        selectedMenu:(state,action)=>{
            state.selectedMenus = action.payload;
            sessionStorage.setItem("selectedMenu",action.payload)
        },
        getUserData:(state,action)=>{
            state.userData = action.payload;
            sessionStorage.setItem("users",action.payload)
        }
    }
 })

 export const {activeMenuName,selectedMenu,getUserData} = admin.actions;
 export default admin.reducer