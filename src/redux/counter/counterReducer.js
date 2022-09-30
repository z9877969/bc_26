const counterReducer = (state = 21, action) => {
  switch (action.type) {
    case "decrement":
      return state - action.payload;
    case "increment":
      return state + action.payload;

    default:
      return state;
  }
};

export default counterReducer;
