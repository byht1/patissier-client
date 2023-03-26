import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, phone: null },
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
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
      };
      state.isLogin = true;
      state.token = payload.access_token;
    },
    logout(state) {
      state.user = {
        name: null,
        email: null,
        phone: null,
      };
      state.isLogin = false;
      state.token = null;
    },
    updateUserInfo(state, { payload }) {
      state.user = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
      };
      state.isLogin = state.isLogin;
      state.token = state.token;
    },
  },
});

export const { register, logout, updateUserInfo } = authSlice.actions;
