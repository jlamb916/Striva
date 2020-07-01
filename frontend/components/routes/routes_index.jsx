import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteIndexItem from './route_index_item';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllRoutes();
    }

    render() {
        const allRoutes = this.props.routes.reverse().map((route) => (
            <RouteIndexItem key={`${route.id}`} route={route} />
        ));
        
        return (
            <div className="route-container">
                <header className="route-index-header">
                    <div className="route-index-title-container">
                        <h1 className="route-index-title">My Routes</h1>
                        <NavLink className="create-route-link"  to='/routes/new'
                            activeClassName="create-route-link">Create New Route</NavLink>
                    </div>
                    <span className="img-container">
                        <img className="map-img" src="https://d3nn82uaxijpm6.cloudfront.net/assets/routes/route-list-mobile-upsell-c1aec554d010e3c86411ad560615802162318875f086d1e3ed4850d6c7014b8f.png"/>
                    </span>
                </header>
                <div className="route-index-container">
                    <div className="sport-types">
                        {/* <NavLink className="sport-selector" to='/routes/'
                            activeClassName="active-sport-selector">All</NavLink>
                        <NavLink className="sports-selector" to='/routes/new'
                            activeClassName="create-route-link">Create New Route</NavLink>
                        <NavLink className="sports-selector" to='/routes/new'
                            activeClassName="create-route-link">Create New Route</NavLink> */}
                    </div>
                    <div className="route-index-items-container">
                        <ul className="route-index-list">
                             {allRoutes}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RouteIndex;