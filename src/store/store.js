import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slice/adminSlice";

export default configureStore({
    reducer:{
        admin:adminSlice,
    },
})