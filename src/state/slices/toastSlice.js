import { createSlice, nanoid } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: [],
  reducers: {
    addToast: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ message, type = 'info', duration = 3000 }) => ({
        payload: {
          id: nanoid(),
          message,
          type,
          duration,
        },
      }),
    },
    removeToast: (state, action) =>
      state.filter((toast) => toast.id !== action.payload),
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
