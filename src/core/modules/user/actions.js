import { createActions } from "../../utils/createConstAction";
import { userLoginTypes, userRegistrationTypes, userLogoutTypes } from "./constants";

export const userLoginActions = createActions(userLoginTypes);
export const userRegistrationActions = createActions(userRegistrationTypes);
export const userLogoutActions = createActions(userLogoutTypes);