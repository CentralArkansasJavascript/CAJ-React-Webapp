import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.meetup.com/javascript-conway/events?photo-host=public&page=20&sig_id=247671999&sig=21562be4333298a04ed26b54a186d1b224b7ecb1", {
      headers: {
          'Access-Control-Request-Headers': '*'
        }
    })
      .then(res => res.json())
      .then(

        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default EventsList;
