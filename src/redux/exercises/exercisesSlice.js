import { createSlice } from '@reduxjs/toolkit';
import { fetchExercises } from './exercisesOperations';

const initialState = {
  exercises: [],
  isLoading: false,
  error: null,
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  extraReducers: builder => {
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
  },
});

export const exercisesReducer = exercisesSlice.reducer;
