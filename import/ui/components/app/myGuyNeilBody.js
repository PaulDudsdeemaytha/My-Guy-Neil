import React, { Component } from 'react';
import PropTypes from "prop-types";
import Clock from 'react-live-clock';

import style from './style.js';

class MyGuyNeilBody extends Component {
  render() {
    return (
      <div style={style.body}>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
        {/* <Link to={`/users/${user.name}`}>
          What's up, {user.name}?
        </Link> */}
      </div>
    );
  };
};

export default MyGuyNeilBody;