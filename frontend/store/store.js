import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducers';

// const thunk = (store) => (next) => (action) => {
//     if (typeof action === 'function') {
//        return action(store.dispatch);
//     }
//     return next(action);
// }

const configureStore = (preloadedState = {}) => {
    //remember createstore uses reducer to create a state
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
