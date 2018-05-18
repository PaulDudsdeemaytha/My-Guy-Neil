import React from "react";
import { Router, Route, Switch } from "react-router";
import { render } from "react-dom";

import createBrowserHistory from "history/createBrowserHistory";
//importing items for routes
import Login from "../../ui/containers/Login/index.js";
import Register from "../../ui/containers/Login/Register.js";
import App from "../../ui/components/todo/App.js";
import MyGuyNeilHome from "../../ui/components/app/MyGuyNeilHome.js";

// const browserHistory = createBrowserHistory();

let history;

if (typeof document !== "undefined") {
  const createBrowserHistory = require("history/createBrowserHistory").default;

  history = createBrowserHistory();
}

// export default history

export const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={MyGuyNeilHome} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/ToDo" component={App} />
    </Switch>
  </Router>
);

function isLoggedIn() {
  if (User.isLoggedIn()) {
    console.log("is logged in");
  }
}
