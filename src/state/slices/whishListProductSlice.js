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
            const index = state.whishListProducts.findIndex(product => product.id === action.payload);
            if (index !== -1) {
                state.whishListProducts.splice(index, 1);
            }
        }
    }
})

export default whishPListProductSlice.reducer;

export const { addToWhishList, removeFromWhishList } = whishPListProductSlice.actions;