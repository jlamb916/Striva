import React from 'react';
import { connect } from 'react-redux';
import { signout, signin } from '../../actions/session_actions';


const Dashboard = (props) => {
    return (
        <div>
           <h1> welcome {props.currentUser.username} </h1>
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