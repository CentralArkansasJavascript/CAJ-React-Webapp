import React, { Component } from "react";
import '../App.css';
import AppFooter from '../components/AppFooter';
import Links from '../components/Links';

export default class Resources extends Component {
  render() {
    return (
      <div className="Resources">
        <Links/>
        <AppFooter/>
      </div>
    );
  }
}
