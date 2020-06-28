import React from 'react';
import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';
import FeedContainer from './feed_container';

const Dashboard = (props) => {
    //example
    return (
        <div className="dashboard-container">
            <div className="dash-container-left">
                <h1> welcome {props.currentUser.username} </h1>
            </div>
            <div className="dash-container-mid">
                <FeedContainer />
            </div>
            <div className="dash-container-right"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signout()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);