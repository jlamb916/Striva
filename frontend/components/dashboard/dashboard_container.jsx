import React from 'react';
import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import FeedContainer from './feed_container';
import UserProfile from './user_profile';
import { fetchAllRoutes } from '../../actions/route_actions';
import { fetchActivities } from '../../actions/activity_actions';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllRoutes();
        this.props.fetchActivities();
    }
    
    //example
    render() {
        const user = this.props.currentUser;
        
        return (
            <div className="dashboard-container">
                <div className="dash-container-left">
                    <UserProfile user={user} activities={this.props.activities} routes={this.props.routes}/>
                </div>
                <div className="dash-container-mid">
                    <FeedContainer />
                </div>
                <div className="dash-container-right">
                    <div className="links-container">
                        <div className="link">
                            <div className="github-image-feed"></div>
                            <div className='link1'>
                                <div className="link-title">Github</div>
                                <a target="_target" href="https://github.com/jlamb916/Striva">View my Github</a>
                            </div>
                        </div>
                        <div className="link">
                            <div className="linkedin-image-feed"></div>
                            <div className='link1'>
                                <div className="link-title">LinkedIn</div>
                                <div><a target="_target" href="https://linkedin.com/in/johnlam916">View my LinkedIn</a></div>
                            </div>
                        </div>
                        <div className="link">
                            <div className="angel-image-feed"></div>
                            <div className='link1'>
                                <div className="link-title">AngelList</div>
                                <div ><a target="_target" href="https://angel.co/u/john-lam-17">View my AngelList</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let routeArr = Object.values(state.entities.routes);
    let activitiesArr = Object.values(state.entities.activities);
    return {
        currentUser: state.entities.users[state.session.id],
        routes: routeArr,
        activities: activitiesArr
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signout()),
        fetchAllRoutes: () => dispatch(fetchAllRoutes()),
        fetchActivities: () => dispatch(fetchActivities()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);