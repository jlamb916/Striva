import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

import { signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    // const store = configureStore(preloadedState);
    ReactDOM.render(<Root />, root);

    // tests

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    window.signup = signup;
})