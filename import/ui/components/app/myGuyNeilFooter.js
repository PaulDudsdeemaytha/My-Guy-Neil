import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

import { geolocated } from 'react-geolocated';

class MyGuyNeilFooter extends React.Component {
  //   render() {
  //     return (
  //       <div style={style.footer}>
  //         <h1 style={style.footer}>My Guy Neil</h1>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.props.coords.longitude}</td>
          </tr>
          {/* <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr> */}
        </tbody>
      </table>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(MyGuyNeilFooter);

// export default MyGuyNeilFooter;
