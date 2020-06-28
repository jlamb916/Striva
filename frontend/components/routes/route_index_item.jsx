import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
    constructor (props) {
        super(props);
        this.routeData = JSON.parse(this.props.route.route_data);
        this.routeDuration = this.routeData.matchings[0].duration;
        this.routeDistance = this.routeData.matchings[0].distance;
    }

    render () {
        
        const { route } = this.props
        return (
            <div className="route-index-item">
                <div className="map-canvas-route">
                    <p>map</p>
                </div>
                <div className="route-data">
                    <Link><h3 class="route-name">{route.route_name}</h3></Link>
                    <ul className="route-stats">
                        <li>
                            Distance: {this.routeDistance}
                        </li>
                    </ul>
                    <div className="route-moving-time">
                        Est. Moving Time {this.routeDuration}
                    </div>
                    <div className="route-timestamp">
                        <p>{route.created_at}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default RouteIndexItem;