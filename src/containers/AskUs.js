import React, { Component } from "react";
import '../App.css';
import Discussions from '../components/Discussions';
import AppFooter from '../components/AppFooter';

export default class AskUs extends Component {
  render() {
    return (
      <div className="AskUs">
        <Discussions/>
        <AppFooter/>
      </div>
    );
  }
}
