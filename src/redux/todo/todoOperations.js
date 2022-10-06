import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk(
  "todo",
  async (data, thunkApi) => {
    try {
      const todo = await addTodoApi(data);
      return todo;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (data, { getState }) => {
      const { items } = getState().todo;
      if (items.some((el) => el.title === data.title)) {
        return false;
      }
      return true;
    },
  }
);

export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  try {
    const todoItems = await getTodoApi();
    return todoItems;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue }) => {
    // console.log("thunkApi :>> ", thunkApi);
    try {
      const idResponse = await removeTodoApi(id);
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

// const operation = (data) => {
//   return (dispatch, getState) => {
//     dispatch("p")
//     fetch().then(() => {dispatch("f")})
//     .catch(dispatch("r"))
//   }
// }

// dispatch(operation(21))
