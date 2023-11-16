import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateProfile = createAsyncThunk(
  'users/updateProfile',
  async (params, thunkAPI) => {
    try {
      const result = await axios.patch('/users/profile', params);

      console.log('patchProfile: params', params);
      console.log('patchProfile: result', result);

      Notify.success('Profile updated');
      return result;
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
      const result = await axios.patch('/users/avatar', params);

      return result;
    } catch (err) {
      Notify.failure(err.response.data.message);
      return thunkAPI.rejectWithValue({ message: err.response.data.message });
    }
  }
);
