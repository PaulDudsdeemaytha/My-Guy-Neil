import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { render } from 'react-dom';

import createBrowserHistory from 'history/createBrowserHistory';
//importing items for routes
import Login from '../../containers/Login';
import Register from '../../containers/Login/Register.js';
import MyGuyNeilHome from '../../components/app/MyGuyNeilHome';

// const browserHistory = createBrowserHistory();

let history;

if (typeof document !== 'undefined') {
  const createBrowserHistory = require('history/createBrowserHistory').default;

  history = createBrowserHistory();
}

// export default history

export const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={MyGuyNeilHome} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </Switch>
  </Router>
);

function isLoggedIn() {
  if (User.isLoggedIn()) {
    console.log('is logged in');
  }
}
