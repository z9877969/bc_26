import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";
import { addTodo, changeFilter, removeTodo } from "./todoActions";

const setToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

const getFromLS = (key, initialValue) =>
  JSON.parse(localStorage.getItem(key)) ?? initialValue;

const itemsReducer = createReducer([], {
  [addTodo]: (state, { payload }) => {
    return [...state, payload];
  },
  [removeTodo]: (state, { payload }) => state.filter((el) => el.id !== payload),
});

const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

// const reducer = (state = "all", action) => {
//   return state
// }

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
