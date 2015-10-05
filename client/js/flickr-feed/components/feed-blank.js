/**
 * Created by Łukasz Kwasek on 10/3/15.
 */

var React = require('react');

module.exports = React.createClass({
    render: function () {

        var text = this.props.text || " ";

        return (
            <span className="feed-component feed-blank">{text}</span>
        );
    }
});