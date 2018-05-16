import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
// import { Router, Switch, Link, Redirect, Route } from 'react-router-dom';
import { renderRoutes } from "../import/ui/startup/routes/index.js";

import MyGuyNeilHome from "../import/ui/components/app/MyGuyNeilHome";
import styles from "./main.css";

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById("app"));
});
