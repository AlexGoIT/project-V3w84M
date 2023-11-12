import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

export const fetchCalculate = createAsyncThunk(
  'user/fetchCalculate',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/calculate');

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);
