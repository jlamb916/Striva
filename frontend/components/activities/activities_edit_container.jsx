import { connect } from 'react-redux';
import { updateActivity } from '../../actions/activity_actions';
import ActivityForm from './activity_form';

const mapStateToProps = (state, ownProps) => {
    const currentUserId = state.session.id;
    const errors = state.errors.activity;
    const activityId = ownProps.match.params.activitiesId;
    const activity = state.entities.activities[activityId];
    let routeArr = Object.values(state.entities.routes);
    return ({
        userId: currentUserId,
        activity: activity,
        errors,
        formName: "Edit",
        processForm: "Edit",
        routes: routeArr
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        activityProcessForm: (activity) => dispatch(updateActivity(activity)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);