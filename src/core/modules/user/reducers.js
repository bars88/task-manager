import { createReducer } from "../../utils/create-reducer";
import {
  userLoginTypes,
  userRegistrationTypes,
  getUserTypes,
  userUpdateTypes,
  userUploadAvatarTypes,
  userDeleteAvatarTypes,
  userDeleteTypes
} from "./constants";
import { SUCCESS } from "../../utils/constTypes";
import { combineReducers } from "redux";

const userLogin = createReducer({
  [userLoginTypes[SUCCESS]]: (_, action) => action.payload,
  [userRegistrationTypes[SUCCESS]]: (_, action) => action.payload,
  [getUserTypes[SUCCESS]]: (_, action) => action.payload,
  [userUpdateTypes[SUCCESS]]: (_, action) => action.payload,
  [userUploadAvatarTypes[SUCCESS]]: (_, action) => action.payload,
  [userDeleteAvatarTypes[SUCCESS]]: (_, action) => action.payload,
  [userDeleteTypes[SUCCESS]]: (_, action) => ({}),
},
{}
);

export default combineReducers({
  user: userLogin,
})