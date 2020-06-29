import { RECEIVE_ALL_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE } from '../actions/route_actions';

const routeReducer = (state = {}, action) => {
    Object.freeze(state)
    
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ROUTE:
            newState = { [action.route.id]: action.route };
            return Object.assign({}, state, newState);
        case RECEIVE_ALL_ROUTES:
            return action.routes;
        case REMOVE_ROUTE:
            delete newState[action.route.id]
            return newState
        default:
            return state;
    }
}

export default routeReducer;