// import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import myGuyNeilHeader from "../import/ui/components/app/myGuyNeilHeader";
import styles from "./main.css";

// import "./main.html";

class MyGuyNeilApp extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

// const MyGuyNeil = withTracker(() => {
//   return {
//     MyGuyNeilApp
//   };
// })(TodoListApp);

Meteor.startup(() => {
  ReactDOM.render(<MyGuyNeilApp />, document.getElementById("app"));
  console.log("hello");
});
