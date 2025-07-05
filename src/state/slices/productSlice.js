import { createSlice } from "@reduxjs/toolkit";
import { fetchProductThunk } from "../thunk/fetchProductThunk";


const productSlice = createSlice({
    name: "prodcts",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


export default productSlice.reducer;