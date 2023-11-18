import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
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
  'api/fetchCalculate',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/calculate');

      return data;
    } catch (err) {
      // Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

//=============================================================================

// GET api/diary Get user diary data for selected date
// {
//   "date": "10-10-2023"
// }
//
export const fetchDiary = createAsyncThunk(
  'api/fetchDiary',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/diary', { params });

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

///POST api/diary/products  Add eaten product to diary
// {
//   "productId": "5d51694902b2373622ff5b8d",
//   "date": "10-10-2023",
//   "weightConsumed": 240,
//   "caloriesConsumed": 540
// }
//
export const addProduct = createAsyncThunk(
  'api/addProduct',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/diary/products', params);

      console.log('addProduct to diary =>', data);

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

//POST api/diary/exercises  Add done exercise to diary
// {
//   "exerciseId": "5d51694902b2373622ff5b8d",
//   "date": "10-10-2023",
//   "workoutTime": 50,
//   "caloriesBurned": 240
// }
//
export const addExercise = createAsyncThunk(
  'api/addExercise',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/diary/exercises', params);

      console.log('Add exercise to diary =>', data);

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

// DELETE api/diary/products/5d51694902b2373622ff5b8d  Delete eaten product from diary
//
export const deleteProduct = createAsyncThunk(
  'api/deleteProduct',
  async (diaryProductId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/api/diary/products/${diaryProductId}`
      );

      console.log('Delete product from diary =>', data);

      return diaryProductId;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

// DELETE api/diary/exercises/5d51694902b2373622ff5b8d  Delete done exercise from diary
//
export const deleteExercise = createAsyncThunk(
  'api/deleteExercise',
  async (diaryExercisesId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/api/diary/exercises/${diaryExercisesId}`
      );

      console.log('Delete exercise from diary =>', data);

      return diaryExercisesId;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
//=============================================================================

export const diaryUpdateReset = createAction('api/diaryUpdateReset');
