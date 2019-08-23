import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import AppRouter from '../AppRouter';
import { history } from '../../store';

export default class App extends React.Component {
  render = () => (
    <>
      <Provider store={this.props.store}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </Provider>
    </>
  )
}