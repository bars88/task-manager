import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationPage from '../../../pages/RegistrationPage';
import LoginPage from '../../../pages/LoginPage';

const LoginRouter = () => (
  <Switch>
    <Route path={'/login'} component={LoginPage}/>
    <Route path={'/registration'} component={RegistrationPage} />
    <Redirect to={'/login'} />
  </Switch>
);

export default LoginRouter;