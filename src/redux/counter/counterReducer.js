import { createReducer } from "@reduxjs/toolkit";
import { actionDecrement, actionIncrement, actionReset } from "./counterActions";

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case COUNTER_DECREMENT:
//       return state - 5;
//     case COUNTER_INCREMENT:
//       return state + action.payload;
//     case COUNTER_RESET:
//       return 0;
//     default:
//       return state;
//   }
// };
const counterReducer = createReducer(0, {
  [actionIncrement]: (state, action) => {
    return state - 5;
  },
  [actionDecrement]: (state, action) => state + action.payload,
  [actionReset]: () => 0,
});

export default counterReducer;
