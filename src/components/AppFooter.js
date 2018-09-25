import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class AppFooter extends Component {
  render() {
    return (
      <StickyFooter
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#999999",
          padding: "2rem"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
          }}
      >
          Central Arkansas JavaScript Footer Placeholder
      </StickyFooter>
    );
  }
}

export default AppFooter;
