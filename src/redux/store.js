import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
