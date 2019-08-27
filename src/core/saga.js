import { fork, all } from 'redux-saga/effects';
import userSaga from './modules/user/sagas';

function* rootSaga() {
  return yield all([
    fork(userSaga),
  ]);
}

export default rootSaga;