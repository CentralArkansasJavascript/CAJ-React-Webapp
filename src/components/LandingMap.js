import React, { Component } from 'react';

class LandingMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%', margin:'auto' }}>
      <iframe title="innovation-hub-map" style={{ height: '75vh', width: '100%', margin:'auto', border:0}} src="https://www.google.com/maps/embed/v1/place?q=Arkansas%20Regional%20Innovation%20Hub%2C%20East%20Broadway%20Street%2C%20North%20Little%20Rock%2C%20AR%2C%20USA&key=AIzaSyAwTLE8hr4J66ZjRA7WVGIKTCW_9nbSarg" allowFullScreen></iframe>
      </div>
    );
  }
}

export default LandingMap;
