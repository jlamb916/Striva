import { connect } from 'react-redux';
import { fetchRoute, deleteRoute } from '../../actions/route_actions';
import RouteShow from './route_show';

const mapStateToProps = (state, { match }) => {
    const routeId = parseInt(match.params.routeId);
    const route = state.entities.routes[routeId] || undefined;

    return ({
        routeId,
        route
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchRoute: (id) => dispatch(fetchRoute(id)),
        deleteRoute: (id) => dispatch(deleteRoute(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
