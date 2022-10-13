import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUserInfo } from "./authOperations";

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
  },
  reducers: {
    logOut() {
      return iS;
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

// email: "bart@mail.com"
// expiresIn: "3600"
// idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVkMzQwZGRiYzNjNWJhY2M0Y2VlMWZiOWQxNmU5ODM3ZWM2MTYzZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmMtMjYtOWM3YTQiLCJhdWQiOiJiYy0yNi05YzdhNCIsImF1dGhfdGltZSI6MTY2NTY0NjY1MSwidXNlcl9pZCI6Im9HdkVTa0ZDYWlmbVdkTWtDUUIyaUJnMVFuVDIiLCJzdWIiOiJvR3ZFU2tGQ2FpZm1XZE1rQ1FCMmlCZzFRblQyIiwiaWF0IjoxNjY1NjQ2NjUxLCJleHAiOjE2NjU2NTAyNTEsImVtYWlsIjoiYmFydEBtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiYXJ0QG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ea28Fd8kbbVG81IuogrXgSxraAjYwChOI1yBagTpVzdQEFo66a_UDLHdecd2bSUc7jifa4d6iYqSXxLYCOnUTStyOF9H5miI1WgtNcJ5JvT51VO3RV0v97drjOyB4tB-31PHVfmLBogn1l8IBd1_Nd_aKiGZdKlopu7LKBAMeG9WIXJp8apJvvPy-2Sxv7oQmVDMWXXHwEKA_6ORgIe0OJa88jrBDbvhjnAn97NBcor7L-lvmTAMli5SeO_XuYg-DV-1Khp1guillSMn49_-F7L6FOKBgs3CrGkXLv5XcOopuaq3tAdzToa5xqjSzoeKAAMCb9sT6E6coVVxJlOvRQ"
// kind: "identitytoolkit#SignupNewUserResponse"
// localId: "oGvESkFCaifmWdMkCQB2iBg1QnT2"
// refreshToken:
