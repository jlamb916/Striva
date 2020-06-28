import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import { signup } from './util/session_api_util';
import { fetchAllRoutes, fetchRoute, createRoute } from './actions/route_actions';
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, root);

    // tests

    window.signup = signup;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchAllRoutes = fetchAllRoutes;
    window.fetchRoute = fetchRoute;
    window.createRoute = createRoute;

})