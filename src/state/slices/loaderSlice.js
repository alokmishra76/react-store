// store/loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
    count: 0, // to support parallel API calls
  },
  reducers: {
    startLoading: (state) => {
      state.count += 1;
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.count = Math.max(state.count - 1, 0);
      state.isLoading = state.count > 0;
    }
  }
});

export const { startLoading, stopLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
