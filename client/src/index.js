import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'sanitize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faUserCircle, faShoppingBag, faTimes);

const state = {
  cart: {
    total: 0,
    items: [],
  },
};
const store = createStore(
  rootReducer,
  state,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
