import React from 'react';
import {NavLink} from 'react-router-dom';
//get user followers and followings
class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render () {
        const user = this.props.user
        return (
            <div className="profile-container">
                <div className="user-profile-card">
                    <div className="profile-img">
                    </div>
                    <h2 className="dash-username"> {user.username}</h2>
                </div>
                <div className="profile-stats">
                    <div className="profile-activity-data">
                        <div className='profile-column-feed profile-right'>
                            <p className="stat-label-feed" >Routes</p>
                            <p className="stat-data">0</p>
                        </div>

                        <div className='profile-column-feed'>
                            <p className="stat-label-feed" >Activities</p>
                            <p className="stat-data">0</p>
                        </div>
                    </div>
                </div>
                <div className='lastest-activity'>
                    <p className="latest-activity-title">Latest Activity</p>
                    <NavLink className="profile-acitivity-link"to={`/activity/`}>  <p><span className="run-type">Morning Run ·</span> activity</p></NavLink>
                </div>
                <div className="recent-activities">
                    <NavLink className="profile-acitivity-link" to={`/activity/`}><p className='training-log'>Your Training Log</p></NavLink>
                </div>
            </div>
            
        )
    }
}

export default UserProfile;