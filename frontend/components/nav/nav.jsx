import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {


    sessionLinks () {
        return (
            <header className="nav-header">
                <nav className="container">
                    <div className="nav-header-logo">
                        <a className="striva-logo" href="#">STRIVA</a>
                    </div>
                    <div className="session-links">
                        <NavLink className="session-link" to='/login' 
                        activeClassName="active-link">Log In</NavLink>
                        <NavLink className="session-link" to='/signup'
                        activeClassName="active-link">Sign Up</NavLink>
                    </div>
                </nav>
            </header>
        )
    }

greetUser() {

        return (
            <header className="nav-header">
                <div className="nav-content">
                    <div className="nav-left">
                        <a className="striva-logo nav-header-logo" href='#'>STRIVA</a>
                        <div className="nav-bar-main">
                            <ul className="nav-bar-list"> 
                                <li className="top-bar"><NavLink to="/dashboard" activeClassName="nav-link-active">Dashboard<strong className="downarrow">⌄</strong></NavLink>
                                    <ul className="dashboard-list-hide">
                                        <li><NavLink activeClassName="nav-link-active-bold" className="nav-link" to="/dashboard">Activity Feed</NavLink></li>
                                        <li><NavLink activeClassName="nav-link-active-bold" to="/routes">My Routes</NavLink></li>
                                    </ul>
                                </li>
                                <li className="top-bar"><NavLink className="nav-link" activeClassName="nav-link-active" to="/activities">Activities<strong className="downarrow">⌄</strong></NavLink>
                                    <ul className="dashboard-list-hide">
                                        <li><NavLink to="/activies" activeClassName="nav-link-active-bold">My Activities</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
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