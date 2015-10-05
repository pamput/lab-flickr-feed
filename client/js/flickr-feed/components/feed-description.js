/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

module.exports = React.createClass({
    render: function () {

        var content = this.props.content;

        if (content) {
            return (
                <div className="feed-component feed-description" dangerouslySetInnerHTML={{__html: content}}/>
            );
        } else {
            return (
                <div className="feed-component feed-description">
                    <span className="feed-no-description">no description</span>
                </div>
            );
        }
    }
});