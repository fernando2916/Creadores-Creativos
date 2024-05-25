import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    tokens: {},
    user: {},
    message: undefined,
    errorMensage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
    }
  },
});

// Action creators are generated for each case reducer function
export const { onChecking } = authSlice.actions;
