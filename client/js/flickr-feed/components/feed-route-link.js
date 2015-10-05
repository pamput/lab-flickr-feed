/**
 * Created by Łukasz Kwasek on 10/3/15.
 */

var React = require('react');
var navigate = require('react-mini-router').navigate;

module.exports = React.createClass({

    handleClick: function () {
        navigate(this.props.to);
        return false;
    },

    render: function () {
        return (
            <a href="#" onClick={this.handleClick}>
                {this.props.children}
            </a>
        );
    }
});