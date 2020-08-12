import React from 'react';
import FeedIndexContainer from './feed_index_container';

class Feed extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllRoutes();
        this.props.fetchActivities();
    }

    render () {
        const allActivities = this.props.activities.map((activity) => {
            return (
                <FeedIndexContainer key={activity.id} activity={activity} />
            )
        })
        
        return (
            <div className="feeds-container">
                <ul>
                    {allActivities ? allActivities : ""}
                </ul>
            </div>
        )
    }
}

export default Feed;
