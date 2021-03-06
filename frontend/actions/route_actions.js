import * as APIRouteUtil from '../util/route_map_util';

export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";
export const REMOVE_ROUTE = "REMOVE_ROUTE";

// action creators
const receiveAllRoutes = (routes) => {
    return {
        type: RECEIVE_ALL_ROUTES,
        routes
    }
}

const receiveRoute = (route) => {
    
    return {
        type: RECEIVE_ROUTE,
        route
    }
}

const receiveRouteErrors = (errors) => {
    return {
        type: RECEIVE_ROUTE_ERRORS,
        errors
    }
}


const removeRouteErrors = () => {
    return {
        type: CLEAR_ROUTE_ERRORS
    }
}

const removeRoute = (routeId) => {
    return {
        type: REMOVE_ROUTE,
        routeId
    }
}

// thunk creators

export const fetchAllRoutes = () => (dispatch) => {
    return APIRouteUtil.fetchAllRoutes()
        .then(routes => dispatch(receiveAllRoutes(routes))
    );
}

export const fetchRoute = (routeId) => (dispatch) => {
    return APIRouteUtil.fetchRoute(routeId)
        .then(route => dispatch(receiveRoute(route))
    );
}

export const deleteRoute = (routeId) => (dispatch) => {
    return APIRouteUtil.deleteRoute(routeId)
        .then(() => dispatch(removeRoute(routeId))
    );
}


export const createRoute = (route) => (dispatch) => {
    return APIRouteUtil.createRoute(route)
        .then((route) => dispatch(receiveRoute(route))
        , err => dispatch(receiveRouteErrors(err.responseJSON))
    );
}

export const clearRouteErrors = () => (dispatch) => {
    return dispatch(removeRouteErrors());
}
