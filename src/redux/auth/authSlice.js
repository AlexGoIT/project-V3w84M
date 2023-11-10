import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isAuthorized: false,
  isRefreshed: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.isAuthorized = true;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(login.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.isAuthorized = true;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(logout.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isAuthorized = false;
        state.isRefreshed = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.error = null;
      })
      .addCase(logout.rejected, state => {
        state.isRefreshed = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
