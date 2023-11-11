import { createSlice } from '@reduxjs/toolkit';
import { fetchFilters } from './filterOperations';

const initialState = {
  filters: [],
  isLoading: false,
  error: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFilters.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const filtersReducer = filtersSlice.reducer;
