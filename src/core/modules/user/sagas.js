import { all, fork, call, takeEvery, put } from 'redux-saga/effects';
import {
  userLoginTypes,
  USER_LOGIN_ENDPOINT,
  userRegistrationTypes,
  USER_REGISTRATION_ENDPOINT,
  USER_LOGOUT_ENDPOINT,
  userLogoutTypes,
} from './constants';
import { REQUEST } from '../../utils/constTypes';
import { api } from '../../utils/api';
import { httpMethods } from '../../constants';
import { userRegistrationActions, userLoginActions } from './actions';
import { push } from 'connected-react-router';

function* putUserData(data, action) {
  localStorage.setItem('token', data.token);
  yield put(action.success(data.user));
  yield put(push('/main'));
};

function* userLogin(action) {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.POST,
      url: USER_LOGIN_ENDPOINT,
      data: action.payload,
    });
    if (status === 200) {
      yield call(putUserData, data, userLoginActions);
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
      yield call(putUserData, data, userRegistrationActions);
    } else {
      console.warn('Something went wrong');
    }
  } catch (error) {
    console.warn(error);
  }
}

function* userLogout() {
  try {
    const { status } = yield call(api, {
      method: httpMethods.POST,
      url: USER_LOGOUT_ENDPOINT,
    })
    if (status === 200) {
      localStorage.removeItem('token');
      yield put(push('/login'));
    }
  } catch (error) {
    console.warn(error);
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(userLoginTypes[REQUEST], userLogin),
    takeEvery(userRegistrationTypes[REQUEST], userRegistration),
    takeEvery(userLogoutTypes[REQUEST], userLogout),
  ]);
};