import React, { Component } from "react";
import '../App.css';
import EventsList from '../components/EventsList';
import AppFooter from '../components/AppFooter';

export default class Events extends Component {
  render() {
    return (
      <div className="Events">
        <EventsList/>
        <AppFooter/>
      </div>
    );
  }
}
