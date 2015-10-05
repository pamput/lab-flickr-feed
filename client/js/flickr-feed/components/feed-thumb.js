/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var cx = require('classnames');
var $ = require('jquery');

var ReactRouter = require('react-router');
var Link = require('./feed-route-link');

module.exports = React.createClass({
    render: function () {

        var url = this.props.url;
        var href = this.props.href;
        var crop = this.props.crop || false;

        var style = {};
        if (url) {
            style['backgroundImage'] = "url('" + url + "')";
        }

        var classes = cx({
            'feed-component': true,
            'feed-thumb': true,
            'feed-thumb-crop': crop,
            'feed-thumb-missing': !url
        });

        if (href) {
            return (
                <Link to={href}>
                    <div className={classes} style={style}/>
                </Link>
            );
        } else {
            return (
                <div className={classes} style={style}/>
            );
        }
    }
});