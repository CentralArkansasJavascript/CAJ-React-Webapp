import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import {Collapse, NavItem} from 'reactstrap';
class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (<nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Central Arkansas JavaScript</NavLink>
      <button type="button" onClick={this.toggle} className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
      <Collapse isOpen={this.state.isOpen } className="ml-auto navbar-nav" navbar>
      <NavItem>
        <NavLink className="nav-link" to="/AskUs">Ask Us!</NavLink>
      </NavItem>
      <NavLink className="nav-link" to="/Events">Coming Up</NavLink>
      <NavLink className="nav-link" to="/PastEvents">Past Events</NavLink>
      <NavLink className="nav-link" to="/Resources">Resources</NavLink>
      <a href="https://www.facebook.com/CentralArkansasJavaScript" className="fa fa-facebook" target='blank'><span alt="Facebook"></span></a>
      <a href="https://www.meetup.com/javascript-conway/" className="fa fa-meetup" target='blank'><span alt="Meetup"></span></a>
      </Collapse>
      
    </nav>
      // <nav color="dark" dark expand="md">
      //       </nav>
    );
  }
}

export default AppHeader;
