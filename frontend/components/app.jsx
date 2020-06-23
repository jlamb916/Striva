import React from 'react';
import { Route, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import SignupFormContainer from './session/signin_form_container';
import SigninFormContainer from './session/login_form_container';

const App = () => {
    return (
        <div>
            <Splash/>
            <Switch>
                <AuthRoute exact path="/login" component={SignupFormContainer} />
                <AuthRoute exact path="/signup" component={SigninFormContainer} />
            </Switch>
        </div>
    )
}

export default App;