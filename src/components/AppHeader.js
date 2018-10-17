import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
   } from 'reactstrap';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Central Arkansas JavaScript</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/AskUs">Ask Us!</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Events">Coming Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/PastEvents">Past Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Resources">Resources</NavLink>
              </NavItem>
              <a href="https://www.facebook.com/CentralArkansasJavaScript" className="fa fa-facebook" target='blank'></a>
              <a href="https://www.meetup.com/javascript-conway/" className="fa fa-meetup" target='blank'></a>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;
