/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function () {

        var url = this.props.url;
        var text = this.props.text || "View on Flicker!";

        return (
            <span className="feed-component feed-flickr-link">
				<a href={url}>
                    {text}
                </a>
			</span>
        );
    }
});