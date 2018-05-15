import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

class MyGuyNeilHeader extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.header}>My Guy Neil</h1>
      </div>
    );
  }
}

export default MyGuyNeilHeader;
