import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Logo from '../assets/logo.jpeg'

class LandingMap extends Component {
  static defaultProps = {
    center: {
      lat: 34.756,
      lng: -92.266
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%', margin:'auto' }}>
      <iframe style={{ height: '75vh', width: '100%', margin:'auto'}} src="https://www.google.com/maps/embed/v1/place?q=Arkansas%20Regional%20Innovation%20Hub%2C%20East%20Broadway%20Street%2C%20North%20Little%20Rock%2C%20AR%2C%20USA&key=AIzaSyAwTLE8hr4J66ZjRA7WVGIKTCW_9nbSarg" allowfullscreen></iframe>
      </div>
    );
  }
}

export default LandingMap;
