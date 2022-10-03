import { combineReducers } from "redux";
import { todo } from "../../data/todo";
import { TODO_ADD, TODO_FILTER, TODO_REMOVE } from "./todoConstants";

const setToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

const getFromLS = (key, initialValue) =>
  JSON.parse(localStorage.getItem(key)) ?? initialValue;

const itemsReducer = (state = getFromLS("todo", todo), action) => {
  switch (action.type) {
    case TODO_ADD:
      const addedItems = [...state, action.payload];
      return setToLS("todo", addedItems);
    case TODO_REMOVE:
      const removedItems = state.filter((el) => el.id !== action.payload);
      return setToLS("todo", removedItems);

    default:
      return state;
  }
};

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case TODO_FILTER:
      return action.payload;

    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const fnReducer = (state = {items: todo, filter: ""}) => {}

export default todoReducer;
