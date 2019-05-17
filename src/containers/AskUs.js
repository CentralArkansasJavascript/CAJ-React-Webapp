import React, { Component } from "react";
import '../App.css';
import Discussions from '../components/Discussions';
import PageTemplate from "../containers/PageTemplate";

export default class AskUs extends Component {
  render() {
    return (
      <PageTemplate>
      <div className="AskUs">
        <Discussions/>
      </div></PageTemplate>
    );
  }
}
