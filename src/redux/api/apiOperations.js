import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchCategories = createAsyncThunk(
  'api/fetchCategories',
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
  'api/fetchFilters',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/filters', { params });

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

export const fetchExercises = createAsyncThunk(
  'api/fetchExercises',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/exercises', { params });

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'api/fetchProducts',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/products', { params });

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

export const fetchCalculate = createAsyncThunk(
  'user/fetchCalculate',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/calculate');

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);
