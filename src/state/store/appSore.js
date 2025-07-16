import { configureStore } from "@reduxjs/toolkit";
import producsReducer from "../slices/productSlice";
import userReducer from "../slices/userSlice";
import productsDetailsReducer from "../slices/productDetailsSlice";
import whishListProductsReducer from "../slices/whishListProductSlice";
import loaderReducer from "../slices/loaderSlice";
import toastReducer from "../slices/toastSlice";
import { loaderMiddleware } from "../thunk/middleWare/loaderMiddleWare";

const appStore = configureStore({
    reducer: {
        products: producsReducer,
        user: userReducer,
        productDetails: productsDetailsReducer,
        whishListProducts: whishListProductsReducer,
        loader: loaderReducer,
        toast: toastReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loaderMiddleware),
});

export default appStore;