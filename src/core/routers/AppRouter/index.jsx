import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginRouter from '../LoginRouter';
import MainRouter from '../MainRouter';
import { getToken } from '../../utils/getToken';

const AppRouter = () => (
  <>
    {!!getToken() ? (
      <MainRouter />
    ) : (
      <LoginRouter />
    )}
  </>
);

export default withRouter(AppRouter);