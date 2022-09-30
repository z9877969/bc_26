import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import helloReducer from "./hello/helloReducer";


const rootReducer = combineReducers({
  counter: counterReducer,
  hello: helloReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
