import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// =============================================================================
// CATEGORIES
//=============================================================================
// GET api/categories => Return ALL categories
//

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

//=============================================================================
// FILTERS
//=============================================================================
// GET api/filters => Return ALL filters
// or
// GET api/filters?filter=Body parts => Return Body parts filter
// {
//   "filter": "Body parts"
// }
// or
// GET api/filters?filter=Muscles => Return Muscles filter
// {
//   "filter": "Muscles",
// }
// or
// GET api/filters?filter=Equipment => Return Equipment filter
// {
//   "filter": "Equipment",
// }
//
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
// ==============================================================================
// EXERCISES
// ==============================================================================
// GET api/exercises => Return ALL exercises
// or
// GET api/exercises?bodyparts=back => Return Body parts exercises for back
// {
//   "bodyparts": "back",
//   "page": 1,   // DEFAULT
//   "limit": 10  // DEFAULT
// }
// or
// GET api/exercises?muscles=biceps => Return Muscles exercises for biceps
// {
//   "muscles": "biceps",
//   "page": 1,   // DEFAULT
//   "limit": 10  // DEFAULT
// }
// or
// GET api/exercises?equipment=barbell => Return Equipment exercises for barbell
// {
//   "equipment": "barbell",
//   "page": 1,   // DEFAULT
//   "limit": 10  // DEFAULT
// }
// or
//

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

//=============================================================================
// PRODUCTS
// ============================================================================

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

// ============================================================================
// CALCULATE
// ============================================================================

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
// DIARY
// ============================================================================
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

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

// DELETE api/diary/products  Delete eaten product from diary
// {
//   "productId": "5d51694902b2373622ff5b8d",
//   "date": "10-10-2023",
// }
//
export const deleteProduct = createAsyncThunk(
  'api/deleteProduct',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/diary/products`, {
        data: body,
      });
      // Повертає оновленні данні щоденника

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

// DELETE api/diary/exercises  Delete done exercise from diary
// {
//   "exerciseId": "5d51694902b2373622ff5b8d",
//   "date": "10-10-2023",
// }
//
export const deleteExercise = createAsyncThunk(
  'api/deleteExercise',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/diary/exercises`, {
        data: body,
      });
      // Повертає оновленні данні щоденника

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
//=============================================================================

export const diaryUpdateReset = createAction('api/diaryUpdateReset');
