import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routeReducer from './route_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routeReducer,
});

export default entitiesReducer;