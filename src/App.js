import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import AppHeader from './components/AppHeader';

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
