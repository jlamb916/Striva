import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
    const sessionLinks = () => (
        <nav className="session-links">
            <h1>Please Sign in or Sign Up!</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log in</Link>
        </nav>
    );

    const greetUser = () => (
        <div className="greet-user">
            <h1>Welcome {props.currentUser.username}</h1>
            <button className="logout" onClick={props.logout}>Log Out</button>
        </div>
    )
    return props.currentUser ? greetUser() : sessionLinks();
};

export default Greeting