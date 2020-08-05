import { RECEIVE_ALL_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from '../actions/activity_actions';


const activitiesReducer = (state = {}, action) => {
    Object.freeze(state);
    
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_ACTIVITIES:
            return action.activities;
        case RECEIVE_ACTIVITY:
            newState = { [action.activity.id]: action.activity}
            return Object.assign({}, state, newState);
        case REMOVE_ACTIVITY:
            delete newState[action.activityId];
            return newState;
        default:
            return state;
    }
}

export default activitiesReducer;