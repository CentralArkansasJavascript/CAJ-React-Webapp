import React, { Component } from "react";
import '../App.css';
import LandingCarousel from '../components/LandingCarousel';
import LandingHero from '../components/LandingHero';
import MapHero from '../components/MapHero';
import LandingMap from '../components/LandingMap';
import PageTemplate from "../containers/PageTemplate";
export default class Home extends Component {
  render() {
    return (
      <PageTemplate>
        <div className="Home">
          <LandingHero/>
          <LandingCarousel/>
          <MapHero/>
          <LandingMap/>
        </div>
      </PageTemplate>
    );
  }
}
