import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RouteIndex from './routes_index';
import { fetchAllRoutes } from '../../actions/route_actions';

const mapStateToProps = (state) => {
    let routeArr = Object.values(state.entities.routes);
    return {
        routes: routeArr,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchAllRoutes: () => dispatch(fetchAllRoutes()),
//     }
// }

export default connect(mapStateToProps, null)(RouteIndex);