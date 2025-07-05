import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "../../services/service/feedService";


export const fetchProductThunk = createAsyncThunk(
    "feed/fetchProducts",
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetchProduct()
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)