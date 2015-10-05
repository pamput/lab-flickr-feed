/**
 * Created by Łukasz Kwasek on 9/30/15.
 */

var React = require('react');

function getName(props) {

    var regex = /^[^(]*\((.*)\)$/;
    var matches = regex.exec(props.name);

    if (matches.length == 2) {
        return matches[1];
    } else {
        return matches[0];
    }
}

function getUrl(props) {
    return "https://www.flickr.com/photos/" + props.id;
}

module.exports = React.createClass({
    render: function () {

        var name = getName(this.props);
        var url = getUrl(this.props);

        return (
            <span className="feed-component feed-author">
                <a className="feed-content" href={url}>{name}</a>
            </span>
        );
    }
});