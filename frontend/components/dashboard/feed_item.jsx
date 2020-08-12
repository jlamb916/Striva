import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteFeedItem from './route_feed_item'


class FeedIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const {user, route, activity} = this.props;
        let date = Date(activity.created_at).split(" ")
        let day = date[0];
        let month = date[1] + " " + date[2] + " " + " " + date[3] 
        if (activity) {
        return (
            <div className="feed">
            <div className="feed-header">
                <div className="profile-image-feed"></div>
                <div className="user-data">
                    <div className="user-feed">
                            <p className="feed-username">{user.username}</p>
                    </div>
                        <div className="stat-label-feed">
                            <p>{day}, {month}</p>
                        </div>
                </div>
            </div>
            <div className="feed-activity-info">
                    <div className="feed-icon-container">
                        <span className={`icon ${activity.sport}`}></span>
                    </div>
                    <div >
                    <NavLink to={`/activities/${activity.id}`}><div className='feed-activity-header'><h2>{activity.title}</h2></div></NavLink>
                    <div className="feed-activity-data">
                        <div className='flex-column-feed'>
                            <p className="stat-label-feed" >Distance</p>
                            <p className="stat-data">{activity.distance} mi</p>
                        </div>
                        <div className='flex-column-feed mid-data'>
                            <p className="stat-label-feed " >Elev Gain</p>
                            <p className="stat-data">{activity.elevation} ft</p>
                        </div>
                        <div className='flex-column-feed last-data'>
                            <p className="stat-label-feed" >Time</p>
                            <p className="stat-data">{activity.duration} m</p>
                        </div>
                    </div>
                    </div>
            </div>
                {{route} && <RouteFeedItem key={route.id} route={route} />}
            </div>
        ) }
        else{
            return ""
        }
    }
}

export default FeedIndex;

