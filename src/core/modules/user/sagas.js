import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import {
  userLoginTypes,
  USER_LOGIN_ENDPOINT,
  userRegistrationTypes,
  USER_REGISTRATION_ENDPOINT,
} from './constants';
import { REQUEST } from '../../utils/constTypes';
import { api } from '../../utils/api';
import { httpMethods } from '../../constants';
import { userRegistrationActions, userLoginActions } from './actions';

function* userLogin(action) {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.POST,
      url: USER_LOGIN_ENDPOINT,
      data: action.payload,
    });
    if (status === 200) {
      localStorage.setItem('token', data.token);
      yield put(userLoginActions.success(data.user));
    } else {
      console.warn('Something went wrong');
    };
  } catch (error) {
    console.warn(error);
  }
};

function* userRegistration(action) {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.POST,
      url: USER_REGISTRATION_ENDPOINT,
      data: action.payload,
    })
    if (status === 201) {
      localStorage.setItem('token', data.token);
      yield put(userRegistrationActions.success(data.user));
    } else {
      console.warn('Something went wrong');
    }
  } catch (error) {
    console.warn(error);
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(userLoginTypes[REQUEST], userLogin),
    takeEvery(userRegistrationTypes[REQUEST], userRegistration),
  ]);
};