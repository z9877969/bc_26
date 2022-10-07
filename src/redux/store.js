import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoSlice";
import { todoApi } from "./todo/todoApi";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (gDM) => gDM().concat(todoApi.middleware),
  devTools: process.env.NODE_ENV === "development",
});
