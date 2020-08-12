import React from 'react';
import MapBox from '../map/map';
import { Link } from 'react-router-dom';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        if (this.props.route === undefined) {
            this.props.fetchRoute(this.props.routeId);
        }
    }

    convertTime (timestamp) {
        let hours = Math.floor(timestamp / 60 / 60);
        let minutes = Math.floor(timestamp / 60) - (hours * 60);
        let seconds = Math.floor(timestamp % 60);
        let formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        return formatted;
    }

    convertDate (timeStr) {
        let splitStr = timeStr.split("T");
        let dates = splitStr[0].split("-")
        let newDate = new Date(dates[0], dates[1], dates[2]);
        let justDate = newDate.toDateString().split(" ")
        justDate.shift();
        return justDate.join(" ");
    }

    handleDelete () {
        this.props.deleteRoute(this.props.route.id).then(() => this.props.history.push("/routes"));
    }

    render () {
        const { route } = this.props
        let routeData;
        let routeDuration;
        let routeDistance;
        let movingTime; 
        let miles;
        let createdDate;
        let elevation = 0;
        let runType = "Road";
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
                    <div className="route-date-box">
                        <ul className="route-stat-date">
                            <li className="stat-data"> {createdDate} </li>
                            <li className="stat-label">Created on  </li>
                        </ul>
                        <p className="route-date" ></p>
                    </div>
                    <div className="data-flex">
                    <ul className="route-moving-time">
                        <li className="stat-data"> {miles} </li>
                        <li className="stat-label">Distance </li>
                    </ul>
                    <ul className="route-moving-time">
                        <li className="stat-data" >{movingTime}</li>
                        <li className="stat-label">Est. Moving Time </li>
                    </ul>
                        <ul className="route-moving-time">
                            <li className="stat-data" >{elevation}</li>
                            <li className="stat-label">Elevation </li>
                        </ul>
                        <ul className="route-moving-time">
                            <li className="stat-data" >{runType}</li>
                            <li className="stat-label">Run Type</li>
                        </ul>
                    </div>
                </div>
                <div className="stat-label description-title">Description </div>
                <h1 className="route-description">{route.route_description}</h1>
            </div>) : "";

        { if (route) {
            return (
                <div className="route-main-container">
                    <div>
                        <h5><Link className="my-routes-link" to="/routes">
                            My Routes</Link> / {route.route_name}
                        </h5>
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
                    <div className="route-btns">
                        <button className="route-btn" 
                        onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            )}
            else {
                return ""
            };  
        }
    }
}

export default RouteShow;