import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from './style.js';

class MyGuyNeilFooter extends Component {
  render() {
    return (
      <div style={styles.footer}>
        <h1 style={styles.footer}>{this.props.title}</h1>
      </div>
    );
  };
};

export default MyGuyNeilFooter;