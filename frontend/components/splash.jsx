import React from 'react';
import { signin } from '../actions/session_actions';
import { Link } from 'react-router-dom';
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
        <div className="splash-main">
            <h1 className="splash-title">Take your fitness to the next level</h1>
            <div className="splash-containers container">
                <div className="splash-img-container">
                    <img className="splash-img" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header@2x-5e0be9810fb0366d567d4d53f19c61b4d7bf4275c5b13356456efc4b5e16fc67.jpg"/>
                </div>
                <div className="splash-right-container">
                    <div className="splash-buttons">
                        
                        
                        <Link to="/login"><button className="splash-login"  >Log In</button></Link>
                        <Link to="/signup"><button className="splash-login" >Sign Up</button></Link>

                        <span className="or-divider"> <span className="or-text">or</span></span>
                        <button className="splash-demo" onClick={demoUserLogin}>Try Demo</button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;