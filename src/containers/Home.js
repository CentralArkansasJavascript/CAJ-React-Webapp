import React, { Component } from "react";
import '../App.css';
import LandingCarousel from '../components/LandingCarousel';
import LandingHero from '../components/LandingHero';
import MapHero from '../components/MapHero';
import LandingMap from '../components/LandingMap';
import AppFooter from '../components/AppFooter';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <LandingHero/>
        <LandingCarousel/>
        <MapHero/>
        <LandingMap/>
        <AppFooter/>
      </div>
    );
  }
}
