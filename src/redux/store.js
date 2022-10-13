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
import todoReducer from "./todo/todoSlice";
import auth from "./auth/authSlice";

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["idToken"],
};

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
    auth: persistReducer(authPersistConfig, auth),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
