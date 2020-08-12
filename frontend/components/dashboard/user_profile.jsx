import React from 'react';
import {NavLink} from 'react-router-dom';
//get user followers and followings
class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render () {
        const {user, activities, routes} = this.props
        const activitiesCount = activities.length;
        let lastActivity;
        let date = "";
        let day = "";
        let month = "";
        if (activitiesCount > 0) {
            lastActivity = activities[activities.length - 1];
            date = Date(lastActivity.created_at).split(" ")
            day = date[0];
            month = date[1] + " " + date[2] + " " + " " + date[3] 
        } 
        let activityRender = "";
        if (lastActivity) {
            activityRender = <div className='lastest-activity'>
                <p className="latest-activity-title">Latest Activity</p>
                <NavLink className="profile-acitivity-link" to={`/activities/${lastActivity.id}`}>  <p><span className="run-type">Morning Run ·</span> {day}, {month}</p></NavLink>
            </div>

        }
        const routesCount = routes.length;
        return (
            <div className="profile-container">
                <div className="user-profile-card">
                    <div className="profile-img">
                    </div>
                    <h2 className="dash-username"> {user.username}</h2>
                </div>
                <div className="profile-stats">
                    <div className="profile-activity-data">
                        <NavLink to={'/routes'}><div className='profile-column-feed profile-right'>
                            <p className="stat-label-feed" >Routes</p>
                            <p className="stat-data">{routesCount}</p>
                        </div></NavLink>

                        <NavLink to={'/activities'}>  <div className='profile-column-feed'>
                            <p className="stat-label-feed" >Activities</p>
        <p className="stat-data">{activitiesCount}</p>
                        </div></NavLink>
                    </div>
                </div>
                {activityRender}
                <div className="recent-activities">
                    <NavLink className="profile-acitivity-link" to={`/activities`}><p className='training-log'>Your Training Log</p></NavLink>
                </div>
            </div>
            
        )
    }
}

export default UserProfile;