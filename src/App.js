import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import LandingCarousel from './components/LandingCarousel';
import LandingHero from './components/LandingHero';
import LandingMap from './components/LandingMap';
import AppFooter from './components/AppFooter';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAOAHjXa7eB3Dt5x6W8VrvBbCHhtKx4dMw",
  authDomain: "caj-react-app.firebaseapp.com",
  databaseURL: "https://caj-react-app.firebaseio.com",
  projectId: "caj-react-app",
  storageBucket: "caj-react-app.appspot.com",
  messagingSenderId: "360425980835"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
        };
  }
  
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
