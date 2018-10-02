import React, { Component } from "react";
import '../App.css';
import AppHeader from '../components/AppHeader';
import LandingCarousel from '../components/LandingCarousel';
import LandingHero from '../components/LandingHero';
import MapHero from '../components/MapHero';
import LandingMap from '../components/LandingMap';
import AppFooter from '../components/AppFooter';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AppHeader/>
        <LandingHero/>
        <LandingCarousel/>
        <MapHero/>
        <LandingMap/>
        <AppFooter/>
      </div>
    );
  }
}
