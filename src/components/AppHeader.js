import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class AppHeader extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Central Arkansas JavaScript</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Ask Us!
            </NavItem>
            <NavItem eventKey={2} href="#">
              Resources
            </NavItem>
            <NavItem eventKey={3} href="#">
              Events
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppHeader;
