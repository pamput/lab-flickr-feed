/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var FeedList = require('../feed-list');
var FeedSearch = require('../components/feed-search');

module.exports = React.createClass({

    searchBox: null,

    render: function () {
        var feeds = this.props.feeds;
        var filter = this.props.feedsFilter;
        var uuid = this.props.uuid;
        var onFeedSearch = this.props.onFeedSearch;

        var feedListKey = ['feedList', uuid, 'filter'].join("_");

        return (
            <div>
                <FeedSearch key="search-box" onSearch={onFeedSearch} value={filter}/>
                <FeedList key={feedListKey} feeds={feeds} filter={filter}/>
            </div>
        );
    }
});