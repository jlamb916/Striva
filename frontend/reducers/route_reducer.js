import {RECEIVE_ALL_ROUTES, RECEIVE_ROUTE, DELETE_ROUTE} from '../actions/route_actions';

const routeReducer = (state = _nullSession, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_ROUTES:
            return action.routes;
        case RECEIVE_ROUTE:
            newState[id] = action.route
            return newState;
        case DELETE_ROUTE:
            delete newState[action.route.id]
            return newState
        default:
            return state;
    }
}

export default routeReducer;