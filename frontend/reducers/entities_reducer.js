import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routeReducer from './route_reducer';
import activitiesReducer from './activities_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routeReducer,
    activities: activitiesReducer
});

export default entitiesReducer;