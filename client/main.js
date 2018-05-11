// import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";

import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import MyGuyNeilHome from "../import/ui/components/app/MyGuyNeilHome";
import styles from "./main.css";

// import "./main.html";

class MyGuyNeil extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

// const MyGuyNeil = withTracker(() => {
//   return {
//     MyGuyNeilHome
//   };
// })(TodoListApp);

Meteor.startup(() => {
  ReactDOM.render(<MyGuyNeil />, document.getElementById("app"));
  console.log("hello");
});
