/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');
var FeedThumb = require('./components/feed-thumb');
var FeedTitle = require('./components/feed-title');
var FeedAuthor = require('./components/feed-author');
var FeedPublishDate = require('./components/feed-publish-date');
var FeedFlickrLink = require('./components/feed-flickr-link');
var FeedBlank = require('./components/feed-blank');

var Link = require('./components/feed-route-link');


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

        var url = "/feeds/" + this.props.index;

        return (
            <div className="feeds-preview-entry">
                <div className="feeds-preview-thumb">
                    <FeedThumb url={thumbUrl} crop={true} href={url}/>
                </div>
                <div className="feeds-preview-body">
                    <div className="feed-title-container">
                        <Link to={url}>
                            <FeedTitle title={title}/>
                        </Link>
                    </div>

                    <div className="feeds-preview-details">
                        <FeedAuthor name={author} id={authorId}/>
                        <FeedPublishDate date={published}/>
                        <FeedFlickrLink url={link}/>
                    </div>
                </div>
                <div className="clear"/>
            </div>
        );
    }
});