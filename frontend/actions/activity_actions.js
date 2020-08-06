import * as APIActivityUtil from '../util/activity_api_util';

export const RECEIVE_ALL_ACTIVITIES = "RECEIVE_ALL_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const RECEIVE_ACTIVITIES_ERRORS = "RECEIVE_ACTIVITIES_ERRORS";
export const CLEAR_ACTIVITY_ERRORS = "CLEAR_ACTIVITY_ERRORS"

const receiveAllActivities = (activities) => {
    return ({
        type: RECEIVE_ALL_ACTIVITIES,
        activities: activities
    });
};

const receiveActivity = activity => {
    return ({
        type: RECEIVE_ACTIVITY,
        activity
    });
};

const removeActivity = activityId => {
    return ({
        type: REMOVE_ACTIVITY,
        activityId
    });
};

export const receiveErrors = errors => ({
    type: RECEIVE_ACTIVITIES_ERRORS,
    errors
});

const removeActivityErrors = () => {
    return {
        type: CLEAR_ACTIVITY_ERRORS
    }
}



export const fetchActivities = () => dispatch => {
    return (
        APIActivityUtil.fetchActivities()
        .then(activities => dispatch(receiveAllActivities(activities)))
    );
};

export const fetchActivity = id => dispatch => {
    return (
        APIActivityUtil.fetchActivity(id)
        .then(activity => dispatch(receiveActivity(activity)))
    );
};

export const createActivity = activity => dispatch => {
    return (
        APIActivityUtil.createActivity(activity)
        .then(activity => dispatch(receiveActivity(activity))
            , err => dispatch(receiveErrors(err.responseJSON)))
    );
}

export const deleteActivity = id => dispatch => {
    return (
        APIActivityUtil.deleteActivity(id)
        .then(() => dispatch(removeActivity(id)))
    );
};

export const updateActivity = activity => dispatch => {
    return (
        APIActivityUtil.updateActivity(activity)
        .then(activity => dispatch(receiveActivity(activity))
            ,err => (dispatch(receiveErrors(err.responseJSON))))
    );
};


export const clearActivityErrors = () => (dispatch) => {
    return dispatch(removeActivityErrors());
}

