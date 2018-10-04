import React, { Component } from 'react';
import { Card, CardDeck, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, CardLink } from 'reactstrap';

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
    fetch("https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=javascript-conway&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=247671999&sig=aec60eed8953f85b904dfa63177e13b8ff5f32f1", {
      headers: {
          'Access-Control-Request-Headers': '*'
        }
    })
      .then(res => res.json())
      .then(

        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
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
        <CardDeck>
          { items.map(item => (
            <Card>
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardSubtitle>Coming up on {item.time}</CardSubtitle>
              </CardBody>
              <CardImg src={item.photo_url} alt={item.name} />
              <CardBody>
                <CardText>{item.description}</CardText>
                <CardLink href={item.link}>Check it out on Meetup!</CardLink>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      );
    }
  }
}

export default EventsList;
