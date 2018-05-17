import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

import AccountsUIWrapper from '../../AccountsUIWrapper';

class MyGuyNeilHeader extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.header}>My Guy Neil</h1>
        {/* <img src="./image/TheManHimself.png" /> */}
        <AccountsUIWrapper />
      </div>
    );
  }
}

export default MyGuyNeilHeader;
