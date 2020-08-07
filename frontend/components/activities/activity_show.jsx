import React from 'react';
import { NavLink } from 'react-router-dom';

class ActivityShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.activity === undefined) {
            this.props.fetchActivity(this.props.activityId);
        }
        if (this.props.route === undefined && this.props.activity) {
            this.props.fetchroute(this.props.activity.route_id);
        }
    }

    render() {
        if (this.props.activity) {
        const {user, activity} = this.props
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
                                <h3>{day}, {month}</h3>
                            <h3>{activity.title}</h3>
                            <h3>button</h3>

                        </div>
                        </div>
                    </div>
                    <div className="activity-right">

                    </div>

                </div>
                
            </div>
        )
        } else {
            return ""
        };
    }
}

export default ActivityShow;