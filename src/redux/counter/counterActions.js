import { INCREMENT, DECREMENT } from "./counterConstatnts";

export const incrementAction = (value) => ({
  type: INCREMENT,
  payload: value,
});

export const decrementAction = (value) => ({
  type: DECREMENT,
  payload: value,
});
