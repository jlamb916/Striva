import React from 'react';
import { Route, Switch, Link, withRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavContainer from './nav/nav_container';
import DashboardContainer from './dashboard/dashboard_container';
import Footer from './footer/footer';

import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';
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



const App = () => {
    return (
        <div>
            {/* nav will dispay differently depending on if user is logged in or not */}
            <NavContainer />
            {/* <Route exact path="/" component={Spash} /> */}
            
            <Switch>
                <AuthRoute exact path="/login" component={SigninFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
            </Switch>
            
            {   (location.hash === '#/login' ||
                location.hash === '#/signup' ||
                location.hash === '#/') ? <Footer /> : "" }
        </div>
    )
}
export default withRouter(App);