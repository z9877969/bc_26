import {INCREMENT, DECREMENT} from './counterConstatnts';

const counterReducer = (state = 21, { type, payload }) => {
  switch (type) {
    case DECREMENT:
      return state - payload;
    case INCREMENT:
      return state + payload;

    default:
      return state;
  }
};

export default counterReducer;
