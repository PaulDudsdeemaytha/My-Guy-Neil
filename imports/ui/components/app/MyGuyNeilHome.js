import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./style";
import App from "../todo/App.js";

import MyGuyNeilBody from "./MyGuyNeilBody";
import MyGuyNeilFooter from "./MyGuyNeilFooter";
import MyGuyNeilHeader from "./MyGuyNeilHeader.js";
import AccountsUIWrapper from "../../AccountsUIWrapper.js";

import Request from "superagent";

class MyGuyNeilHome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={style.home}>
        {/* <AccountsUIWrapper /> */}
        <MyGuyNeilHeader />
        <MyGuyNeilBody />
        <MyGuyNeilFooter />
        <App />
      </div>
    );
  }
}

export default MyGuyNeilHome;
