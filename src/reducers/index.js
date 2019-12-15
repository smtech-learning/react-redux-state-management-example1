import counterReducer from "./Counter";
import isLoggedIn from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedIn
});

export default allReducers;
