/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var FeedBlank = require('./feed-blank');

module.exports = React.createClass({
    render: function () {

        var tags = this.props.tags;
        var anchors = [];

        if (tags) {
            anchors = tags.map(function (e, i) {
                var url = "https://www.flickr.com/search/?tags=" + e;
                return (
                    <span><a href={url}>{e}</a><FeedBlank/></span>
                );
            });
        }

        if (anchors && anchors.length > 0) {
            return (
                <div className="feed-component feed-tags">
                    <span>tags:</span> {anchors}
                </div>
            );
        } else {
            return (
                <div/>
            );
        }
    }
});