import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class AppHeader extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Central Arkansas JavaScript!</h1>
        <p>
          We are a small group of enthusiasts meeting every second Tuesday of the month at 6:30pm,
          at the Arkansas Regional Innovation Hub in North Little Rock.
          Come join us and share what you’re working on, or just chat and meet other JavaScript enthusiasts!
          Each month will feature a speaker or lab or a combination of both!
        </p>
        <p>
          <div>Join our communities on Facebook
          <a href="https://www.facebook.com/CentralArkansasJavaScript" className="fa fa-facebook"></a>
           and Meetup
          <a href="https://www.meetup.com/javascript-conway/" className="fa fa-meetup"></a>
          </div>
        </p>
      </Jumbotron>
    );
  }
}

export default AppHeader;
