import React from 'react';
import { Link } from 'react-router-dom'
const NewRouteNav = () => {

    return (
        <header className="nav-header">
            <div className="route-nav-content">
                <div className="route-nav-title">
                <a className="striva-logo nav-header-logo extra" href='#'>STRIVA</a>
                <strong className="just-route">Routes</strong>
                </div>
                <div className="nav-back">
                    <Link className="go-back-route" to="/routes">Back to My Routes</Link>
                </div>
            </div>

        </header>
    )
}

export default NewRouteNav;