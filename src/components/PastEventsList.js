import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardLink,CardSubtitle, CardBody, Row, Col, Jumbotron } from 'reactstrap';
import fetchJsonp from 'fetch-jsonp';

class PastEventsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      videos: []
    };
  }
  componentDidMount() {

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
    const { error, isLoaded, videos } = this.state;
    if (error) {
      return
      <div>
        <h2 hidden>Error: {error.message}</h2>
        <div>
          <h2 style="display:none">Error: {error.message}</h2>
          <Card>
            <CardBody>
              <CardTitle>AAAHHHH!!!!</CardTitle>
              <CardSubtitle>There was an error fetching our events! We will be contacting the monkeys responsible ASAP.</CardSubtitle>
            </CardBody>
            <CardBody>
              <CardLink href="" target="blank">In the meantime try visiting Meetup directly!</CardLink>
            </CardBody>
          </Card>
        </div>;
      </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Row>
          <Col>
            <Jumbotron>
              <h1>Missed our last event?</h1>
              <hr/>

              <p>
                We try to record important events so you can be there in spirit!
              </p>
            </Jumbotron>
            { videos.map(video => (
              (video.id.videoId) ?
                <Card width="500" key={video.id.videoId}>
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

export default PastEventsList;
