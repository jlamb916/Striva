import React from 'react';
import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';


const Dashboard = (props) => {
    //example
    let feedArr = []
    for (let i = 1; i <= 10; i++ ) {
        feedArr.push(<li className="feed" key={`${i}`}>{`feed ${i}`}</li>);
    }

    return (
        <div className="dashboard-container">
            <div className="dash-container-left">
                <h1> welcome {props.currentUser.username} </h1>
            </div>
            <div className="dash-container-mid">
                <div className="feed-container">
                        <ul className="feeds-list">
                            {feedArr}
                        </ul>
                </div>
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