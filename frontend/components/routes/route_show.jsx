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
        if (this.props.route) {
            this.props.fetchUser
        }
    }

    convertTime (timestamp) {
        let hours = Math.floor(timestamp / 60 / 60);
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = Math.floor(timestamp % 60);
        let formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formatted
    }

    convertDate (timeStr) {
        let splitStr = timeStr.split("T");
        let dates = splitStr[0].split("-")
        let newDate = new Date(dates[0], dates[1], dates[2]);
        let justDate = newDate.toDateString().split(" ")
        justDate.shift();
        return justDate.join(" ")

    }

    render () {
        const { route } = this.props
        
        let routeData;
        let routeDuration;
        let routeDistance;
        let movingTime; 
        let miles;
        let createdDate;
        if (route) {
            routeData = JSON.parse(route.route_data);
            routeDuration = routeData.matchings[0].duration;
            routeDistance = routeData.matchings[0].distance;
            miles = (routeDistance / 1609).toFixed(2);
            movingTime = this.convertTime(routeDuration);
            createdDate = this.convertDate(route.created_at)
        }
        let renderData;
        renderData = routeData ?
             (<div className="route-show-data">
                <div className="user-info">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <ul>
                    <li>
                        Distance: {miles} mi
                    </li>
                </ul>
                <div className="route-moving-time">
                    Est. Moving Time {movingTime}
                </div>
                <div className="route-timestamp">
                    <p>{createdDate}</p>
                </div>
                <h3 className="route-name">{route.route_name}</h3>
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