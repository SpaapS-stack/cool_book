import {configureStore} from "@reduxjs/toolkit";
import basketSlice from './basketSlice'
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
        auth: authSlice
    }
})

export default store;
