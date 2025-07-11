import { createSlice } from "@reduxjs/toolkit";

const whishPListProductSlice = createSlice({
    name: "whishListProducts",
    initialState: {
        whishListProducts: [],
        loading: false,
        error: null
    },
    reducers: {
        addToWhishList: (state, action) => {
            state.whishListProducts.push(action.payload);
        },
        removeFromWhishList: (state, action) => {
            state.whishListProducts = state.whishListProducts.filter(product => product.id !== action.payload.id);
        }
    }
})

export default whishPListProductSlice.reducer;

export const { addToWhishList, removeFromWhishList } = whishPListProductSlice.actions;