/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

module.exports = React.createClass({
    render: function () {

        var date = new Date(this.props.date).toLocaleString();


        return (
            <span className="feed-component feed-publish-date">
                 {date}
            </span>
        );
    }
});