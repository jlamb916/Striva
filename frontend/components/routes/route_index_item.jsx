import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
    constructor (props) {
        super(props);
        this.routeData = JSON.parse(this.props.route.route_data);
        this.routeDuration = this.routeData.matchings[0].duration;
        this.routeDistance = this.routeData.matchings[0].distance;
    }

    // getStaticMapImg() {
        
    //     let lat = 0;
    //     let long = 0;
    //     let zoom = 3;
    //     https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122,37,9/600x600?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g&addlayer={%22id%22:%22road-overlay%22,%22type%22:%22line%22,%22source%22:%22composite%22,%22source-layer%22:%22road%22,%22filter%22:[%22==%22,[%22get%22,%22class%22],%22motorway%22],%22paint%22:{%22line-color%22:%22%23ff0000%22,%22line-width%22:5}}&before_layer=road-label
    //     https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122,37,9/600x600?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g&addlayer={%22id%22:%22road-overlay%22,%22type%22:%22line%22,%22source%22:%22composite%22,%22source-layer%22:%22road%22,%22filter%22:[%22==%22,[%22get%22,%22class%22],%22motorway%22],%22paint%22:{%22line-color%22:%22%23ff0000%22,%22line-width%22:5}}&before_layer=road-label
    //     var query = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/' + long + ',' + lat + ',' + zoom + '/300x200?access_token=' + mapboxgl.accessToken;


    // }
    render () {
        
        const { route } = this.props
        return (
            <div className="route-index-item">
                <div className="map-canvas-route">
                    <img className="map-static-img"src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-77.5235,38.2217,15.73,0/300x200?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g" alt=""/>
                    <p className="placeholder">placeholder img</p>
                </div>
                <div className="route-data">
                    <Link to="/routes"><h3 className="route-name">{route.route_name}</h3></Link>
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