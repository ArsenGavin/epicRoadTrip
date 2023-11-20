import { combineReducers } from "redux";
import paymentReducer from "./paymentContext/paymentReducer";
import roadtripReducer from "./roadtripContext/roadtripReducer";
import userReducer from "./userContext/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  payment: paymentReducer,
  roadtrip: roadtripReducer,
});

export default rootReducer;
