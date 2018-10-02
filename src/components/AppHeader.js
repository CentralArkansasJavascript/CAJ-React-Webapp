import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

class AppHeader extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Central Arkansas JavaScript</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/">
                <NavItem>Ask Us!</NavItem>
              </LinkContainer>
              <LinkContainer to="/">
                <NavItem>Resources</NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem>Events</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;
