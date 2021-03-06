import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './TodoStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App Store={Store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
