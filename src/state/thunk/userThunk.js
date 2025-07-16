import { createAsyncThunk } from "@reduxjs/toolkit";
import { onLogin } from "../../services/service/userService";
import { userDetailsThunk } from "./userDetailsThunk";
/**
 * Thunk to handle user login.
 * This function sends a POST request to the server with user credentials.
 * If successful, it returns the user data; otherwise, it returns an error message.
 *
 * @param {Object} userData - The user credentials for login.
 * @returns {Promise<Object>} The user data if login is successful, or an error message if it fails.
 */

export const userThunk = createAsyncThunk(
    'user/login',
    async (userData, { dispatch, rejectWithValue }) => {
        try {
            const response = await onLogin(userData);
            if (response.status !== 201) {
                throw new Error('Login failed');
            }
            const data = response.data;
             if(data?.access_token) {
                // Dispatch userDetailsThunk to fetch user details after successful login
                dispatch(userDetailsThunk());
             }
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)