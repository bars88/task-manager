import { createSelector } from 'reselect';

const STATE_KEY = 'user';

const getState = (state) => state[STATE_KEY];

export const getUser = createSelector(
  getState,
  user => user.user,
)