import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById } from "../../services/service/feedService";


export const fetchProductsDetailsThunk = createAsyncThunk(
    "productDetails/fetchProductDetails",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetchProductById(payload)
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