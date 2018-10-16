import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardLink, Jumbotron } from 'reactstrap';

  // Initialize Firebase, I might not use it :)
  var config = {
    apiKey: "AIzaSyAOAHjXa7eB3Dt5x6W8VrvBbCHhtKx4dMw",
    authDomain: "caj-react-app.firebaseapp.com",
    databaseURL: "https://caj-react-app.firebaseio.com",
    projectId: "caj-react-app",
    storageBucket: "caj-react-app.appspot.com",
    messagingSenderId: "360425980835"
  };
  firebase.initializeApp(config);

class Links extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

  }

  render() {
    const { } = this.state;
      return (
        <Row>
          <Col>
          <Jumbotron>
            <h1>Join us at our next meetup!</h1>
            <hr/>

            <p>
              Each month will feature a speaker or lab or a combination of both!
            </p>
          </Jumbotron>
          { meetups.map(meetup => (
            <Card key={meetup.id}>
              <CardBody>
                <CardTitle>{meetup.name}</CardTitle>
                <CardSubtitle>Coming up on {this.convertDate(meetup.time)}</CardSubtitle>
              </CardBody>
              <iframe title="innovation-hub-map" style={{ height: '100%', width: '100%', border:0}} src="https://www.google.com/maps/embed/v1/place?q=Arkansas%20Regional%20Innovation%20Hub%2C%20East%20Broadway%20Street%2C%20North%20Little%20Rock%2C%20AR%2C%20USA&key=AIzaSyAwTLE8hr4J66ZjRA7WVGIKTCW_9nbSarg" allowFullScreen></iframe>
              <CardBody>
                <CardText dangerouslySetInnerHTML={{__html: meetup.description}}></CardText>
                <CardLink href={meetup.event_url} target="blank">Learn more about this event and RSVP on Meetup!</CardLink>
              </CardBody>
            </Card>
          ))}
          </Col>
        </Row>

      );
  }
}

export default Links;
