import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
//importing items for routes
import Login from "../containers/login";

const Routes = () => (
  <Switch>
    <Route path="/Login" component={Login} />
  </Switch>
);

export default Routes;
