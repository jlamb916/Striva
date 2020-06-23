import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render () {
        return (
            <div className="splash">
                <header className="splash-header">
                    <nav className="splash-header-nav">
                        <div className="splash-header-logo">
                            <a href="#">Welcome To Strava!</a>
                        </div>
                        <div className="session-links">
                            <Link to='/login'>Log In</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </nav>
                </header>
                <main className="splash-main">
                    <header className="splash-main-header">

                    </header>
                    <section className="splash-main-content">

                    </section>
                </main>
                <footer className="splash-footer">
                    <h2>footer</h2>
                </footer>
            </div>
        )
    }
}

export default Splash;