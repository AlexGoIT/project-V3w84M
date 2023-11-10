import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://powerpulse-backend-7hwo.onrender.com';

const tokenControl = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);

      tokenControl.set(data.token);
      Notify.success('Registration is successful');
      return data;
    } catch (err) {
      Notify.failure(err.message);

      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);

      tokenControl.set(data.token);
      Notify.success('Login is successful');
      return data;
    } catch (err) {
      Notify.failure(`Login error: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    tokenControl.unset();
    Notify.success('Logout is successful');
  } catch (err) {
    Notify.failure(`Logout error: ${err.message}`);
    return thunkAPI.rejectWithValue(err.message);
  }
});
