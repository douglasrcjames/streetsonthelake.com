import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import withTracker from './components/misc/WithTracker';
import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import Registry from './components/pages/Registry';
import Event from './components/pages/Event';
import RSVP from './components/pages/RSVP';
import About from './components/pages/About';
import Dev from './components/pages/Dev';
import Credits from './components/pages/Credits';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={withTracker(Home)} />
                <Route exact path="/event" component={withTracker(Event)} />
                <Route exact path="/rsvp" component={withTracker(RSVP)} />
                <Route exact path="/registry" component={withTracker(Registry)} />
                <Route exact path="/about" component={withTracker(About)} />
                <Route exact path="/credits" component={withTracker(Credits)} />
                <Route exact path="/dev" component={withTracker(Dev)} />
                <Route component={withTracker(Page404)} />
            </Switch>
        )
    }
}

export default withRouter(Routes);