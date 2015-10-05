/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var FeedListEntry = require('./feed-list-entry');

module.exports = React.createClass({
    render: function () {

        var feedElements = [];
        var feeds = this.props.feeds;
        var filter = this.props.filter;


        if (feeds) {

            if (filter) {
                feeds = feeds.filter(function (e) {
                    return e.title.toUpperCase().indexOf(filter.toUpperCase()) > -1
                });
            }

            feedElements = feeds.map(function (e, i) {
                return (
                    <FeedListEntry key={e.link}
                                   index={i}
                                   title={e.title}
                                   link={e.link}
                                   media={e.media}
                                   description={e.description}
                                   published={e.published}
                                   author={e.author}
                                   authorId={e.author_id}
                                   tags={e.tags}
                        />
                );
            });
        }

        return (
            <div className="feeds-preview-list">
                {feedElements}
            </div>
        );
    }
});