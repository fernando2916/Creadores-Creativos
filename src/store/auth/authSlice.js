import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    token: {},
    message: undefined,
    errorMensage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMensage = 'undefined';
    },

    onLogin: ( state, { payload }) => {
      state.status = 'authenticated',
      state.user = payload,
      state.token = 'token',
      state.message = payload.message
      
    }
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin } = authSlice.actions;
