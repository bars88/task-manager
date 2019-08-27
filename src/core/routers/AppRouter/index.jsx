import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../../../pages/LoginPage';
import RegistrationPage from '../../../pages/RegistrationPage';

const AppRouter = () => (
  <Switch>
    <Route path={'/login'} component={LoginPage}/>
    <Route path={'/registration'} component={RegistrationPage} />
    <Redirect to={'/login'} />
  </Switch>
);

export default AppRouter;