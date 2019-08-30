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
export const USER_LOGOUT_ENDPOINT = '/users/logout';
export const USER_ENDPOINT = '/users/me';
export const USER_SET_DELETE_AVATAR_ENDPOINT = '/users/me/avatar';

// types
const USER_LOGIN = 'USER_LOGIN';
const USER_REGISTRATION = 'USER_REGISTRATION';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_UPDATE = 'USER_UPDATE';
const USER_DELETE = 'USER_DELETE';
const GET_USER = 'GET_USER';
const USER_UPLOAD_AVATAR = 'USER_UPLOAD_AVATAR';
const USER_DELETE_AVATAR = 'USER_DELETE_AVATAR';

// constants
export const userLoginTypes = createConstants(USER_LOGIN);
export const userRegistrationTypes = createConstants(USER_REGISTRATION);
export const userLogoutTypes = createConstants(USER_LOGOUT);
export const userUpdateTypes = createConstants(USER_UPDATE);
export const userDeleteTypes = createConstants(USER_DELETE);
export const getUserTypes = createConstants(GET_USER);
export const userUploadAvatarTypes = createConstants(USER_UPLOAD_AVATAR);
export const userDeleteAvatarTypes = createConstants(USER_DELETE_AVATAR);
