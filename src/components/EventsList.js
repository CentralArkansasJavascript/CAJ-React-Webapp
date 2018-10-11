import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, CardLink } from 'reactstrap';
import fetchJsonp from 'fetch-jsonp';

class EventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      meetups: [],
      videos: []
    };
  }
  componentDidMount() {
    fetchJsonp("https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=javascript-conway&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&sig_id=247671999&sig=aec60eed8953f85b904dfa63177e13b8ff5f32f1")
      .then(res => res.json())
      .then(

        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            meetups: result.results
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
      fetchJsonp("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCs-FJXcXjQJvH69SrdobJ8g&maxResults=25&key=AIzaSyB5cEnT0NUDTzFQ7BpXAFG3Bb8uZzeRFxI")
        .then(res => res.json())
        .then(

          (videos) => {
            console.log(videos);
            this.setState({
              isLoaded: true,
              videos: videos.items
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

  convertDate (unixDate){
    // Convert milliseconds since since 00:00:00 UTC, Thursday, 1 January 1970 (the epoch in Unix speak)
    let date = new Date(unixDate);

    // display time in our new format
    let dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
    return dateString;
  }

  render() {
    const { error, isLoaded, meetups, videos } = this.state;
    if (error) {
      return <div><h2>Error: {error.message}</h2></div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Row>
          <Col>
            <h2> Coming Up: </h2>
            <hr />
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
          <Col>
          <h2> Past Events: </h2>
          <hr />
          { videos.map(video => (
            (video.id.videoId) ?
              <Card key={video.id.videoId}>
                <CardBody>
                  <CardTitle>{video.snippet.title}</CardTitle>
                </CardBody>
                <iframe title={video.snippet.title} allowFullScreen={true} src={'https://www.youtube.com/embed/' + video.id.videoId}>
                </iframe>
                <CardBody>
                  <CardText>{video.snippet.description}</CardText>
                </CardBody>
              </Card>
            : null
          ))}
          </Col>
        </Row>

      );
    }
  }
}

export default EventsList;
