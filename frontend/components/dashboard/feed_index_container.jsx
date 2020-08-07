import { connect } from "react-redux";
import FeedItem from "./feed_item";

import { fetchActivity } from "../../actions/activity_actions";
import { fetchRoute } from "../../actions/route_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        activity: ownProps.activity,
        activityId: ownProps.activity.id,
        routeId: ownProps.activity.route_id,
        userId: ownProps.activity.user_id,
        route: state.entities.routes[ownProps.activity.route_id],
        user: state.entities.users[ownProps.activity.user_id]
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchActivity: (id) => dispatch(fetchActivity(id)),
    fetchRoute: (id) => dispatch(fetchRoute(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);