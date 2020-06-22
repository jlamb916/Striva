import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");


    // const store = configureStore(preloadedState);
    ReactDOM.render(<Root />, root);

    // tests

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
})