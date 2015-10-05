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
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});