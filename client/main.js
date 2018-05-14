import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";

import MyGuyNeilHome from "../import/ui/components/app/MyGuyNeilHome";
import styles from "./main.css";

class MyGuyNeil extends Component {
  render() {
    return
    <div>
      <h1>My Guy Neil</h1>
      <MyGuyNeilHome title="My Guy Neil" />
    </div>
  }
}

// const MyGuyNeil = withTracker(() => {
//   return {
//     MyGuyNeilHome
//   };
// })(TodoListApp);

Meteor.startup(() => {
  ReactDOM.render(<MyGuyNeil />, document.getElementById('app'));
});
