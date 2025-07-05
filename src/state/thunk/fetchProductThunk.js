import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "../../services/service/feedService";


export const fetchProductThunk = createAsyncThunk(
    "feed/fetchProducts",
    // Accept payload as the first argument
    async (payload, { rejectWithValue, fulfillWithValue }) => {
        try {
            // Pass payload to fetchProduct if needed
            const response = await fetchProduct(payload);
            if (response.status !== 200) {
                throw new Error("Network response was not ok");
            }
            const data = response.data;
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)