import React from "react";
import { Router, Route, Switch } from "react-router";
import { render } from "react-dom";

import createBrowserHistory from "history/createBrowserHistory";
//importing items for routes
import Login from "../../containers/Login";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route path="/Login" component={Login} />
    </Switch>
  </Router>
);
