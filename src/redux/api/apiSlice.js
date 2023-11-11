import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchExercises,
  fetchFilters,
  fetchProducts,
} from './apiOperations';

const initialState = {
  categories: [],
  exercises: [],
  filters: [],
  products: [],
  isLoading: false,
  error: null,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.exercises = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExercises.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

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

    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const apiReducer = apiSlice.reducer;
