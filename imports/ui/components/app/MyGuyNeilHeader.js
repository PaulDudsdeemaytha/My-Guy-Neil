import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

import AccountsUIWrapper from '../../AccountsUIWrapper';
// import App from '../../App.js';
// import Task from '../../Task.js';

class MyGuyNeilHeader extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.header}>My Guy Neil</h1>
        <AccountsUIWrapper />
        {/* <App />
        <Task /> */}
      </div>
    );
  }
}

export default MyGuyNeilHeader;
