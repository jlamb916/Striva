import React from 'react';
import { NavLink } from 'react-router-dom';
import ActivityIndexItem from './activity_index_item';

class ActivityIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchActivities();
    }

    render() {
        const allActivities = this.props.activities.reverse().map((activity) => (
            <ActivityIndexItem key={`${activity.id}`} activity={activity} />));
        const activityCount = this.props.activities.length;
        const activityWord = activityCount === 1 ? "Activity" : "Activities"
        return (
            <div className="activity-container">
                <header className="activity-index-header">
                    <div className="activity-index-title-container">
                        <h1 className="activity-index-title">My Activities</h1>
                        <NavLink className="create-activity-link" to='/activities/new'
                            activeClassName="create-activity-link">Create New Activity</NavLink>
                    </div>
                </header>
                <h2 className="activity-count">{activityCount} {activityWord}</h2>
                <div className="activity-index-container">
                    <div className="activity-index-items-container">
                        <table className="activity-index-list">
                            <thead>
                            <tr className='activity-tr'>
                                <th>Sport</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Distance</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            {allActivities}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityIndex;