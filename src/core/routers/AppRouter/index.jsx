import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const AppRouter = () => (
  <Switch>
    <Route path={'/login'} component={() => <h1>Hello</h1>}/>
    <Redirect to={'/login'} />
  </Switch>
);

export default AppRouter;