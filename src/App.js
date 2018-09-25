import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import HeroCarousel from './components/HeroCarousel';
import LandingHero from './components/LandingHero';
import LandingMap from './components/LandingMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AppHeader/>
        <LandingHero/>
        <HeroCarousel/>
        <LandingMap/>
      </div>
    );
  }
}

export default App;
