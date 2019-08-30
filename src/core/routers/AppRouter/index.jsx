import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginRouter from '../LoginRouter';
import { getToken } from '../../utils/getToken';
import WithSuspense from '../../../hocs/WithSuspense';

const RenderMainRouter = () => import('../MainRouter');

const AppRouter = () => (
  <>
    {!!getToken() ? (
      <WithSuspense load={RenderMainRouter} />
    ) : (
      <LoginRouter />
    )}
  </>
);

export default withRouter(AppRouter);