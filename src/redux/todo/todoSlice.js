import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filter: "all",
    editedItem: null,
  },
  reducers: {
    filterTodo(state, { payload }) {
      state.filter = payload;
    },
    setEditedItem(state, { payload }) {
      state.editedItem = payload;
    },
  },
});

const todoReducer = todoSlice.reducer;
const todoActions = todoSlice.actions;

export const { filterTodo, setEditedItem } = todoActions;
export default todoReducer;
