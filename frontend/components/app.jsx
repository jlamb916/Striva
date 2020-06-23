import React from 'react';
import { Route, Switch, Link, HashRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavContainer from './nav/nav_container';
import Footer from './footer/footer'

import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';


const App = () => {
    return (
        <div>
            {/* nav will dispay differently depending on if user is logged in or not */}
            <NavContainer />
            <Switch>
                {/* <AuthRoute exact path="/" component={Splash} /> */}
                <AuthRoute exact path="/login" component={SigninFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;