import React from 'react';
import MapBox from '../map/map';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.route === undefined) {
            this.props.fetchRoute(this.props.routeId);
        }
    }

    render () {
        const { route } = this.props
        
        let routeData;
        let routeDuration;
        let routeDistance;
        if (route) {
            routeData = JSON.parse(route.route_data);
            routeDuration = routeData.matchings[0].duration;
            routeDistance = routeData.matchings[0].distance;
        }
        let renderData;
        renderData = routeData ?
             (<div className="route-show-data">
                <h3 className="route-name">{route.route_name}</h3>
                <ul>
                    <li>
                        Distance: {routeDistance}
                    </li>
                </ul>
                <div className="route-moving-time">
                    Est. Moving Time {routeDuration}
                </div>
                <div className="route-timestamp">
                    <p>{route.created_at}</p>
                </div>
            </div>) : "";

        {if (route) {
        return (
        <div className="route-container">
                <div>
                    <h5><Link className="my-routes-link" to="/routes">My Routes</Link> / {route.route_name}</h5>
                </div>
                <div className="route-title">
                    <h1>{route.route_name}</h1>
                </div>
                <div className="route-show-container">
                    <div className="map-show-canvas">
                        <MapBox route={route} />
                    </div>
                   {renderData}
                </div>
        </div>
        )}
        else {
            return ""
        };}
    }
}

export default RouteShow;