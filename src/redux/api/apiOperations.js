import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async thunkAPI => {
    try {
      const { data } = await axios.get('/api/categories');

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

export const fetchFilters = createAsyncThunk(
  'filters/fetchFilters',
  async thunkAPI => {
    try {
      const { data } = await axios.get('/api/filter');

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

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
