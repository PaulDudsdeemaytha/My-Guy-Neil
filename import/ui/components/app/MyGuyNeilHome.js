import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./style";

import MyGuyNeilBody from "./MyGuyNeilBody";
import MyGuyNeilFooter from "./MyGuyNeilFooter";
import MyGuyNeilHeader from "./MyGuyNeilHeader.js";

import Request from "superagent";

class MyGuyNeilHome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={style.home}>
        <MyGuyNeilHeader />
        <MyGuyNeilBody />
        <MyGuyNeilFooter />
      </div>
    );
  }
}

export default MyGuyNeilHome;
