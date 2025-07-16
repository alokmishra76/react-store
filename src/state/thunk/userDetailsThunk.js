import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile } from "../../services/service/userService";
import { useSelector } from "react-redux";


export const userDetailsThunk = createAsyncThunk(
    'user/fetchDetails', async({ rejectWithValue }) => {
    try {
         console.log('User details fetched:');
        const token = useSelector((state) => state.user?.accessToken);
        const response = await getUserProfile(token);
        if (!response.ok) {
            throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    }
)