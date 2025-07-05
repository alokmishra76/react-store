import { configureStore } from "@reduxjs/toolkit";
import producsReducer from "../slices/productSlice";

const appStore = configureStore({
    reducer: {
        products: producsReducer
    }
});

export default appStore;