import { connect } from 'react-redux';
import { fetchActivity, deleteActivity, updateActivity } from '../../actions/activity_actions';
import { fetchRoute } from '../../actions/route_actions';
import ActivityShow from './activity_show';

const mapStateToProps = (state, { match }) => {
    const activityId = parseInt(match.params.activityId);
    const activity = state.entities.activities[activityId] || undefined;
    const user = activity ? state.entities.users[activity.user_id] : state.session["id"];
    const route = activity ? state.entities.routes[activity.route_id] : undefined;
    return ({
        activityId,
        activity,
        user,
        route
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchActivity: (id) => dispatch(fetchActivity(id)),
        deleteActivity: (id) => dispatch(deleteActivity(id)),
        updateActivity: (activity) => dispatch(updateActivity(activity)),
        fetchRoute: (id) => dispatch(fetchRoute(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow)