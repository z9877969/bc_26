import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi } from "../../utils/firebaseApi";

// const addTodoPending = createAction("addTodo/pending");
// const addTodoFullfield = createAction("addTodo/fullfield");
// const addTodoRejected = createAction("addTodo/rejected");

// const operation = (data) => {
//   return (dispatch, getState) => {
//     dispatch(addTodoPending());

//     fetch()
//       .then((resData) => dispatch(addTodoFullfield(resData)))
//       .catch((err) => dispatch(addTodoRejected(err)));
//   };
// };

// dispatch(addTodo("uytuyt"));

export const addTodo = createAsyncThunk("todo", async (data, thunkApi) => {
  // { type: "todo/pending" }
  try {
    const todo = await addTodoApi(data);
    // { type: "todo/fullfield", payload: data }
    return todo; //  dispatch(addTodo.fulfilled(todo)))
  } catch (error) {
    // { type: "todo/rejected", payload: err.message }
    return thunkApi.rejectWithValue(error.message); // dispatch(addTodoRejected(err))
  }
});

export const getTodo = createAsyncThunk("todo/get", async (_, thunkApi) => {
  try {
    const todoItems = await getTodoApi();
    return todoItems;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
