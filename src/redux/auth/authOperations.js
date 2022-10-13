import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUserApi,
  registerUserApi,
  updateUserInfoApi,
} from "../../utils/firebaseApi";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, thunkApi) => {
    try {
      const { data } = await registerUserApi(form);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (_, { getState, rejectWithValue }) => {
    const { idToken } = getState().auth;

    try {
      const data = await updateUserInfoApi(idToken);
      return data;
    } catch (error) {
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
