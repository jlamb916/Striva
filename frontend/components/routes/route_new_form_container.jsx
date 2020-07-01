import { connect } from 'react-redux';
import { createRoute } from '../../actions/route_actions';
import NewRouteForm from './route_new_form';

const mapStateToProps = (state, ownProps) => {
    const currentUserId = state.session.id;
    const errors = state.errors.route;
    return ({
        userId: currentUserId,
        errors
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        routeProcessForm: (route) => dispatch(createRoute(route)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRouteForm);