import { createActions } from "../../utils/createConstAction";
import {
  userLoginTypes,
  userRegistrationTypes,
  userLogoutTypes,
  userUpdateTypes,
  userDeleteTypes,
  getUserTypes,
  userUploadAvatarTypes,
  userDeleteAvatarTypes,
} from "./constants";

export const userLoginActions = createActions(userLoginTypes);
export const userRegistrationActions = createActions(userRegistrationTypes);
export const userLogoutActions = createActions(userLogoutTypes);
export const userUpdateActions = createActions(userUpdateTypes);
export const userDeleteActions = createActions(userDeleteTypes);
export const getUserActions = createActions(getUserTypes);
export const userUploadAvatarActions = createActions(userUploadAvatarTypes);
export const userDeleteAvatarActions = createActions(userDeleteAvatarTypes);
