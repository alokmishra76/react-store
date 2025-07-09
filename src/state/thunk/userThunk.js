import { createAsyncThunk } from "@reduxjs/toolkit";
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
    async (userData, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)