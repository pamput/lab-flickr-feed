/**
 * Created by Łukasz Kwasek on 10/3/15.
 */

var React = require('react');

module.exports = React.createClass({

    handleChange: function (event) {
        this.props.onSearch(event.target, event.target.value);
    },

    shouldComponentUpdate: function () {
        return false;
    },

    render: function () {

        var value = this.props.value;

        return (
            <input className="feed-component feed-search"
                   type={"text"}
                   placeholder="Search..."
                   onInput={this.handleChange}
                   defaultValue={value}/>
        );

    }
});