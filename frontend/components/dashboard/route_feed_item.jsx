import React from 'react';
import { Link } from 'react-router-dom';
import MapBox from '../map/map';

let polyline = require('@mapbox/polyline');

class RouteFeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.routeData = JSON.parse(this.props.route.route_data);
        // this.routeDuration = this.routeData.matchings[0].duration;
        // this.routeDistance = this.routeData.matchings[0].distance;
    }

    // getStaticMapImg() {

    //     let lat = 0;
    //     let long = 0;
    //     let zoom = 3;
    //     https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122,37,9/600x600?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g&addlayer={%22id%22:%22road-overlay%22,%22type%22:%22line%22,%22source%22:%22composite%22,%22source-layer%22:%22road%22,%22filter%22:[%22==%22,[%22get%22,%22class%22],%22motorway%22],%22paint%22:{%22line-color%22:%22%23ff0000%22,%22line-width%22:5}}&before_layer=road-label
    //     https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122,37,9/600x600?access_token=pk.eyJ1IjoiamxhbXo5MTYiLCJhIjoiY2tidGt2a25vMGF5MDMybWltNWJraGI0ZCJ9.kIC31SeL5aFQcKdnqFac7g&addlayer={%22id%22:%22road-overlay%22,%22type%22:%22line%22,%22source%22:%22composite%22,%22source-layer%22:%22road%22,%22filter%22:[%22==%22,[%22get%22,%22class%22],%22motorway%22],%22paint%22:{%22line-color%22:%22%23ff0000%22,%22line-width%22:5}}&before_layer=road-label
    //     var query = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/' + long + ',' + lat + ',' + zoom + '/300x200?access_token=' + mapboxgl.accessToken;


    render() {

        const { route } = this.props
        const coords = this.routeData.matchings[0].geometry.coordinates;
        const startLat = coords[0][0];
        const startLong = coords[0][1];
        const endLat = coords[coords.length - 1][0];
        const endLong = coords[coords.length - 1][1];
        const poly = polyline.fromGeoJSON(this.routeData.matchings[0].geometry);
        const imgUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-a+2196f3(" + startLat + "," + startLong + "),pin-l-b+43a25c(" + endLat + "," + endLong + ")" + ",path-10+FF4500-2(" + poly + ")/" + startLat + "," + startLong + ",14,0/auto/800x600@2x?access_token=" + mapboxgl.accessToken;

        return (
                <div className="map-canvas-feed">
                    <Link className="route-card-title" to={`/routes/${route.id}`}><img className="map-static-image" src={imgUrl} /></Link>
                </div>
        )
    }
}

export default RouteFeedItem;