import { combineReducers } from "redux";

import person from "./personReducer";
import facility from "./facilityReducer";
import exposure from "./exposureReducer";
import errors from "./errorReducer";

export default combineReducers({
  person,
  facility,
  exposure,
  errors
});
