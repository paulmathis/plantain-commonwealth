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
    total: 75,
    items: [
      {
        id: 0,
        name: 'Blue shirt with pleat detail back',
        price: 19.99,
        quanity: 3,
        img: '/assets/products/men/t-shirts/green-t-shirt.jpg',
      },
      {
        id: 1,
        name: 'Blue shirt with pleat detail back',
        price: 19.99,
        quanity: 3,
        img: '/assets/products/men/t-shirts/green-t-shirt.jpg',
      },
    ],
  },
};
const store = createStore(rootReducer, state);

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
