import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {


    sessionLinks () {
        return (
            <header className="nav-header">
                <nav className="container nav-content">
                    <div className="nav-header-logo">
                        <a className="striva-logo" href="#">STRIVA</a>
                    </div>
                    <div className="session-links">
                        <Link className="session-link" to='/login'>Log In</Link>
                        <Link className="session-link" to='/signup'>Sign Up</Link>
                    </div>
                </nav>
            </header>
        )
    }

    greetUser () {
        return (
            <header className="nav-header">
                <div className="nav-content">
                    <h1>Welcome {this.props.currentUser.username}</h1>
                    <button className="session-link" onClick={this.props.signout}>Log Out</button>
                </div>
            </header>
        )
    }

    render () {
        return this.props.currentUser ? this.greetUser() : this.sessionLinks();
    }
}

export default Nav;