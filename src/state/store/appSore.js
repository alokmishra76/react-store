import { configureStore } from "@reduxjs/toolkit";
import producsReducer from "../slices/productSlice";
import userReducer from "../slices/userSlice";
import productsDetailsReducer from "../slices/productDetailsSlice";
import whishListProductsReducer from "../slices/whishListProductSlice";
import loaderReducer from "../slices/loaderSlice";
import { loaderMiddleware } from "../thunk/middleWare/loaderMiddleWare";

const appStore = configureStore({
    reducer: {
        products: producsReducer,
        user: userReducer,
        productDetails: productsDetailsReducer,
        whishListProducts: whishListProductsReducer,
        loader: loaderReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loaderMiddleware),
});

export default appStore;