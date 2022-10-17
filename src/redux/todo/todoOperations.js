import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (data, thunkApi) => {
    const { localId, idToken } = thunkApi.getState().auth;

    console.log("operation");
    try {
      const todo = await addTodoApi({ todo: data, localId, idToken });
      return todo;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (data, { getState }) => {
      const { items } = getState().todo;
      if (items.some((el) => el.descr === data.descr)) {
        return false;
      }
      return true;
    },
  }
);

export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  const { localId, idToken } = thunkApi.getState().auth;

  try {
    const todoItems = await getTodoApi({ localId, idToken });
    return todoItems;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;

    try {
      const idResponse = await removeTodoApi({ id, localId, idToken });
      return idResponse;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todo/edit",
  async (todo, { rejectWithValue }) => {
    try {
      const editedTodo = await updateTodoApi(todo);
      return editedTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
