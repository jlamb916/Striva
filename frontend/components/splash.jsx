import React from 'react';
import { signin } from '../actions/session_actions';

const Splash = () => {

    const processDemo = (user) => dispatch(signin(user))

    const demoUserLogin = () => {
        const demoUser = {
            username: "demo",
            password: "password"
        }
        processDemo(demoUser);
    }

    return (
        <div className="content container">
            <h2 className="center-header">IF YOU AINT FIRST YOUR LAST</h2>
            <div className="main-content container">
                <div className="splash-pic">
                    <p>splash pic</p>
                </div>
                <div className="buttons">
                    <p>buttons</p>
                    <button className="session-submit demo" onClick={demoUserLogin}>Try Demo</button>
                </div>
            </div>
        </div>
    )
}

export default Splash;