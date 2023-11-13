import { createSlice } from '@reduxjs/toolkit';
import { fetchCalculate } from './userOperations';

const initialState = {
  calculate: {},
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCalculate.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCalculate.fulfilled, (state, action) => {
        state.calculate = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCalculate.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
