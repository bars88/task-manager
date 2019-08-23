import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/routers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import storeConfig from './core/store';

const store = storeConfig();

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
