import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import { signup } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);

    // tests

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    window.signup = signup;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
})