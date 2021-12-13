import { combineReducers } from "redux";
import { productMSTSlice } from "./userFromRedux";
const rootReducer = combineReducers({
  [productMSTSlice.name]: productMSTSlice.reducer,
});

export default rootReducer;
