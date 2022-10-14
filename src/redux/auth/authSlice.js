import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  refreshToken,
  registerUser,
  updateUserInfo,
} from "./authOperations";

const iS = {
  idToken: null,
  refreshToken: null,
  localId: null,
  email: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: iS,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
      state.localId = payload.localId;
      state.idToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.idToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
      state.localId = payload.localId;
      state.email = payload.email;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [updateUserInfo.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.localId = payload.localId;
      state.email = payload.email;
    },
    [updateUserInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshToken.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.idToken = payload.id_token;
      state.refreshToken = payload.refresh_token;
    },
    [refreshToken.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  reducers: {
    logOut() {
      return iS;
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

// {
//   "expires_in": "3600",
//   "token_type": "Bearer",
//   "refresh_token": "[REFRESH_TOKEN]",
//   "id_token": "[ID_TOKEN]",
//   "user_id": "tRcfmLH7o2XrNELi...",
//   "project_id": "1234567890"
// }
