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
              <a href="https://www.facebook.com/CentralArkansasJavaScript" className="fa fa-facebook"></a>
              <a href="https://www.meetup.com/javascript-conway/" className="fa fa-meetup"></a>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppHeader;
