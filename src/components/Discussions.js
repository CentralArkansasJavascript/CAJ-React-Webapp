import React from 'react';
import Disqus from 'disqus-react';
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Discussions extends React.Component {
    render() {
        const disqusShortname = 'example';
        const disqusConfig = {
            url: 'https://en.wikipedia.org/wiki/URL',
            identifier: 123,
            title: "Creative Title",
        };

        return (
            <div className="article">
                <h1>{disqusConfig.title}</h1>
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    Comments
                </Disqus.CommentCount>
                <p>Body</p>
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}
export default Discussions;
