/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var $ = require('jquery');
var React = require('react');
var navigate = require('react-mini-router').navigate;

var FeedRouter = require('./feed-router');
var FeedList = require('./feed-list');
var utils = require('./utils/utils');

module.exports = React.createClass({

    getInitialState: function () {
        return {
            feeds: [],
            uuid: utils.uuid(),
            feedsFilter: null
        };
    },

    componentDidMount: function () {
        if (!this.state.feeds || this.state.feeds.length == 0) {
            $.ajax({
                url: "https://api.flickr.com/services/feeds/photos_public.gne",

                jsonpCallback: "jsonFlickrFeed",
                dataType: "jsonp",

                data: {
                    tags: "potato",
                    tagmode: "all",
                    format: "json"
                },

                success: function (data) {
                    this.handleFeedsData(data);
                }.bind(this)
            });
        }
    },

    render: function () {
        var feeds = this.state.feeds;
        var uuid = this.state.uuid;
        var feedsFilter = this.state.feedsFilter;

        return (
            <FeedRouter
                uuid={uuid}
                feeds={feeds}
                feedsFilter={feedsFilter}
                onFeedNotFound={this.handleFeedNotFound}
                onFeedSearch={this.handleFeedSearch}
                />
        );
    },

    handleFeedsData: function (data) {
        var feeds = data.items;
        this.setState({
            feeds: feeds,
            uuid: utils.uuid()
        });

        var index = this.lastNotFoundIndex;
        if (index && feeds[index]) {
            navigate("/feeds/" + index);

            delete this.lastNotFoundIndex;
        }
    },

    handleFeedNotFound: function (index) {
        this.lastNotFoundIndex = index;
    },

    handleFeedSearch: function (element, value) {
        this.setState({
            feedsFilter: value
        });
    }
});