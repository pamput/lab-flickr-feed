/**
 * Created by Łukasz Kwasek on 10/3/15.
 */

var React = require('react');
var Link = require('./feed-route-link');

module.exports = React.createClass({
    render: function () {

        var text = this.props.text || "back";

        return (
            <div className="feed-component feed-back">
                <Link to="/">
                    <span className="icon-arrow-left">{text}</span>
                </Link>
            </div>
        );
    }
});