import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../slices/productSlice";

const appStore = configureStore({
    reducer: {
        products: feedReducer
    }
});

export default appStore;