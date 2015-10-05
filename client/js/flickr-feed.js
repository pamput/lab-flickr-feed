/**
 * Created by Łukasz Kwasek on 9/29/15.
 */

var $ = require('jquery');
var React = require('react');
var FeedMain = require('./flickr-feed/feed-main');

$(function () {
    var node = $("#content")[0];
    React.render(
        <FeedMain />,
        node
    );
});
