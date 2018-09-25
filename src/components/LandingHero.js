import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class AppHeader extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to Central Arkansas JavaScript!</h1>
        <p>
          We are a small group of enthusiasts meeting every second Tuesday of the month at 6:30pm,
          at the Faulkner County Library in Conway, AR.
          Come join us and share what you’re working on, or just chat and meet other JavaScript enthusiasts!
          Each month will feature a speaker or lab or a combination of both!
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default AppHeader;
