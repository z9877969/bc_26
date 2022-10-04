import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterReducer";
// import todoReducer from "./todo/todoReducer";
import todoReducer from "./todo/todoSlice";

// const preloadedState = {
//   todo: {
//     items: [
//       {
//         id: 1,
//         date: "2022-09-15",
//         descr: "Description for title - 1",
//         priority: "low",
//       },
//       {
//         id: 2,
//         date: "2022-09-15",
//         descr: "Description for title - 2",
//         priority: "low",
//       },
//     ],
//     filter: "medium",
//   },
// };

const persistTodoConfig = {
  key: "todo",
  version: 1,
  storage: storage,
  // whitelist: ["items"],
  blacklist: ["filter"],
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: preloadedState, // -> створює початковий стейт
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
