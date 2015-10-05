/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var FeedThumb = require('./components/feed-thumb');
var FeedTitle = require('./components/feed-title');
var FeedAuthor = require('./components/feed-author');
var FeedPublishDate = require('./components/feed-publish-date');
var FeedFlickrLink = require('./components/feed-flickr-link');
var FeedDescription = require('./components/feed-description');
var FeedTags = require('./components/feed-tags');
var FeedBlank = require('./components/feed-blank');
var FeedBack = require('./components/feed-back');

module.exports = React.createClass({
    render: function () {

        var title = this.props.title;
        var link = this.props.link;
        var thumbUrl = this.props.media.m;
        var description = this.props.description;
        var published = this.props.published;
        var author = this.props.author;
        var authorId = this.props.authorId;
        var tags = this.props.tags;

        return (
            <div className="feed-detail">
                <div className="feed-detail-head">
                    <FeedBack />
                    <FeedTitle title={title} url={link}/>
                    <FeedAuthor name={author} id={authorId}/>
                    <FeedBlank text={"|"}/>
                    <FeedPublishDate date={published}/>
                </div>
                <div className="feed-detail-body">
                    <div className="feed-detail-thumb">
                        <FeedThumb url={thumbUrl}/>
                    </div>
                    <div className="feed-detail-content">
                        <div className="feed-detail-content-body">
                            <FeedDescription content={description}/>
                        </div>
                        <div className="feed-detail-content-foot">
                            <FeedTags tags={tags}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});