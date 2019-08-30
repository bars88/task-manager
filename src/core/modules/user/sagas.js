import { all, call, takeEvery, put } from 'redux-saga/effects';
import {
  userLoginTypes,
  USER_LOGIN_ENDPOINT,
  userRegistrationTypes,
  USER_REGISTRATION_ENDPOINT,
  USER_LOGOUT_ENDPOINT,
  userLogoutTypes,
  USER_ENDPOINT,
  getUserTypes,
  userUpdateTypes,
  USER_SET_DELETE_AVATAR_ENDPOINT,
  userUploadAvatarTypes,
  userDeleteAvatarTypes,
  userDeleteTypes,
} from './constants';
import { REQUEST } from '../../utils/constTypes';
import { api } from '../../utils/api';
import { httpMethods } from '../../constants';
import { userRegistrationActions, userLoginActions, getUserActions, userUpdateActions, userUploadAvatarActions, userDeleteAvatarActions, userDeleteActions } from './actions';
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

function* getUser() {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.GET,
      url: USER_ENDPOINT,
    });
    if (status === 200) {
      yield put(getUserActions.success(data));
    }
  } catch (error) {
    console.warn(error);
  }
}

function* updateUser({ payload }) {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.PATCH,
      url: USER_ENDPOINT,
      data: payload,
    });
    if (status === 200) {
      yield put(userUpdateActions.success(data))
    }
  } catch (error) {
    console.warn(error);
  }
}

function* deleteUser() {
  try {
    const { status } = yield call(api, {
      method: httpMethods.DELETE,
      url: USER_ENDPOINT
    });
    if (status === 200) {
      localStorage.removeItem('token');
      yield put(userDeleteActions.success());
      yield put(push('/login'));
    }
  } catch (error) {
    console.warn(error);
  }
}

function* uploadAvatar({ payload }) {
  const formData = new FormData();
  formData.set('avatar', payload);
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.POST,
      url: USER_SET_DELETE_AVATAR_ENDPOINT,
      data: formData,
    });
    if (status === 200) {
      yield put(userUploadAvatarActions.success(data));
    }
  } catch (error) {
    console.warn(error);
  }
}

function* deleteAvatar() {
  try {
    const { status, data } = yield call(api, {
      method: httpMethods.DELETE,
      url: USER_SET_DELETE_AVATAR_ENDPOINT,
    })
    if (status === 200) {
      yield put(userDeleteAvatarActions.success(data));
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
    takeEvery(getUserTypes[REQUEST], getUser),
    takeEvery(userUpdateTypes[REQUEST], updateUser),
    takeEvery(userUploadAvatarTypes[REQUEST], uploadAvatar),
    takeEvery(userDeleteAvatarTypes[REQUEST], deleteAvatar),
    takeEvery(userDeleteTypes[REQUEST], deleteUser),
  ]);
};