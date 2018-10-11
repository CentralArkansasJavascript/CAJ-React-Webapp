import React, { Component } from "react";
import '../App.css';
import PastEventsList from '../components/PastEventsList';
import AppFooter from '../components/AppFooter';

export default class Home extends Component {
  render() {
    return (
      <div className="PastEvents">
        <PastEventsList/>
        <AppFooter/>
      </div>
    );
  }
}
