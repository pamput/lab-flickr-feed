/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

module.exports = React.createClass({
    render: function () {

        var title = this.props.title;
        var url = this.props.url;

        if (url) {
            return (
                <span className="feed-component feed-title">
                    <a className="feed-content" href={url}>{title}</a>
                </span>
            );
        } else {
            return (
                <span className="feed-component feed-title">
                    <span className="feed-content">{title}</span>
                </span>
            );
        }
    }
});