import { createSlice } from '@reduxjs/toolkit';
import { currentUser, login, logout, register } from './authOperations';

const initUser = {
  name: '',
  email: '',
  avatarURL: '',
  profileDataFill: false,
  profileData: null,
  createdAt: '',
};

const initialState = {
  user: initUser,
  token: null,
  isAuthorized: false,
  isRefreshed: false,
  error: null,
};

console.log(initialState);

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
        state.isRefreshed = false;
        state.user = initUser;
        state.token = null;
        state.isAuthorized = false;
        state.error = null;
      })
      .addCase(logout.rejected, state => {
        state.isRefreshed = false;
        state.error = null;
      });

    builder
      .addCase(currentUser.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
