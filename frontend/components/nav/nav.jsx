import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

    render () {
        return (
            <div className="nav">
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
                <main className="nav-main">
                    <header className="nav-main-header">

                    </header>
                    <section className="nav-main-content">

                    </section>
                </main>
            </div>
        )
    }
}

export default Nav;