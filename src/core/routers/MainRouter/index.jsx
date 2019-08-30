import React from 'react';
import MainPage from '../../../pages/MainPage';
import { Route, Switch } from 'react-router-dom';

const MainRouter = () => (
  <Switch>
    <Route path={'/main'} component={MainPage} />
  </Switch>
);

export default MainRouter;