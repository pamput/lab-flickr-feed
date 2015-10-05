/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var $ = require('jquery');
var React = require('react');
var FeedDetail = require('../feed-detail');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;

module.exports = React.createClass({

    render: function () {
        var feeds = this.props.feeds;
        var index = this.props.index;

        var feed = feeds[index];

        if (feed) {

            var description = $(feed.description)[4];
            if (description) {
                description = $(description).html();
            }

            return (
                <FeedDetail title={feed.title}
                            link={feed.link}
                            media={feed.media}
                            description={description}
                            published={feed.published}
                            author={feed.author}
                            authorId={feed.author_id}
                            tags={feed.tags.split(" ")}
                    />
            );
        } else {
            this.props.onFeedNotFound(index);

            return (
                <div />
            );
        }
    }
});