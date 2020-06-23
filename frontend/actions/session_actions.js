import * as APIUtil from '../util/session_api_util';

// constant types

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOG_OUT_CURRENT_USER = 'LOG_OUT_CURRENT_USER';


// action creators

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
}

const logoutCurrentUser = () => {
    return {
        type: LOG_OUT_CURRENT_USER
    }
}

// thunk action creators

export const signin = (user) => (dispatch) => {
    debugger
    return APIUtil.signin(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)));
}

export const signout = () => (dispatch) => {
    return APIUtil.signout()
        .then(res => dispatch(logoutCurrentUser()));
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)));
}