import { combineReducers } from "redux";
import cardReducer from "./cardReducers";
import loginReducer from "./loginReducers";

export const reducer = combineReducers({
  loginReducer: loginReducer,
  cardReducer: cardReducer,
});
