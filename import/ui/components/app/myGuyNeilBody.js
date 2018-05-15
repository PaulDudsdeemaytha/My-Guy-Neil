import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

import Clock from 'react-live-clock';

class MyGuyNeilBody extends React.Component {
  render() {
    return (
      <div style={style.body}>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
      </div>
    );
  }
}

export default MyGuyNeilBody;
