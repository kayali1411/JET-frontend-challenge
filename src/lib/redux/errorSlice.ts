import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'player',
  initialState: {
    errorMessage: '',
  },
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearError: (state) => {
      state.errorMessage = '';
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice;
