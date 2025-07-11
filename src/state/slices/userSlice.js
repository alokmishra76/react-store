import { createSlice } from "@reduxjs/toolkit";
import { userThunk } from "../thunk/userThunk";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        access_token: null,
        refresh_token: null,
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
            });
    }
})

export default userSlice.reducer;