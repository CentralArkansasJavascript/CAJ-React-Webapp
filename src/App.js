import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import LandingCarousel from './components/LandingCarousel';
import LandingHero from './components/LandingHero';
import LandingMap from './components/LandingMap';
import AppFooter from './components/AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AppHeader/>
        <LandingHero/>
        <LandingCarousel/>
        <LandingMap/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
