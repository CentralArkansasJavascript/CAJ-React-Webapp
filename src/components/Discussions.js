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
            identifier: 123,
            title: "Share your thoughts!",
        };

        return (
            <div className="article">
              <Jumbotron>
                <h2>{disqusConfig.title}</h2>
              </Jumbotron>
              <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
              </Disqus.CommentCount>
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}
export default Discussions;
