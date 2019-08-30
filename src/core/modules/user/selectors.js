import { createSelector } from 'reselect';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const STATE_KEY = 'user';

const getState = (state) => state[STATE_KEY];

export const selectUser = createSelector(
  getState,
  user => user.user,
)

export const selectUserInitialValues = createSelector(
  selectUser,
  user => {
    if (!isEmpty(user)) {
      return {
        name: get(user, 'name'),
        age: get(user, 'age'),
        email: get(user, 'email'),
      }
    }
  }
);