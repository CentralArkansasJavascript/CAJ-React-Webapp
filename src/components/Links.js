import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardLink, Jumbotron } from 'reactstrap';
import * as firebase from 'firebase';

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

  const db = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  db.settings(settings);

class Links extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    db.collection("links").get().then((linkSnapshot) => {
        linkSnapshot.forEach((link) => {
            let data = link.data();
            data.id = link.id;
            this.setState({ links: this.state.links.concat( data ) });
        });
    });
  }

  render() {
    const { links } = this.state;
      return (
        <Row>
          <Col>
          <Jumbotron>
            <h1>Hungry for more?</h1>
            <hr/>

            <p>
              Below are some helpful resources to guide you on your journey!
            </p>
          </Jumbotron>

          </Col>
        </Row>

      );
  }
}

export default Links;
