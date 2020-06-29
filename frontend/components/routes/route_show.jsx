import React from 'react';

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
             (<div className="route-data">
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
        return (
        <div className="route-container">
            <h1>routes page!</h1>
                <div className="route-index-item">
                    <div className="map-canvas-route">
                        <img className="map-static-img" src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-77.5235,38.2217,15.73,0/300x200?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g" alt="placeholder" />
                        <p className="placeholder">placeholder img</p>
                    </div>
                   {renderData}
                </div>
        </div>
        )
    }
}

export default RouteShow;