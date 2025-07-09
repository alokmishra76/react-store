import { configureStore } from "@reduxjs/toolkit";
import producsReducer from "../slices/productSlice";
import userReducer from "../slices/userSlice";
import productsDetailsReducer from "../slices/productDetailsSlice";

const appStore = configureStore({
    reducer: {
        products: producsReducer,
        user: userReducer,
        productDetails: productsDetailsReducer
    }
});

export default appStore;