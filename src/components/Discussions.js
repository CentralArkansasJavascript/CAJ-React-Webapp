import React from 'react';
import Disqus from 'disqus-react';
import { Jumbotron } from 'reactstrap';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Discussions extends React.Component {
    render() {
        const disqusShortname = 'central-arkansas-javascript';
        const disqusConfig = {
            url: 'https://caj-react-app.firebaseapp.com/',
            identifier: 121,
            title: "Share your thoughts!",
        };

        return (
            <div className="article">
              <Jumbotron>
                <h2>{disqusConfig.title}</h2>
                <hr/>
                <p>
                  Leave a comment, question, or ask us about the weather in Arkansas! We would love to hear from you!
                  If you would like to see a topic presented or would like to present a topic, leave us a comment here, or on <a href="https://www.facebook.com/CentralArkansasJavaScript">Facebook</a> or <a href="https://www.meetup.com/javascript-conway/">Meetup</a>.
                </p>
              </Jumbotron>
              <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
              </Disqus.CommentCount>
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}
export default Discussions;
