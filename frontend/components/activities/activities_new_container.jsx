import { connect } from 'react-redux';
import { createActivity } from '../../actions/activity_actions';
import ActivityForm from './activity_form';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const errors = state.errors.activity;
    let routeArr = Object.values(state.entities.routes);

    return ({
        userId: currentUserId,
        errors,
        formName: "New",
        processForm: "Create",
        routes: routeArr
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        activityProcessForm: (activity) => dispatch(createActivity(activity)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);