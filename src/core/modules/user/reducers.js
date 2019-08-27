import { createReducer } from "../../utils/create-reducer";
import { userLoginTypes, userRegistrationTypes } from "./constants";
import { SUCCESS } from "../../utils/constTypes";
import { combineReducers } from "redux";

const userLogin = createReducer({
  [userLoginTypes[SUCCESS]]: (_, action) => action.payload,
  [userRegistrationTypes[SUCCESS]]: (_, action) => action.payload,
},
{}
);

export default combineReducers({
  user: userLogin,
})