import { createActions } from "../../utils/createConstAction";
import { userLoginTypes, userRegistrationTypes } from "./constants";

export const userLoginActions = createActions(userLoginTypes);
export const userRegistrationActions = createActions(userRegistrationTypes);