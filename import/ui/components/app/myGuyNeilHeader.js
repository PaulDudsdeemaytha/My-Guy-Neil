import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./style.js";

class MyGuyNeilHeader extends Component {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.header}>My Guy Neil</h1>
      </div>
    );
  }
}

// MyGuyNeilHeader.defaultProps = {
//   title: "Test!"
// };

// MyGuyNeilHeader.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default MyGuyNeilHeader;
