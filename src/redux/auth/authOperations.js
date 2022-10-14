import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
  updateUserInfoApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";
import { logOut } from "./authSlice";

const getErrorMessage = (error) =>
  error.request
    ? JSON.parse(error.request.response).error.message
    : error.message;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, thunkApi) => {
    try {
      const { data } = await registerUserApi(form);
      return data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (form, thunkApi) => {
    try {
      const { data } = await loginUserApi(form);
      return data;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      return thunkApi.rejectWithValue(errorMessage);
      // const newError = {
      //   request: "login",
      //   status: error.request.status,
      // };
      // return thunkApi.rejectWithValue(newError);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { idToken } = getState().auth;

    try {
      const data = await updateUserInfoApi(idToken);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          errorHandler({
            error,
            cb: updateUserInfo,
          })
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const { data } = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return data; // update token
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
