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
      <div style={style.footer}>Geolocation is not supported.</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div style={style.footer}>Geolocation is not enabled.</div>
    ) : this.props.coords ? (
      <table style={style.footer}>
        <tbody>
          <tr>
            <td>Latitude: </td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>Longitude: </td>
            <td>{this.props.coords.longitude}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div style={style.footer}>Retrieving location data...&hellip;</div>
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
