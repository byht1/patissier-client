import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { username: null, email: null, phone: null },
  isLogin: false,
  token: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, { payload }) {
      state.user = {
        username: payload.username,
        email: payload.email,
        phone: payload.phone,
      };
      state.isLogin = true;
      state.token = payload.access_token;
    },
    logOut(state) {
      state.user = {
        username: null,
        email: null,
        phone: null,
      };
      state.isLogin = false;
      state.token = null;
    },
    updateUserInfo(state, { payload }) {
      state.user = {
        username: payload.username,
        email: payload.email,
        phone: payload.phone,
      };
      // state.isLogin = state.isLogin;
      // state.token = state.token;
    },
  },
});

export const { register, logOut, updateUserInfo } = authSlice.actions;
