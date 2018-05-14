import React, { Component } from 'react';
import PropTypes from "prop-types";

import MyGuyNeilBody from "./MyGuyNeilBody";
import MyGuyNeilFooter from "./MyGuyNeilFooter";
import MyGuyNeilHeader from "./MyGuyNeilHeader";

import style from './style.js';

class MyGuyNeilHome extends Component {
  render() {
    return (
      <div style={style.home}>
        <h1>Hello</h1>
        <MyGuyNeilHeader />
        <MyGuyNeilBody />
        <MyGuyNeilFooter />
      </div>
    );
  };
};

export default MyGuyNeilHome;