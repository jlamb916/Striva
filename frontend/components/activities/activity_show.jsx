import React from 'react';
import { NavLink } from 'react-router-dom';
import MapBox from '../map/activity_map';

class ActivityShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.activity === undefined) {
            this.props.fetchActivity(this.props.activityId);
        }
        if (this.props.route === undefined && this.props.activity) {
            this.props.fetchRoute(this.props.activity.route_id);
        }
    }

    render() {
        if (this.props.activity && this.props.route) {
        const {user, activity, route} = this.props
        let date = Date(activity.created_at).split(" ")
        let day = date[0];
        let month = date[1] + " " + date[2] + " " + " " + date[3] 
        return (
            <div className="activity-show-container">
                <div className="activity-show-header">
                    <h2>{user.username} - {activity.sport}</h2>
                </div>
                <div className="activity-show-section">
                    <div className="activity-left">
                        <div className="activity-left-container">
                        <div className="profile-image"></div>
                        <div className="activity-left-info">
                                <div className="stat-label">{day}, {month}</div>
                            <h2>{activity.title}</h2>
                                <NavLink className="activity-edit-index" to={`/activities/${activity.id}/edit`}>Edit</NavLink>
                        </div>
                        </div>
                    </div>
                    <div className="activity-right">
                        <div className="activity-right-info">
                            <div className="activity-top-stats">
                                <div className="flex-child">
                                    <p className="stat-data">{activity.distance}mi</p>
                                    <p className="stat-label">Distance</p>
                                </div>
                                <div className="flex-child">
                                    <p className="stat-data">{activity.duration}</p>
                                    <p className="stat-label" >Moving Time</p>
                                </div>
                            </div>
                            <div className="activity-bottom-stats">
                                <div className="flex-column">
                                <span className="stats elevation">Elevation </span> 
                                <span className="stats">ElapsedTime  </span>
                                </div>
                                <div className="flex-column-right">
                                <span className="stats-right elevation">  {activity.elevation} ft</span>
                                <span className="stats-right">    {activity.duration} min</span>  
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity-show-canvas">
                    <MapBox route={route} />
                </div>

                
            </div>
        )
        } else {
            return ""
        };
    }
}

export default ActivityShow;