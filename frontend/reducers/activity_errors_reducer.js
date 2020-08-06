import { RECEIVE_ACTIVITIES_ERRORS, RECEIVE_ACTIVITY, CLEAR_ACTIVITY_ERRORS } from '../actions/activity_actions';

const activityErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ACTIVITIES_ERRORS:
            return action.errors
        case RECEIVE_ACTIVITY:
            return []
        case CLEAR_ACTIVITY_ERRORS:
            return [];
        default:
            return state;
    }
}

export default activityErrorsReducer;