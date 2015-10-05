/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var RouterMixin = require('react-mini-router').RouterMixin;

var FeedListPage = require('./pages/feed-list-page');
var FeedDetailPage = require('./pages/feed-detail-page');

var utils = require('./utils/utils');

module.exports = React.createClass({

    mixins: [RouterMixin],

    routes: {
        '/': 'feeds',
        '/feeds/:index': 'details'
    },

    feeds: function () {
        var feeds = this.props.feeds;
        var uuid = this.props.uuid;
        var feedsFilter = this.props.feedsFilter;

        return (<FeedListPage key={uuid}
                              uuid={uuid}
                              feeds={feeds}
                              feedsFilter={feedsFilter}
                              onFeedSearch={this.props.onFeedSearch}
            />);
    },

    details: function (index) {
        var feeds = this.props.feeds;
        var uuid = this.props.uuid;

        return (<FeedDetailPage key={uuid}
                                feeds={feeds}
                                index={index}
                                onFeedNotFound={this.props.onFeedNotFound}
            />);
    },

    notFound: function (path) {
        return this.feeds();
    },

    render: function () {
        return this.renderCurrentRoute();
    }
});