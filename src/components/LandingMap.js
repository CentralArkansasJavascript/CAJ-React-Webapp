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
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5cEnT0NUDTzFQ7BpXAFG3Bb8uZzeRFxI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <img
          src={Logo}
          height="50" width="50"
          lat={34.756725}
          lng={-92.266254}
          text={'Arkansas Regional Innovation Hub'}
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default LandingMap;
