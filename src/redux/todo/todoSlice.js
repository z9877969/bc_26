import { createSlice } from "@reduxjs/toolkit";
import { addTodo, editTodo, getTodo, removeTodo } from "./todoOperations";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
    theme: "light",
    editedItem: null,
  },
  reducers: {
    filterTodo(state, { payload }) {
      state.filter = payload;
    },
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setEditedItem(state, { payload }) {
      state.editedItem = payload;
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
    [removeTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    [removeTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [editTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.map((item) =>
        item.id === payload.id ? payload : item
      );
      state.editedItem = null;
    },
    [editTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const todoReducer = todoSlice.reducer;
const todoActions = todoSlice.actions;

export const { filterTodo, changeTheme, setEditedItem } = todoActions;
export default todoReducer;
