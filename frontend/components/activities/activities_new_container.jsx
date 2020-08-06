import { connect } from 'react-redux';
import { createActivity } from '../../actions/activity_actions';
import ActivityForm from './activity_form';

const mapStateToProps = (state) => {
    const currentUserId = state.session.id;
    const errors = state.errors.activity;
    return ({
        userId: currentUserId,
        errors,
        formName: "New",
        processForm: "Create"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        activityProcessForm: (activity) => dispatch(createActivity(activity)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);