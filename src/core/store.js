import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducer';
import rootSaga from './saga';

export const history = createBrowserHistory();

const storeConfig = () => {
  const sagaMiddleware = createSagaMiddleware();
  const configuredStore = createStore(
    createRootReducer(history),
    {},
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga);

  return configuredStore;
}

export default storeConfig;