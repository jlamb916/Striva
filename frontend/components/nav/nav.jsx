import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {


    sessionLinks () {
        return (
            <div className = "nav" >
                <header className="nav-header">
                    <nav className="nav-header-nav">
                        <div className="nav-header-logo">
                            <a href="#">Welcome To Strava!</a>
                        </div>
                        <div className="session-links">
                            <Link to='/login'>Log In</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }

    greetUser () {
        return (
            <div className="greet-user">
                <h1>Welcome {this.props.currentUser.username}</h1>
                <button className="logout" onClick={this.props.signout}>Log Out</button>
            </div>
        )
    }

    render () {
        return this.props.currentUser ? this.greetUser() : this.sessionLinks();
    }
}

export default Nav;