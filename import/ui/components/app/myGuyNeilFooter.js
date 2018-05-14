import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from './style.js';

class MyGuyNeilFooter extends Component {
  render() {
    return (
      <div style={style.footer}>
        <h1 style={style.footer}>{this.props.title}</h1>
      </div>
    );
  };
};

export default MyGuyNeilFooter;