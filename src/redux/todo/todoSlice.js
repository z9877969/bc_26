import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodo } from "./todoOperations";

console.log("addTodo.pending :>> ", addTodo.fulfilled({ a: "qwe" }));

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    removeTodo(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    filterTodo(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [addTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const todoReducer = todoSlice.reducer;
const todoActions = todoSlice.actions;

export const { removeTodo, filterTodo } = todoActions;
export default todoReducer;
