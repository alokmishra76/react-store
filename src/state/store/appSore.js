import { configureStore } from "@reduxjs/toolkit";
import producsReducer from "../slices/productSlice";
import userReducer from "../slices/userSlice";

const appStore = configureStore({
    reducer: {
        products: producsReducer,
        user: userReducer
    }
});

export default appStore;