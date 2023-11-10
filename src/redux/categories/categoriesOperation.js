import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (credentials = '', thunkAPI) => {
    try {
      const { data } = await axios.post('/api/categories', credentials);

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
