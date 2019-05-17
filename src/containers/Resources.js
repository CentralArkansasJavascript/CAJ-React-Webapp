import React, { Component } from "react";
import '../App.css';
import Links from '../components/Links';
import PageTemplate from "../containers/PageTemplate";

export default class Resources extends Component {
  render() {
    return (
      <PageTemplate>
      <div className="Resources">
        <Links/>
      </div></PageTemplate>
    );
  }
}
