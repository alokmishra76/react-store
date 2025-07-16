import { createSlice } from "@reduxjs/toolkit";
import { userThunk } from "../thunk/userThunk";
import { userDetailsThunk } from "../thunk/userDetailsThunk";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        access_token: null,
        refresh_token: null,
        userDetails: null, // To store user details
    },
    reducer: {},

    extraReducers: (builder) => {
        builder
            .addCase(userThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userThunk.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.loading = false;
                state.access_token = action.payload.access_token;
                state.refresh_token = action.payload.refresh_token;
            })
            .addCase(userThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
            })
            .addCase(userDetailsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userDetailsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.userDetails = action.payload;
            })
            .addCase(userDetailsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch user details';
            }); 
    },
})

export default userSlice.reducer;