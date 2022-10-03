import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./counterConstants";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - 5;
    case COUNTER_INCREMENT:
      return state + action.payload;
    case COUNTER_RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
