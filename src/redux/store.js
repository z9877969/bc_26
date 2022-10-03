import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoReducer";

// const reducer = (state = { a: 21, b: [], c: true }, action) => {
//   return { ...state, a: 25 };
// };

// const aReducer = (state = 21, action) => {
//   return 25;
// };
// const bReducer = (state = [], action) => {
//   return state;
// };
// const cReducer = (state = true, action) => {
//   return state;
// };

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer
});
// const fnReducer = (state = {count: 0, todo: {items: todo, filter: ""}}) => {}

// export const store = createStore(reducer, composeWithDevTools());
export const store = createStore(rootReducer, composeWithDevTools());
