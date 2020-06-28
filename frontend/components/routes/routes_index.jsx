import React from 'react';
import { NavLink } from 'react-router-dom';

class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllRoutes();
    }

    render() {
        const allRoutes = this.props.routes.map((route) => (
        <div>
            <li className="feed" key={`${route.id}`}>
                <ul>
                    <li>
                        {`${route.route_name}`}
                    </li>
                    <li>
                        {`${route.route_description}`}
                    </li>
                </ul>
            </li>
        </div>
        ))
        return (
            <div className="route-index-container">
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
                <ul>
                    {allRoutes}
                </ul>
            </div>
        )
    }
}

export default RouteIndex;