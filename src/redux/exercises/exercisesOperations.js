import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchExercises = createAsyncThunk(
  'exercises/fetchExercises',
  async thunkAPI => {
    try {
      const { data } = await axios.get('/api/exercises');

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
