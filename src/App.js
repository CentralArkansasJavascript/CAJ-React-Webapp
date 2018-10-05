import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Routes from "./Routes";
import AppHeader from './components/AppHeader';

// Initialize Firebase, I might not use it :)
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
        <AppHeader/>
        <Routes/>
      </div>
    );
  }
}

export default App;
