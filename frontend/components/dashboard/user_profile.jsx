import React from 'react';

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
                    <h2 className="dash-username">{user.username}</h2>
                </div>
                <div className="profile-stats">
                    {/* <ul>
                        <li>Following</li>
                        <li>0</li>
                    </ul>
                    <ul>
                        <li>Follwers</li>
                        <li>0</li>
                    </ul>
                    <ul>
                        <li>Activities</li>
                        <li>0</li>
                    </ul> */}
                </div>
            </div>
            
        )
    }
}

export default UserProfile;