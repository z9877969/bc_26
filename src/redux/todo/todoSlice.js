import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    addTodo(state, { payload }) {
      //   return {
      //     ...state,
      //     items: [...state.items, payload],
      //   };
      state.items.push(payload);
    },
    removeTodo(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    filterTodo(state, { payload }) {
      state.filter = payload;
    },
  },
});

const todoReducer = todoSlice.reducer;
const todoActions = todoSlice.actions;

// console.log("todoActions :>> ", todoActions);
// console.log("todoActions.addTodo() :>> ", todoActions.addTodo("qwe"));

export const { addTodo, removeTodo, filterTodo } = todoActions;
export default todoReducer;

// add() -> {type: "todo/addTodo"}
// remove() -> {type: "qwe/remove"}
