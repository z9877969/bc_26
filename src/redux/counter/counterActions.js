import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

export const actionDecrement = () => {
  return { type: COUNTER_DECREMENT };
};

export const actionIncrement = (value) => {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
};

export const actionReset = () => {
  return {
    type: COUNTER_RESET,
  };
};
