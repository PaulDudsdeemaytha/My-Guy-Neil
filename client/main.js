import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import styles from "./main.css";

import "./main.html";

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById("app"));
});
