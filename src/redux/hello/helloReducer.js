import { CHANGE_TITLE } from "./helloConstants";

const helloReducer = (state = { title: "Hello", email: null }, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default helloReducer;
