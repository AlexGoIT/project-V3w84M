import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateProfile = createAsyncThunk(
  'users/updateProfile',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.put('/users/profile', params);

      Notify.success('Profile updated');
      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/avatars', params);

      return data;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
