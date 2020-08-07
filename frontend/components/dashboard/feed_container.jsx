import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Feed from './feed';
import { fetchAllRoutes} from '../../actions/route_actions';
import { fetchActivities } from '../../actions/activity_actions';


const mapStateToProps = (state) => {
    let routeArr = Object.values(state.entities.routes);
    let activitiesArr = Object.values(state.entities.activities);
    return {
        routes: routeArr,
        activities: activitiesArr,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllRoutes: () => dispatch(fetchAllRoutes()),
        fetchActivities: () => dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);