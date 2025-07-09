import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsDetailsThunk } from "../thunk/fetchProductsDetailsThunk";



const ProductDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: {
        productDetails: {},
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsDetailsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsDetailsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetails = action.payload;
            })
            .addCase(fetchProductsDetailsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})

export default ProductDetailsSlice.reducer;