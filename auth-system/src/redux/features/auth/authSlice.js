import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyOtp } from "./authThunk";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  message: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      state.error = null;
      state.message = null;

      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(signup.fulfilled, (state, action) => {
        console.log(action);
        
        state.loading = false;
        state.currentUser = action.payload.data;
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.error = null;
      })

      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error?.message;
      })

      // ================= VERIFY OTP =================
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = null;
      })

      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error?.message;
      })

      // ================= LOGIN =================
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null

        state.message = action.payload.message;
        state.token = action.payload.token
        state.currentUser = action.payload.data
      })

      .addCase(login.rejected, (state, action) => {
         state.loading = false;
        state.error = action.payload
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;