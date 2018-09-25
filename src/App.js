import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import HeroCarousel from './components/HeroCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <AppHeader/>
        <HeroCarousel/>
        <p className="App-intro">
          Welcome to Central Arkansas JavaScript!
        </p>
      </div>
    );
  }
}

export default App;
