import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";


class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
        };
  }

  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;
