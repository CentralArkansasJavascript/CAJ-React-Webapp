import React, { Component } from "react";
import '../App.css';
import EventsList from '../components/EventsList';
import PageTemplate from "../containers/PageTemplate";

export default class Events extends Component {
  render() {
    return (
      <PageTemplate>
      <div className="Events">
        <EventsList/>
      </div>
      </PageTemplate>
    );
  }
}
