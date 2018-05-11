import React, { Component } from 'react';
import Clock from 'react-live-clock';

import style from './style.js';

class MyGuyNeilBody extends Component {
  render() {
    <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
  }
};

export default MyGuyNeilBody;