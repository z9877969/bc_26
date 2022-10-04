import { createAction } from "@reduxjs/toolkit";

// export const actionDecrement = () => {
//   return { type: COUNTER_DECREMENT };
// };
export const actionDecrement = createAction("counter/decrement");

// export const actionIncrement = (value) => {
//   return {
//     type: COUNTER_INCREMENT,
//     payload: value,
//   };
// };
export const actionIncrement = createAction("counter/increment/test")

// export const actionReset = () => {
//   return {
//     type: COUNTER_RESET,
//   };
// };
export const actionReset = createAction("counter/reset")
