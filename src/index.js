import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faUserCircle, faShoppingBag);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
