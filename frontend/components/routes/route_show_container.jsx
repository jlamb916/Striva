import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RouteIndex from './routes_index';
import { fetchAllRoutes } from '../../actions/route_actions';

const msp = (state, { match }) => {
    const routeId = parseInt(match.params.routeId);
    const route = selectRoute(state.entities.routes, routeId);
    return ({
        routeId,
        route
    })
}

const mdp = dispatch => {
    return ({
        fetchRoute: (id) => dispatch(fetchRoute(id)),
        deleteRoute: (id) => dispatch(deleteRoute(id))
    })
}

export default connect(msp, mdp)(RouteShow);

export default connect(mapStateToProps, mapDispatchToProps)(RouteIndex);