import React, { Component } from "react";
import '../App.css';
import PastEventsList from '../components/PastEventsList';
import PageTemplate from "../containers/PageTemplate";

export default class PastEvents extends Component {
  render() {
    return (
      <PageTemplate>
      <div className="PastEvents">
        <PastEventsList/>
      </div></PageTemplate>
    );
  }
}
