import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from './style.js';

class MyGuyNeilHeader extends Component {
  render() {
    return (
      <div style={styles.header}>
        <h1 style={styles.header}>{this.props.title}</h1>
      </div>
    );
  };
}

MyGuyNeilHeader.defaultProps = {
  title: "Test!"
};

MyGuyNeilHeader.propTypes = {
  title: PropTypes.string.isRequired
};
export default MyGuyNeilHeader;