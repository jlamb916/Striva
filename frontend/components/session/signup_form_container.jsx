import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, signin } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">Login</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemo: (user) => dispatch(signin(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
