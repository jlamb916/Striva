import React from 'react';
import { Route, Switch, Link, withRouter} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NewRouteNav from './nav/route_nav'
import NavContainer from './nav/nav_container';
import DashboardContainer from './dashboard/dashboard_container';
import RoutesIndexContainer from './routes/routes_index_container';
import RouteShowContainer from './routes/route_show_container';
import RouteNewFormContainer from './routes/route_new_form_container';

import ActivitiesIndexContainer from './activities/actvities_index_container';
import ActivitiesNewContainer from './activities/activities_new_container';
import ActivitiesEditContainer from './activities/activities_edit_container';
import ActivityShowContainer from './activities/activity_show_container';


import Footer from './footer/footer';
import Splash from './splash';

import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';

const App = () => {
    return (
        <div>
            <Switch>
                <ProtectedRoute exact path="/routes/new" component={NewRouteNav}/> 
                <NavContainer />
            </Switch>
            
            <Switch>
                <AuthRoute exact path="/login" component={SigninFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
                <ProtectedRoute exact path="/routes/new" component={RouteNewFormContainer} />
                <ProtectedRoute exact path="/routes" component={RoutesIndexContainer} />
                <ProtectedRoute exact path="/routes/:routeId" component={RouteShowContainer} />
                <ProtectedRoute exact path="/activities" component={ActivitiesIndexContainer} />
                <ProtectedRoute exact path="/activities/new" component={ActivitiesNewContainer} />
                <ProtectedRoute exact path="/activities/:activityId" component={ActivityShowContainer} />
                <ProtectedRoute exact path="/activities/:activitiesId/edit" component={ActivitiesEditContainer} />


            </Switch>
            {   (location.hash !== '#/dashboard') ? <Footer /> : "" }
        </div>
    )
}
export default withRouter(App);