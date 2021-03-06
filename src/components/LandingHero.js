import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class AppHeader extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Central Arkansas JavaScript!</h1>
        <hr/>

        <p>
          We are a small group of enthusiasts meeting every first Wednesday of the month at 6:30pm,
          at the Arkansas Regional Innovation Hub in North Little Rock.
          Come join us and share what you’re working on, or just chat and meet other JavaScript enthusiasts!
          Each month will feature a speaker or lab or a combination of both!
        </p>
        <p>
          Join our communities on <a href="https://www.facebook.com/CentralArkansasJavaScript">Facebook</a> and <a href="https://www.meetup.com/javascript-conway/">Meetup</a>!
        </p>
      </Jumbotron>
    );
  }
}

export default AppHeader;
