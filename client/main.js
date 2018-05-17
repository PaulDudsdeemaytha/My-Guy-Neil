import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
// import { Router, Switch, Link, Redirect, Route } from 'react-router-dom';
import { renderRoutes } from '../imports/startup/routes/index.js';

import '../imports/startup/accounts-config.js';
import MyGuyNeilHome from '../imports/ui/components/app/MyGuyNeilHome';
import styles from './main.css';

import '../imports/startup/accounts-config.js';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
