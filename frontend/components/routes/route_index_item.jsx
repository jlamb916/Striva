import React from 'react';
import { Link } from 'react-router-dom';
import MapBox from '../map/map';

let polyline = require('@mapbox/polyline');

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

    convertTime(timestamp) {
        let hours = Math.floor(timestamp / 60 / 60);
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = Math.floor(timestamp % 60);
        if (hours === 0) {
            hours = "";
        } else {
            hours = hours.toString() + ':'
        }
        let formatted = hours + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        let i = 0;

        return formatted;
    }

    convertDate(timeStr) {
        let splitStr = timeStr.split("T");
        let dates = splitStr[0].split("-")
        let newDate = new Date(dates[0], dates[1], dates[2]);
        let justDate = newDate.toDateString().split(" ")
        justDate.shift();
        return justDate.join(" ")
    }
    
    render () {
        
        const { route } = this.props
        const elevation = 0;
        const miles = (this.routeDistance / 1609).toFixed(2);
        const routeDuration = this.convertTime(this.routeDuration);
        const createdDate = this.convertDate(route.created_at);
        const coords = this.routeData.matchings[0].geometry.coordinates;
        const startLat = coords[0][0];
        const startLong = coords[0][1];
        const endLat = coords[coords.length - 1][0];
        const endLong = coords[coords.length - 1][1];
        const poly = polyline.fromGeoJSON(this.routeData.matchings[0].geometry);
        const imgUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-a+2196f3(" + startLat + "," + startLong + "),pin-l-b+43a25c(" + endLat + "," + endLong + ")" + ",path-10+FF4500-2(" + poly + ")/auto/800x600@2x?access_token=" + mapboxgl.accessToken;
        debugger
        return (
            <div className="route-index-item">
                <div className="map-canvas-route">
                    <Link className="route-card-title" to={`/routes/${route.id}`}><img className="map-static-img" src={imgUrl} /></Link> 
                    
                    {/* <MapBox route={route} /> */}
                </div>
                <div className="route-data">
                    <Link to={`/routes/${route.id}`}><h3 className="route-name">{route.route_name}</h3></Link>
                    
                    <div className="data-flex-index">
                        <ul className="route-moving-time">
                            <li className="stat-data"> {miles}mi </li>
                            <li className="stat-label">Distance </li>
                        </ul>
                        <ul className="route-moving-time">
                            <li className="stat-data" >{elevation}ft</li>
                            <li className="stat-label">Elevation </li>
                        </ul>
                    </div>
                    <div className="moving-time-index">
                        <span className="stat-label">Est. Moving Time </span><span className="stat-data"> {routeDuration}</span>
                    </div>
                    <div > 
                        <p className="route-timestamp">Created On {createdDate}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default RouteIndexItem;