import { connect } from 'react-redux';
import ActivityIndex from './activities_index';
import { fetchActivities } from '../../actions/activity_actions';

const mSTP = (state) => {
    let activitiesArr = Object.values(state.entities.activities);

    return {
        activities: activitiesArr,
        currentUserId: state.entities.users[state.session.id].id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchActivities: () => dispatch(fetchActivities()),
    }
}

export default connect(mSTP, mDTP)(ActivityIndex);