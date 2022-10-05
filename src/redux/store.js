import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducer from "./counter/counterReducer";
import todoReducer from "./todo/todoSlice";

const logMiddleware = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.group("actionType", action.type);
      const prevState = getState();
      console.log("prevState", prevState);
      console.log("action ", action);
      next(action); // -> action -> reducer
      const nextState = getState(); // currentState
      console.log("nextState", nextState);
      console.groupEnd();
    };
  };
};

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch, getState);
//       return;
//     }
//     next(action);
//   };

// {
//   // store
//   let dispatch = () => {};
//   let getState = () => {};
//   let next = () => {};
//   logMiddleware({ dispatch, getState })(next)(action);
// }

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
  middleware: (gDM) => gDM()
  // .concat(logMiddleware, thunk)
  ,
  devTools: process.env.NODE_ENV === "development",
});
