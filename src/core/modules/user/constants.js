import { createConstants } from "../../utils/createConstAction";

export const userFormFields = {
  NAME: 'name',
  EMAIL: 'email',
  PASSWORD: 'password',
  RE_PASSWORD: 'rePassword',
  AGE: 'age',
};

// endpoints
export const USER_LOGIN_ENDPOINT = '/users/login';
export const USER_REGISTRATION_ENDPOINT = '/users';

// types
const USER_LOGIN = 'USER_LOGIN';
const USER_REGISTRATION = 'USER_REGISTRATION';

// constants
export const userLoginTypes = createConstants(USER_LOGIN);
export const userRegistrationTypes = createConstants(USER_REGISTRATION);